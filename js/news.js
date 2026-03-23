// --- お知らせ・実績データ管理 ---
const newsData = [
    {
        date: "2026.02.28",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "行方不明猫捜索の成功報告",
        description: "米花町3丁目での捜索依頼、無事に発見・保護に至りました。"
    },
    {
        date: "2026.02.28",
        category: "お知らせ",
        categoryClass: "bg-yellow-600",
        title: "春の「安心相談キャンペーン」実施のお知らせ",
        description: "4月末まで、初回相談後の詳細見積もりを無料で作成いたします。"
    },
    {
        date: "2026.02.22",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "企業の信用調査：新規取引先の背景確認",
        description: "法人様からのご依頼。対象企業の資産状況および反社会的勢力との関与がないことを確認しました。"
    },
    {
        date: "2026.02.20",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "行方不明猫捜索の成功報告",
        description: "米花町2丁目での捜索依頼、無事に発見・保護に至りました。"
    },
    {
        date: "2026.02.28",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "行方不明猫捜索の成功報告",
        description: "米花町3丁目での捜索依頼、無事に発見・保護に至りました。"
    },
    {
        date: "2026.02.28",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "行方不明猫捜索の成功報告",
        description: "米花町3丁目での捜索依頼、無事に発見・保護に至りました。"
    },
    {
        date: "2026.02.26",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "行方不明猫捜索の成功報告",
        description: "米花町3丁目での捜索依頼、無事に発見・保護に至りました。"
    },
    {
        date: "2026.03.10",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "資産家宅における宝飾品盗難事件の真相解明",
        description: "米花町5丁目の資産家宅にて発生した「紅蓮の涙」盗難事件を解決しました。"
    },
    {
        date: "2026.02.05",
        category: "お知らせ",
        categoryClass: "bg-yellow-600",
        title: "防犯アドバイザー就任のお知らせ",
        description: "米花市安全街づくり委員会の「特別防犯顧問」に就任いたしました。"
    },
    {
        date: "2025.12.15",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "「暗号文のラブレター」行方不明者捜索の成功",
        description: "10年前の暗号を解読し、初恋の相手を捜索してほしいという依頼を完遂しました。"
    },
    {
        date: "2026.03.15",
        category: "お知らせ",
        categoryClass: "bg-yellow-600",
        title: "「眠りの小五郎」取材記事が掲載されました",
        description: "週刊ミステリーマガジンにて、弊所の調査実績が特集されました。",
        content: "今月発売の『週刊ミステリーマガジン 4月号』の巻頭特集にて、毛利小五郎のこれまでの功績が紹介されました。眠りの小五郎としての鋭い推理と、これまでに解決してきた数々の難事件についての独占インタビューが掲載されています。"
    },
    {
        date: "2025.06.10",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "米花博物館「消えた真珠」盗難事件のスピード解決",
        description: "厳重な警備を潜り抜けたとされる盗難事件を、現場検証からわずか2時間で解決しました。",
        content: "米花博物館で展示中だった時価3億円の真珠が消失。外部からの侵入形跡がない密室状況でしたが、現場に残された微かな香水の匂いと、関係者の証言の矛盾を突き、内部犯行であることを特定。無事に展示品を奪還いたしました。"
    },
    {
        date: "2025.03.05",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "杯戸シティホテルにおける身辺警護",
        description: "某IT企業社長の警護依頼。不審者の接近を未然に防ぎ、無事にイベントを終えました。",
        content: "殺害予告を受けていたクライアントの身辺警護を担当。会場の死角をすべて網羅し、スタッフに紛れ込んでいた不審者を特定。警察と連携し、危害が加えられる前に身柄を確保しました。クライアントの安全を完全に守り抜きました。"
    },
    {
        date: "2024.02.28",
        category: "お知らせ",
        categoryClass: "bg-yellow-600",
        title: "春の「安心相談キャンペーン」実施のお知らせ",
        description: "4月末まで、初回相談後の詳細見積もりを無料で作成いたします。",
        content: "新生活が始まるこの時期、不安を解消するための特別キャンペーンを実施します。浮気調査、身辺調査、ストーカー対策など、どんな悩みでもお気軽にご相談ください。期間中は専門のカウンセラーによるヒアリングも通常より時間を拡大して対応いたします。"
    },
    {
        date: "2024.05.25",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "資産家宅「開かずの金庫」解読と遺言書発見",
        description: "数十年閉ざされていた金庫の暗号を解読し、依頼人の正当な権利を証明しました。",
        content: "亡くなった資産家の遺族からの依頼。暗号化されたダイヤル式の金庫を、故人の趣味や過去の記録から読み解き解錠。中からは隠されていた自筆証書遺言が見つかり、親族間の紛争を円満解決に導くことができました。"
    },
    {
        date: "2024.02.22",
        category: "実績報告",
        categoryClass: "bg-slate-700",
        title: "「黒い猫」連続誘拐事件の犯人特定",
        description: "米花町5丁目周辺で発生していたペット誘拐事件。独自の聞き込みで犯人の拠点を突き止めました。",
        content: "特定の種類の猫ばかりが狙われる奇妙な事件。近隣の防犯カメラの死角を地図化し、犯人の逃走経路を予測。張り込みの結果、犯人を現行犯で押さえ、保護されていた12匹の猫たちを飼い主の元へ無事帰還させました。"
    }
];

const itemsPerPage = 5;
let currentPage = 1;

function displayPage(page) {
    const newsList = document.getElementById('news-list');
    const paginationContainer = document.getElementById('pagination');
    
    if (!newsList || !paginationContainer) return;

    newsList.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = newsData.slice(start, end);

    paginatedItems.forEach(item => {
        const article = document.createElement('article');
        article.className = 'p-6 bg-white border-l-4 border-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer hover:bg-slate-50';
        
        // クリックイベントの追加
        article.onclick = () => showNewsDetail(item);

        article.innerHTML = `
            <div class="flex items-center space-x-4 mb-2">
                <span class="text-white text-[10px] px-2 py-1 font-bold ${item.categoryClass}">${item.category}</span>
                <span class="text-xs text-slate-400 font-mono">${item.date}</span>
            </div>
            <div>
                <h4 class="font-bold text-slate-900">${item.title}</h4>
                <p class="text-xs text-slate-500 mt-1">${item.description}</p>
            </div>
        `;
        newsList.appendChild(article);
    });

    renderPagination(page);
}

function renderPagination(currentPage) {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = Math.ceil(newsData.length / itemsPerPage);
    paginationContainer.innerHTML = '';

    const prevBtn = document.createElement('button');
    prevBtn.className = `p-2 border border-slate-200 transition ${currentPage === 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50'}`;
    prevBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`;
    if (currentPage > 1) prevBtn.onclick = () => displayPage(currentPage - 1);
    paginationContainer.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const btn = document.createElement('button');
            btn.className = `pagination-link ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.onclick = () => displayPage(i);
            paginationContainer.appendChild(btn);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            const dots = document.createElement('span');
            dots.className = 'text-slate-400 px-1';
            dots.textContent = '...';
            paginationContainer.appendChild(dots);
        }
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = `p-2 border border-slate-200 transition ${currentPage === totalPages ? 'text-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50'}`;
    nextBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
    if (currentPage < totalPages) nextBtn.onclick = () => displayPage(currentPage + 1);
    paginationContainer.appendChild(nextBtn);
}

// モーダル表示機能
function showNewsDetail(item) {
    // モーダル用のコンテナを作成
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-sm';
    
    // テンプレートリテラルで中身を構築
    modal.innerHTML = `
        <div class="bg-[#f9f7f2] max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-300">
            <div class="sticky top-0 bg-[#1a2a40] text-white p-4 flex justify-between items-center">
                <span class="text-xs font-bold tracking-widest uppercase">News Report</span>
                <button id="close-modal" class="text-white hover:text-yellow-500 transition text-2xl">&times;</button>
            </div>
            <div class="p-8">
                <div class="flex items-center space-x-4 mb-6">
                    <span class="text-white text-xs px-3 py-1 font-bold ${item.categoryClass}">${item.category}</span>
                    <span class="text-sm text-slate-400 font-mono">${item.date}</span>
                </div>
                <h3 class="font-serif-jp text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">${item.title}</h3>
                <div class="w-12 h-1 bg-yellow-600 mb-8"></div>
                <div class="text-slate-700 leading-relaxed space-y-4">
                    <p class="font-bold text-lg text-slate-800">${item.description}</p>
                    <p class="whitespace-pre-wrap">${item.content || " "}</p>
                </div>
                <div class="mt-6 pt-8 border-t border-slate-200 text-center">
                    <button id="close-modal-btn" class="bg-[#1a2a40] text-white px-8 py-3 text-xs font-bold tracking-widest hover:bg-yellow-600 transition">
                        閉じる
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // 背後のスクロールを禁止

    // 閉じる処理
    const closeModal = () => {
        modal.classList.add('animate-out', 'fade-out', 'zoom-out');
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 200);
    };

    document.getElementById('close-modal').onclick = closeModal;
    document.getElementById('close-modal-btn').onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };
}

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
    // 日付の新しい順（降順）にソートを追加
    newsData.sort((a, b) => new Date(b.date.replace(/\./g, '/')) - new Date(a.date.replace(/\./g, '/')));
    
    const topNewsTitle = document.getElementById('topNews');
    if (topNewsTitle && newsData.length > 0) {
        // ソート済みのデータの先頭（最新）を代入
        topNewsTitle.textContent = newsData[0].title;

        // トップニュース領域をクリック可能にし、遷移させる
        const topNewsContainer = topNewsTitle.parentElement;
        if (topNewsContainer) {
            topNewsContainer.style.cursor = 'pointer';
            topNewsContainer.classList.add('hover:opacity-70', 'transition-opacity');
            topNewsContainer.addEventListener('click', () => {
                window.location.href = 'news.html?news=new';
            });
        }
    }
    
    displayPage(1);

    //遷移先のnews.htmlで、パラメータがあれば最新記事を自動で開く
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('news') === 'new' && newsData.length > 0) {
        showNewsDetail(newsData[0]);
    }
});