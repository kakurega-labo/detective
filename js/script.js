document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.nav-link, #menu a');
    const backToTop = document.getElementById('back-to-top');

    const toggleMenu = () => {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            // リフローを待ってからactiveを付与することで transition を効かせる
            void menu.offsetWidth; 
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
            // アニメーション完了後に hidden に戻す
            setTimeout(() => {
                if (!menu.classList.contains('active')) {
                    menu.classList.add('hidden');
                }
            }, 300);
        }
    };

    menuBtn.addEventListener('click', toggleMenu);

    const mobileMenuItems = document.querySelectorAll('#menu li');
    
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const link = item.querySelector('a');
            if (!link) return;

            if (e.target !== link) {
                link.click();
            }

            // メニューが開いているなら閉じる
            if (menu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // ヘッダーの透過度変更
        if (scrollY > 50) {
            header.classList.add('bg-opacity-95');
            header.classList.add('backdrop-blur-sm');
        } else {
            header.classList.remove('bg-opacity-95');
            header.classList.remove('backdrop-blur-sm');
        }

        // トップへ戻るボタンの表示制御
        if (scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
    const mainContent = document.querySelector('main') || document.body; // mainタグを取得
    const contactForm = document.querySelector('#contact form');
    // 元のサイト全体（mainの中身）を保持（復元用）
    const originalMainContent = mainContent.innerHTML;

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = '送信中...';

        // 完了画面のテンプレート（画面全体に広がるスタイルを適用）
        const completionTemplate = `
            <div class="min-h-[100vh] flex items-center justify-center bg-white animate-fade-in">
                <div class="text-center px-6">
                    <div class="mb-8">
                        <svg class="w-20 h-20 text-yellow-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="font-serif-jp text-3xl font-bold mb-4 text-slate-900">お問い合わせありがとうございます</h3>
                    <p class="text-slate-600 mb-12 leading-relaxed">
                        内容を確認の上、担当者より24時間以内に折り返しご連絡いたします。<br>
                        今しばらくお待ちください。
                    </p>
                    <button id="return-to-top-btn" class="inline-block bg-[#1a2a40] text-white px-12 py-4 font-bold tracking-[0.2em] hover:bg-yellow-600 transition-colors duration-300">
                        TOPへ戻る
                    </button>
                </div>
            </div>
        `;

        // ヘッダー以外のメインコンテンツをすべて削除し、完了画面に置き換え
        mainContent.innerHTML = completionTemplate;
        
        // 画面上部へ瞬時に移動
        window.scrollTo(0, 0);

        // 生成された「TOPへ戻る」ボタンにイベントを設定
        document.getElementById('return-to-top-btn').addEventListener('click', () => {
            // サイト全体を復元
            mainContent.innerHTML = originalMainContent;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            location.reload(); 
        });
    });
  }
    // 動的ページネーション機能
    const newsContainer = document.getElementById('news-container');
    const paginationContainer = document.getElementById('pagination');

    if (newsContainer && paginationContainer) {
        const articles = Array.from(newsContainer.querySelectorAll('article'));
        const itemsPerPage = 5;
        const totalPages = Math.ceil(articles.length / itemsPerPage);
        let currentPage = 1;

        const updateDisplay = (page) => {
            currentPage = page;
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;

            // 記事の表示・非表示切り替え
            articles.forEach((article, index) => {
                article.classList.toggle('hidden', index < start || index >= end);
            });

            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const renderPagination = () => {
            paginationContainer.innerHTML = '';

            // 前へボタン
            const prevBtn = document.createElement('button');
            prevBtn.className = `p-2 border border-slate-200 transition ${currentPage === 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50'}`;
            prevBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`;
            if (currentPage > 1) prevBtn.onclick = () => updateDisplay(currentPage - 1);
            paginationContainer.appendChild(prevBtn);

            // 数字ボタンのロジック
            for (let i = 1; i <= totalPages; i++) {
                // 1ページ目、最後、現在の前後だけ表示する
                if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    const pageBtn = document.createElement('button');
                    pageBtn.className = `pagination-link ${i === currentPage ? 'active' : ''}`;
                    pageBtn.textContent = i;
                    pageBtn.onclick = () => updateDisplay(i);
                    paginationContainer.appendChild(pageBtn);
                } else if (i === currentPage - 2 || i === currentPage + 2) {
                    const dots = document.createElement('span');
                    dots.className = 'text-slate-400 px-1';
                    dots.textContent = '...';
                    paginationContainer.appendChild(dots);
                }
            }

            // 次へボタン
            const nextBtn = document.createElement('button');
            nextBtn.className = `p-2 border border-slate-200 transition ${currentPage === totalPages ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50'}`;
            nextBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
            if (currentPage < totalPages) nextBtn.onclick = () => updateDisplay(currentPage + 1);
            paginationContainer.appendChild(nextBtn);
        };

        // 初期表示
        updateDisplay(1);
    }
});
