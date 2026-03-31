document.addEventListener('DOMContentLoaded', () => {
    // --- 1. スポットデータ ---
    const locations = [
        { 
            id: "mouri", 
            name: "毛利探偵事務所", 
            x: 2520, y: 2480, 
            type: "office", 
            rating: "4.5", 
            reviews: "24", 
            img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=200", 
            desc: "1階に喫茶ポアロが入る雑居ビルの2階。元刑事の毛利小五郎が営む事務所。", 
            tags: ["探偵", "事務所", "毛利", "小五郎"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町5丁目39番地1号",
            site: "https://mouri-detective.netlify.app",
            tell: "0300-7974-5560",
            status: "営業中"
        },
        { 
            id: "poirot", 
            name: "喫茶ポアロ", 
            x: 2520, y: 2520, 
            type: "cafe", 
            rating: "4.8", 
            reviews: "156", 
            img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200", 
            desc: "ハムサンドが絶品の落ち着いたカフェ。看板店員の安室透が人気。", 
            tags: ["カフェ", "コーヒー", "サンドイッチ", "安室"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町5丁目39番地1号",
            site: "https://kissa-poaro.com",
            tell: "03-8821-0915",
            status: "営業中"
        },
        { 
            id: "daiyu", 
            name: "大友 DAIYU", 
            x: 2600, y: 2580, 
            type: "mall", 
            rating: "4.2", 
            reviews: "450", 
            img: "https://images.unsplash.com/photo-1567401893424-76b7c28c71e1?w=400", 
            desc: "米花駅西側に隣接する大型百貨店。ファッションから日用品まで幅広く揃う。", 
            tags: ["ショッピング", "百貨店", "買い物"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町2丁目28番地",
            status: "営業中"
        },
        { 
            id: "east-plaza", 
            name: "米花駅 東口広場（噴水）", 
            x: 2650, y: 2500, 
            type: "park", 
            rating: "4.1", 
            reviews: "85", 
            img: "https://images.unsplash.com/photo-1596438415110-6c0b399226d4?w=400", 
            desc: "中央に噴水がある開放的な広場。待ち合わせの定番スポット。周辺にはベンチも設置されている。", 
            tags: ["広場", "待ち合わせ", "噴水"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町2丁目",
            status: "開放中"
        },
        { 
            id: "burger-bs", 
            name: "バーガー・ショップ (-BS-)", 
            x: 2650, y: 2450, 
            type: "food", 
            rating: "3.9", 
            reviews: "210", 
            img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", 
            desc: "1階がレジ、2階が座席のファストフード店。駅近で学生にも人気。", 
            tags: ["ハンバーガー", "ファストフード", "ランチ"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町2丁目",
            status: "営業中"
        },
        { 
            id: "ramen-sui", 
            name: "ラーメン 翠", 
            x: 2650, y: 2550, 
            type: "food", 
            rating: "4.3", 
            reviews: "128", 
            img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", 
            desc: "駅裏路地に構える人気のラーメン店。深いコクのスープが特徴。", 
            tags: ["ラーメン", "飲食店", "グルメ"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町2丁目",
            status: "営業中"
        },
        { 
            id: "beika-bank", 
            name: "米花銀行", 
            x: 2550, y: 2600, 
            type: "bank", 
            rating: "3.5", 
            reviews: "42", 
            img: "https://images.unsplash.com/photo-1541354450193-7da2047a9ca8?w=400", 
            desc: "米花駅南側に位置する地方銀行の支店。ATM完備。", 
            tags: ["銀行", "ATM", "金融"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町2丁目",
            status: "営業中"
        },
        { 
            id: "bus-stop", 
            name: "米花駅前バス停", 
            x: 2550, y: 2550, 
            type: "station", 
            rating: "3.7", 
            reviews: "20", 
            img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400", 
            desc: "渋谷方面など各路線が発着するバス停。歩道橋の近くに位置する。", 
            tags: ["バス", "停留所", "交通"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町2丁目",
            status: "運行中"
        },
        { 
            id: "school", 
            name: "帝丹小学校", 
            x: 2100, y: 2100, 
            type: "school", 
            rating: "4.2", 
            reviews: "42", 
            img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200", 
            desc: "米花市米花町にキャンパスを置く米花大学の系列校。", 
            tags: ["学校", "小学校", "少年探偵団"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町5丁目39番地1号",
            site: "https://tr-east.co.jp/station/beika",
            tell: "0300-9684-2604"
        },
        { 
            id: "beika-st", 
            name: "米花駅", 
            x: 2500, y: 2500, 
            type: "station", 
            rating: "4.2", 
            reviews: "1250", 
            img: "https://images.unsplash.com/photo-1561530931-97b778796850?w=200", 
            desc: "東都環状線、東都線、中央線が乗り入れる広域拠点駅。駅前にはバスロータリーが整備され、商業ビルとの連絡通路も完備されています。", 
            tags: ["駅", "鉄道", "東都鉄道", "米花"], 
            postcode: "〒100-0001", 
            address: "東京都米花市米花町2丁目",
            site: "https://toto-railway.jp/station/beika/",
            tell: "0300-1234-5678",
            status: "営業中"
        },
        { 
            id: "haido-st", 
            name: "杯戸駅", 
            x: 2100, y: 2500, 
            type: "station", 
            rating: "4.0", 
            reviews: "890", 
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200", 
            desc: "港線と東都環状線の接続駅。近隣には杯戸シティホテルや大型デパートが立地し、休日には多くの買い物客で賑わいます。", 
            tags: ["駅", "鉄道", "港線", "杯戸"], 
            postcode: "〒100-0002", 
            address: "東京都米花市杯戸町4丁目",
            site: "https://toto-railway.jp/station/haido/",
            tell: "0300-8888-9999",
            status: "営業中"
        },
        { 
            id: "midoridai-st", 
            name: "緑台駅", 
            x: 3300, y: 2500, 
            type: "station", 
            rating: "3.8", 
            reviews: "420", 
            img: "https://images.unsplash.com/photo-1515165561111-0d39e5572005?w=200", 
            desc: "東都環状線の北部に位置する閑静な住宅街の玄関口。通勤通学時間帯を除き、比較的穏やかな雰囲気の駅です。", 
            tags: ["駅", "鉄道", "緑台"], 
            postcode: "〒100-0003", 
            address: "東京都米花市緑台1丁目",
            site: "https://toto-railway.jp/station/midoridai/",
            tell: "0300-5555-4444",
            status: "営業中"
        },
        { 
            id: "shibahama-st", 
            name: "芝浜駅", 
            x: 2900, y: 2900, 
            type: "station", 
            rating: "4.1", 
            reviews: "310", 
            img: "https://images.unsplash.com/photo-1590483734724-38fa19dd6be9?w=200", 
            desc: "ウォーターフロント開発エリアに位置する駅。周辺のオフィス街へのアクセスが良く、モノレールへの乗り換えもスムーズ。", 
            tags: ["駅", "海沿い", "芝浜"], 
            postcode: "〒100-0004", 
            address: "東京都東都区芝浜1丁目",
            site: "https://toto-railway.jp/station/shibahama/",
            tell: "0300-2222-3333",
            status: "営業中"
        },
        {
            id: "sawabukuro-st",
            name: "沢袋駅",
            x: 1300, y: 2500,
            type: "station",
            rating: "4.3",
            reviews: "2100",
            img: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?w=200",
            desc: "港線の始発駅であり、東都環状線との主要接続駅。広大な地下街を有し、都内有数のバスターミナルを併設している。",
            tags: ["駅", "港線", "ターミナル"],
            postcode: "〒100-0010",
            address: "東京都東都区沢袋1丁目",
            site: "https://toto-railway.jp/station/sawabukuro/",
            tell: "0300-1111-2222",
            status: "営業中"
        },
        {
            id: "shimodanobaba-st",
            name: "下田馬場駅",
            x: 1700, y: 2500,
            type: "station",
            rating: "3.9",
            reviews: "750",
            img: "https://images.unsplash.com/photo-1495001258031-d1b407bc1776?w=200",
            desc: "東都中央線の停車駅。周辺は古くからの学生街として知られ、飲食店や書店が多く活気に満ちたエリア。",
            tags: ["駅", "中央線", "学生街"],
            postcode: "〒100-0011",
            address: "東京都米花市下田馬場2丁目",
            site: "https://toto-railway.jp/station/shimodanobaba/",
            tell: "0300-3333-4444",
            status: "営業中"
        },
        {
            id: "egisu-st",
            name: "恵木寿駅",
            x: 2500, y: 3300,
            type: "station",
            rating: "4.5",
            reviews: "1800",
            img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=200",
            desc: "東都環状線の南部に位置する駅。洗練された商業施設やオフィスビルが隣接し、非常に利便性が高いエリア。",
            tags: ["駅", "東都環状線", "恵木寿"],
            postcode: "〒100-0012",
            address: "東京都東都区恵木寿1丁目",
            site: "https://toto-railway.jp/station/egisu/",
            tell: "0300-5555-6666",
            status: "営業中"
        },
        {
            id: "kamibeika-st-1",
            name: "上米花駅",
            x: 2500, y: 2100,
            type: "station",
            rating: "3.7",
            reviews: "450",
            img: "https://images.unsplash.com/photo-1515165561111-0d39e5572005?w=200",
            desc: "米花駅の北隣に位置する住宅街の最寄り駅。閑静な環境で、通勤・通学客の利用が中心となっている。",
            tags: ["駅", "東都線", "住宅街"],
            postcode: "〒100-0013",
            address: "東京都米花市上米花1丁目",
            site: "https://toto-railway.jp/station/kamibeika/",
            tell: "0300-7777-8888",
            status: "営業中"
        },
        {
            id: "kokubo-st",
            name: "小久保駅",
            x: 2900, y: 2500,
            type: "station",
            rating: "3.8",
            reviews: "320",
            img: "https://images.unsplash.com/photo-1590483734724-38fa19dd6be9?w=200",
            desc: "東都中央線の快速停車駅。駅周辺は再開発が進んでおり、高層マンションと商業施設が一体化した便利な環境。",
            tags: ["駅", "中央線", "小久保"],
            postcode: "〒100-0014",
            address: "東京都米花市小久保1丁目",
            site: "https://toto-railway.jp/station/kokubo/",
            tell: "0300-9999-0000",
            status: "営業中"
        },
        {
            id: "sorajuku-st",
            name: "空宿駅",
            x: 2500, y: 2300,
            type: "station",
            rating: "4.4",
            reviews: "2900",
            img: "https://images.unsplash.com/photo-1561530931-97b778796850?w=200",
            desc: "若者文化の発信地として知られるエリア。駅前は常に賑わいを見せ、ファッションビルや小規模なブティックが密集している。",
            tags: ["駅", "東都環状線", "空宿"],
            postcode: "〒150-0001",
            address: "東京都東都区空宿1丁目",
            site: "https://toto-railway.jp/station/sorajuku/",
            tell: "0300-1212-3434",
            status: "営業中"
        },
        {
            id: "meidai-st",
            name: "鳴大前駅",
            x: 900, y: 2500,
            type: "station",
            rating: "4.1",
            reviews: "980",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200",
            desc: "港線と私鉄が交差する交通の要所。駅周辺は飲食店が密集しており、夜間も多くの人で賑わっている。",
            tags: ["駅", "港線", "乗り換え駅"],
            postcode: "〒156-0001",
            address: "東京都世田谷区鳴大前",
            site: "https://toto-railway.jp/station/meidai/",
            tell: "0300-5656-7878",
            status: "営業中"
        },
        {
            id: "kamibeika-st-2",
            name: "上米花駅",
            x: 2500, y: 2050,
            type: "station",
            rating: "3.9",
            reviews: "540",
            img: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?w=200",
            desc: "東都環状線の北部に位置する駅。閑静な高級住宅街が広がり、都心への通勤・通学客の利用が非常に多いエリア。",
            tags: ["駅", "東都環状線", "上米花"],
            postcode: "〒100-0021",
            address: "東京都米花市上米花1丁目",
            site: "https://toto-railway.jp/station/kamibeika/",
            tell: "0300-1111-2222",
            status: "営業中"
        },
        {
            id: "higashibeika-st",
            name: "東米花駅",
            x: 2900, y: 2100,
            type: "station",
            rating: "3.7",
            reviews: "320",
            img: "https://images.unsplash.com/photo-1495001258031-d1b407bc1776?w=200",
            desc: "オフィスビルと住宅が混在する中規模駅。駅前にはスーパーやドラッグストアなどの生活利便施設が充実している。",
            tags: ["駅", "東都環状線", "東米花"],
            postcode: "〒100-0022",
            address: "東京都米花市東米花2丁目",
            site: "https://toto-railway.jp/station/higashibeika/",
            tell: "0300-3333-4444",
            status: "営業中"
        },
        {
            id: "amakura-st",
            name: "天倉駅",
            x: 3100, y: 2500,
            type: "station",
            rating: "4.0",
            reviews: "610",
            img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=200",
            desc: "東都環状線の東側に位置する。近年、IT企業のサテライトオフィス誘致が進んでおり、平日昼間の乗降客数が増加傾向にある。",
            tags: ["駅", "東都環状線", "天倉"],
            postcode: "〒100-0023",
            address: "東京都東都区天倉町",
            site: "https://toto-railway.jp/station/amakura/",
            tell: "0300-5555-6666",
            status: "営業中"
        },
        {
            id: "kurosawa-st",
            name: "黒沢駅",
            x: 2900, y: 2900,
            type: "station",
            rating: "3.6",
            reviews: "280",
            img: "https://images.unsplash.com/photo-1515165561111-0d39e5572005?w=200",
            desc: "古くからの町工場と住宅が共存するエリア。駅高架下の商店街には地元密着型の店舗が立ち並ぶ。",
            tags: ["駅", "東都環状線", "黒沢"],
            postcode: "〒100-0024",
            address: "東京都東都区黒沢町",
            site: "https://toto-railway.jp/station/kurosawa/",
            tell: "0300-7777-8888",
            status: "営業中"
        },
        {
            id: "shimobeika-st",
            name: "下米花駅",
            x: 2700, y: 3100,
            type: "station",
            rating: "3.8",
            reviews: "410",
            img: "https://images.unsplash.com/photo-1590483734724-38fa19dd6be9?w=200",
            desc: "米花大学の最寄り駅の一つ。学生向けの安価な飲食店が多く、活気に満ちた駅前が特徴。",
            tags: ["駅", "東都環状線", "下米花"],
            postcode: "〒100-0025",
            address: "東京都米花市下米花3丁目",
            site: "https://toto-railway.jp/station/shimobeika/",
            tell: "0300-9999-0000",
            status: "営業中"
        },
        {
            id: "kouda-st",
            name: "香田駅",
            x: 2500, y: 3100,
            type: "station",
            rating: "4.1",
            reviews: "720",
            img: "https://images.unsplash.com/photo-1561530931-97b778796850?w=200",
            desc: "東都環状線と地下鉄線の接続駅。広大な地下歩道を通じて主要な商業ビルへ雨に濡れずにアクセス可能。",
            tags: ["駅", "東都環状線", "香田"],
            postcode: "〒100-0026",
            address: "東京都東都区香田町",
            site: "https://toto-railway.jp/station/kouda/",
            tell: "0300-1212-3434",
            status: "営業中"
        },
        {
            id: "minamiosugi-st",
            name: "南大杉駅",
            x: 2300, y: 3100,
            type: "station",
            rating: "3.9",
            reviews: "380",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200",
            desc: "緑豊かな公園に隣接する駅。週末は家族連れでの利用が多く、落ち着いた雰囲気の駅。",
            tags: ["駅", "東都環状線", "南大杉"],
            postcode: "〒100-0027",
            address: "東京都米花市南大杉1丁目",
            site: "https://toto-railway.jp/station/minamiosugi/",
            tell: "0300-5656-7878",
            status: "営業中"
        },
        {
            id: "akie-st",
            name: "昭江駅",
            x: 2100, y: 2900,
            type: "station",
            rating: "3.5",
            reviews: "190",
            img: "https://images.unsplash.com/photo-1515165561111-0d39e5572005?w=200",
            desc: "環状線西部の住宅拠点。駅構内に保育施設が併設されており、子育て世代の利便性が考慮されている。",
            tags: ["駅", "東都環状線", "昭江"],
            postcode: "〒100-0028",
            address: "東京都米花市昭江町",
            site: "https://toto-railway.jp/station/akie/",
            tell: "0300-9090-1212",
            status: "営業中"
        },
        {
            id: "egaki-st",
            name: "江木駅",
            x: 1900, y: 2500,
            type: "station",
            rating: "3.7",
            reviews: "260",
            img: "https://images.unsplash.com/photo-1590483734724-38fa19dd6be9?w=200",
            desc: "古くからの繁華街への入口となる駅。小規模な個人商店が立ち立ち並び、情緒ある風景が残っている。",
            tags: ["駅", "東都環状線", "江木"],
            postcode: "〒100-0029",
            address: "東京都米花市江木町",
            site: "https://toto-railway.jp/station/egaki/",
            tell: "0300-3434-5656",
            status: "営業中"
        },
        {
            id: "kouki-st",
            name: "耕木駅",
            x: 2100, y: 2100,
            type: "station",
            rating: "4.2",
            reviews: "890",
            img: "https://images.unsplash.com/photo-1561530931-97b778796850?w=200",
            desc: "近年大規模な駅前再開発が行われた注目エリア。最新の設備を備えたタワーマンションが林立している。",
            tags: ["駅", "東都環状線", "耕木"],
            postcode: "〒100-0030",
            address: "東京都米花市耕木1丁目",
            site: "https://toto-railway.jp/station/kouki/",
            tell: "0300-7878-9090",
            status: "営業中"
        },
        {
            id: "sasazuka-st",
            name: "佐々塚駅",
            x: 100, y: 2500,
            type: "station",
            rating: "4.0",
            reviews: "1100",
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200",
            desc: "港線の主要駅。私鉄線との直通運転が行われており、都心部と郊外を結ぶハブ駅として機能している。",
            tags: ["駅", "港線", "佐々塚"],
            postcode: "〒151-0073",
            address: "東京都東都区佐々塚1丁目",
            site: "https://toto-railway.jp/station/sasazuka/",
            tell: "0300-1122-3344",
            status: "営業中"
        },
        {
            id: "hatagaya-st",
            name: "波田ケ谷駅",
            x: 500, y: 2500,
            type: "station",
            rating: "3.8",
            reviews: "450",
            img: "https://images.unsplash.com/photo-1515165561111-0d39e5572005?w=200",
            desc: "港線の地下駅。商店街が駅の真上に位置し、生活用品の買い物に非常に便利な環境。",
            tags: ["駅", "港線", "波田ケ谷"],
            postcode: "〒151-0072",
            address: "東京都東都区波田ケ谷2丁目",
            site: "https://toto-railway.jp/station/hatagaya/",
            tell: "0300-5566-7788",
            status: "営業中"
        }
    ];
    let savedHistory = []; 

    // --- 2. マップ生成・初期化関数 ---
    const openMapModal = () => {
        if (document.getElementById('map-modal')) return;

        // タイトルの変更
        const originalTitle = document.title;
        document.title = "Digital Map";

        const mapHTML = `
        <div id="map-modal" class="fixed inset-0 z-[100] bg-[#e8eaed] flex flex-col font-sans hidden opacity-0 transition-opacity duration-300 overflow-hidden">
            <div class="absolute top-0 left-0 right-0 p-3 flex flex-col gap-2 z-30 md:z-[80] pointer-events-none">
                <div class="flex items-center gap-2">
                    <div class="flex-1 relative pointer-events-auto">
                        <div id="search-container" class="flex items-center rounded-full border border-gray-300 overflow-hidden transition-all bg-white shadow-md w-full lg:w-[380px]">
                            <button id="map-close-btn" class="pl-4 pr-1 text-slate-500 hover:text-red-500 transition-colors flex items-center justify-center">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            </button>
                            <input type="text" id="search-input" placeholder="場所・スポットを検索" class="w-full bg-transparent px-2 py-2.5 outline-none font-medium text-[16px]">
                            <button id="glink-search-btn" class="px-4 text-slate-400"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                        </div>
                        <div id="suggest-list" class="absolute top-full left-0 right-0 bg-white rounded-b-2xl border border-t-0 border-gray-300 hidden z-50 max-h-[75vh] overflow-y-auto shadow-xl w-full lg:w-[380px]"></div>
                    </div>
                </div>
            </div>
            <div id="viewport" class="relative flex-1 overflow-hidden touch-none bg-[#e8eaed] cursor-grab active:cursor-grabbing">
                <div id="canvas" class="absolute top-1/2 left-1/2 w-[5000px] h-[5000px] -ml-[2500px] -mt-[2500px] origin-center will-change-transform bg-[#e8eaed]">
                    <svg class="w-full h-full" viewBox="0 0 5000 5000" xmlns="http://www.w3.org/2000/svg">
                        <rect width="5000" height="5000" fill="#e8eaed" />
        
                        <defs>
                            <pattern id="grid" width="200" height="200" patternUnits="userSpaceOnUse">
                                <rect width="190" height="190" x="5" y="5" fill="#f1f3f4" rx="2" />
                            </pattern>
                        </defs>
                        <rect width="5000" height="5000" fill="url(#grid)" />

                        <g fill="none" stroke="#ffffff" stroke-linecap="round">
                            <path d="M1000,0 V5000 M2500,0 V5000 M4000,0 V5000" stroke-width="80" />
                            <path d="M0,1000 H5000 M0,2500 H5000 M0,4000 H5000" stroke-width="80" />
                            <path d="M1750,0 V5000 M3250,0 V5000 M0,1750 H5000 M0,3250 H5000" stroke-width="40" />
                        </g>
                    </svg>
                    <div id="pins-container" class="absolute inset-0 pointer-events-none"></div>
                </div>
                <div class="absolute bottom-8 right-5 flex flex-col gap-3 z-20">
                    <button id="glink-locate-me" class="w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-blue-600 border border-slate-100"><svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg></button>
                    <div class="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
                        <button id="glink-zoom-in" class="w-14 h-14 text-2xl font-light hover:bg-slate-50 border-b border-slate-100">+</button>
                        <button id="glink-zoom-out" class="w-14 h-14 text-2xl font-light hover:bg-slate-50">-</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', mapHTML);

        const state = { scale: 1.2, x: 0, y: 0, startX: 0, startY: 0, lastDist: 0, selectedLoc: null, isDragging: false, history: savedHistory };
        const viewport = document.getElementById('viewport');
        const canvas = document.getElementById('canvas');
        const pinsContainer = document.getElementById('pins-container');
        const searchInput = document.getElementById('search-input');
        const searchContainer = document.getElementById('search-container');
        
        const controller = new AbortController();
        const { signal } = controller;

        const generateBuildings = () => {
            const svg = document.querySelector('#canvas svg');
            const buildingGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            buildingGroup.setAttribute("fill", "#e3e5e8");
    
            const fx = (seed) => {
                const x = Math.sin(seed) * 10000;
                return x - Math.floor(x);
            };

            for (let i = 0; i < 350; i++) {
                const w = 30 + fx(i * 1.1) * 80; 
                const h = 30 + fx(i * 1.2) * 80;
                const x = fx(i * 1.3) * 4900; 
                const y = fx(i * 1.4) * 4900;
        
                if (Math.abs(x - 2500) < 110 || Math.abs(x - 1500) < 110 || Math.abs(x - 3500) < 110 || Math.abs(y - 2500) < 110) continue;
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("x", x); rect.setAttribute("y", y); rect.setAttribute("width", w); rect.setAttribute("height", h); rect.setAttribute("rx", "4");
                buildingGroup.appendChild(rect);
            }
            svg.insertBefore(buildingGroup, svg.querySelector('g:nth-of-type(1)'));
        };
        generateBuildings();

        locations.forEach(loc => {
            const pin = document.createElement('div');
            pin.className = "absolute pointer-events-auto cursor-pointer group";
            pin.style.left = `${loc.x}px`; pin.style.top = `${loc.y}px`;
            pin.innerHTML = `
                <div class="spot-label absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white/90 px-2 py-0.5 rounded shadow text-[10px] font-bold text-slate-700 border border-white whitespace-nowrap z-50">${loc.name}</div>
                <div class="-translate-x-1/2 -translate-y-full drop-shadow-xl transition-transform group-hover:scale-125">
                    <svg class="w-10 h-10 ${loc.type==='station'?'text-blue-500':loc.type==='cafe'?'text-orange-500':'text-red-500'}" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                </div>
            `;
            pin.addEventListener('click', (e) => { e.stopPropagation(); showDetail(loc); });
            pinsContainer.appendChild(pin);
        });

        const update = () => {
            const boundX = Math.max(0, (2500 * state.scale - viewport.offsetWidth / 2));
            const boundY = Math.max(0, (2500 * state.scale - viewport.offsetHeight / 2));
            state.x = Math.max(-boundX, Math.min(boundX, state.x));
            state.y = Math.max(-boundY, Math.min(boundY, state.y));
            canvas.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
        };

        const createDetailPanel = () => {
            const panelHTML = `
                <div id="detail-panel" class="absolute bottom-0 left-0 right-0 max-h-[85vh] touch-auto md:max-h-[calc(100vh)] md:w-[410px] bg-white rounded-t-3xl md:rounded-t-none shadow-[0_-10px_40px_rgba(0,0,0,0.15)] z-[60] md:z-40 overflow-y-auto detail-scrollbar-custom transform translate-y-full md:translate-y-0 md:-translate-x-[calc(100%+20px)] transition-transform duration-300 pointer-events-auto">
                    
                    <div class="hidden md:block w-full h-48 bg-slate-100 overflow-hidden">
                        <img id="detail-img-pc" src="" class="w-full h-full object-cover opacity-0 transition-opacity">
                    </div>

                   <button onclick="closeDetail()" class="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 md:hidden z-[70]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <div>
                      <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-1 cursor-pointer md:hidden" onclick="closeDetail()">
                       </div>
                        <div class="flex justify-between items-start pb-4 px-6 md:py-4">
                            <div>
                                <h2 id="detail-name" class="text-2xl font-bold text-slate-800 tracking-tight">施設名</h2>
                                <div class="flex items-center gap-1 text-sm mt-1">
                                    <div id="detail-stars" class="flex items-center"></div>
                                    <span id="detail-rating" class="text-slate-400 font-medium ml-1">4.8 (156)</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 pb-4 px-6 w-fit">
                            <span id="detail-type" class="text-xs font-bold ">ジャンル</span>
                            <span id="detail-status" class="text-xs font-bold text-emerald-500">営業中</span>
                        </div>
                        <div class="flex border-b border-slate-200 px-4 overflow-x-auto justify-between no-scrollbar">
                            <div class="px-3 py-3 text-sm font-bold text-cyan-700 border-b-[3px] border-cyan-700 whitespace-nowrap cursor-pointer">概要</div>
                            <div class="px-3 py-3 text-sm font-medium text-slate-500 whitespace-nowrap cursor-pointer hover:bg-slate-50">写真</div>
                            <div class="px-3 py-3 text-sm font-medium text-slate-500 whitespace-nowrap cursor-pointer hover:bg-slate-50">最新情報</div>
                            <div class="px-3 py-3 text-sm font-medium text-slate-500 whitespace-nowrap cursor-pointer hover:bg-slate-50">基本情報</div>
                        </div>
                        <div class="grid grid-cols-4 gap-4 relative z-[70] py-4 border">
                            <button class="flex flex-col items-center gap-2"><div class="w-12 h-12 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center pointer-events-none"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/></svg></div><span class="text-[10px] font-bold text-slate-400 pointer-events-none">経路</span></button>
                            <button class="flex flex-col items-center gap-2 pointer-events-auto"><div class="w-12 h-12 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center pointer-events-none"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg></div><span class="text-[10px] font-bold text-slate-400 pointer-events-none">保存</span></button>
                            <button class="flex flex-col items-center gap-2 pointer-events-auto"><div class="w-12 h-12 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center pointer-events-none"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg></div><span class="text-[10px] font-bold text-slate-400 pointer-events-none">共有</span></button>
                            <button class="flex flex-col items-center gap-2 pointer-events-auto"><div class="w-12 h-12 rounded-full border border-slate-200 text-blue-600 flex items-center justify-center pointer-events-none"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg></div><span class="text-[10px] font-bold text-slate-400 pointer-events-none">通話</span></button>
                        </div>

                        <div class="block md:hidden px-6 pt-4">
                             <div class="w-full h-48 bg-slate-100 rounded-2xl overflow-hidden shadow-inner">
                                <img id="detail-img-mobile" src="" class="w-full h-full object-cover opacity-0 transition-opacity">
                             </div>
                        </div>

                        <p id="detail-desc" class="text-slate-500 text-sm leading-relaxed py-4 px-6">施設の説明</p>
                        <div class="flex flex-col gap-4 px-6 py-4 border-y border-slate-100">
                            <div class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <div class="flex items-center text-sm text-slate-600 leading-relaxed gap-2 whitespace-nowrap">
                                    <div id="detail-postcode" class="flex-shrink-0"></div>
                                    <div id="detail-address" class="truncate"></div>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <div id="detail-status-sub" class="text-sm"></div>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                <div id="detail-site" class="text-sm text-blue-600 truncate cursor-pointer hover:underline"></div>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <div id="detail-tell" class="text-sm text-slate-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            viewport.insertAdjacentHTML('beforeend', panelHTML);
        };

        function showDetail(loc) {
            state.selectedLoc = loc;
            
            // タイトル更新
            document.title = `${loc.name} - Digital Map`;

            const existingPanel = document.getElementById('detail-panel');
            if (existingPanel) existingPanel.remove();
            createDetailPanel();

            document.getElementById('detail-name').textContent = loc.name;
            const starsContainer = document.getElementById('detail-stars');
            starsContainer.innerHTML = '';
            const displayRating = Math.round(parseFloat(loc.rating) * 2) / 2;

            for(let i=1; i<=5; i++) {
                const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                let starClass = 'text-slate-200'; 

                // 判定基準を displayRating に変更
                if (i <= Math.floor(displayRating)) {
                    starClass = 'text-amber-500'; // 全塗り
                } else if (i === Math.ceil(displayRating) && displayRating % 1 !== 0) {
                    // 小数点（.5）がある場合のみ半分塗りを実行
                    starClass = 'text-amber-500';
                    star.innerHTML = `
                        <defs><linearGradient id="halfGrad"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#e2e8f0" stop-opacity="1"/></linearGradient></defs>
                        <path fill="url(#halfGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />`;
                }

                star.setAttribute('class', `w-4 h-4 flex-shrink-0 ${starClass}`);
                star.setAttribute('viewBox', '0 0 20 20');
                if (!star.innerHTML) { // 半分塗り以外の通常時
                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute('fill', 'currentColor');
                    path.setAttribute('d', "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z");
                    star.appendChild(path);
                }
                starsContainer.appendChild(star);
            }
            document.getElementById('detail-rating').textContent = `${loc.rating} (${loc.reviews})`;
            const typeLabels = { office: "事務所", cafe: "カフェ", food: "飲食店", station: "駅", school: "学校", mall: "商業施設", park: "広場", bank: "銀行" };
            document.getElementById('detail-type').textContent = typeLabels[loc.type] || loc.type;
            document.getElementById('detail-desc').textContent = loc.desc;
            document.getElementById('detail-status').textContent = loc.status;
            document.getElementById('detail-status-sub').textContent = loc.status;
            document.getElementById('detail-postcode').textContent = loc.postcode;
            document.getElementById('detail-address').textContent = loc.address;
            document.getElementById('detail-site').textContent = loc.site || "---";
            document.getElementById('detail-tell').textContent = loc.tell || "---";
            
            // PC用とスマホ用の画像枠をそれぞれ更新
            const imgPc = document.getElementById('detail-img-pc');
            const imgMobile = document.getElementById('detail-img-mobile');
            if (imgPc) {
                imgPc.src = loc.img;
                imgPc.style.opacity = '1';
            }
            if (imgMobile) {
                imgMobile.src = loc.img;
                imgMobile.style.opacity = '1';
            }
            
            setTimeout(() => {
                const panel = document.getElementById('detail-panel');
                if (panel) {
                    panel.classList.remove('translate-y-full', 'md:-translate-x-[calc(100%+20px)]');
                    updateSearchIcon();

                    let touchStartY = 0;
                    let currentTranslateY = 0;
                    panel.addEventListener('touchstart', (e) => {
                        touchStartY = e.touches[0].clientY;
                        panel.style.transition = 'none';
                    }, { passive: true });

                    panel.addEventListener('touchmove', (e) => {
                        const diff = e.touches[0].clientY - touchStartY;
                        // スクロールが一番上で、さらに下にスワイプしている時（モバイル限定）
                        if (panel.scrollTop <= 0 && diff > 0 && window.innerWidth < 768) {
                            // Safariのバウンススクロールを防ぐためデフォルトの挙動をキャンセル
                            if (e.cancelable) {
                                e.preventDefault();
                            }
                            currentTranslateY = diff;
                            panel.style.transform = `translateY(${diff}px)`;
                        }
                    }, { passive: false }); // preventDefaultを使用するため passive: false に変更

                        panel.addEventListener('touchend', () => {
                            panel.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                            if (currentTranslateY > 100) {
                                // ブラウザの描画フレームに合わせてからスタイルをリセットし、閉じる関数を呼ぶ
                                requestAnimationFrame(() => {
                                    panel.style.transform = ''; 
                                    window.closeDetail(); 
                                });
                            } else {
                                requestAnimationFrame(() => {
                                    panel.style.transform = ''; // 規定値以下の場合は元の位置に戻す
                                });
                            }
                            currentTranslateY = 0;                        
                        }, { passive: true });

                        panel.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

                }
            }, 10);
            update();
        }

        window.closeDetail = () => {
            document.title = "Digital Map";
            const detailPanel = document.getElementById('detail-panel');
            if (detailPanel) {
                detailPanel.classList.add('translate-y-full', 'md:-translate-x-[calc(100%+20px)]');
                setTimeout(() => {
                    if (detailPanel.parentNode) detailPanel.remove();
                    state.selectedLoc = null;
                    updateSearchIcon();
                }, 300);
            }
        };


        const updateSearchIcon = () => {
            const btn = document.getElementById('glink-search-btn');
            if(!btn) return;
            const isDetailOpen = state.selectedLoc !== null;
            const hasText = searchInput.value.trim() !== "";
            if (isDetailOpen && hasText) {
                btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
            } else {
                btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`;
            }
        };
        searchInput.addEventListener('input', updateSearchIcon);

        window.delHistory = (idx) => { 
            state.history.splice(idx, 1); 
            savedHistory = state.history; 
            if (state.history.length > 0) {
                renderHistory(); 
            } else {
                const hl = document.getElementById('history-list');
                if (hl) hl.remove(); 
                updateSearchShape(); 
            }
        };

        const renderHistory = () => {
            const parent = searchInput.parentElement.parentElement;
            let historyList = document.getElementById('history-list');

            if (state.history.length > 0) {
                if (!historyList) {
                    historyList = document.createElement('div');
                    historyList.id = 'history-list';
                    historyList.className = 'absolute top-full left-0 right-0 bg-white rounded-b-2xl border-t-0 border-gray-300 border z-50 max-h-[75vh] overflow-y-auto w-full lg:w-[380px]';
                    parent.appendChild(historyList);
                }
                const html = state.history.map((h, i) => `
                    <div tabindex="0" class="relative p-3 hover:bg-slate-50 focus:bg-slate-100 outline-none flex items-center justify-between cursor-pointer group" onclick="window.glinkJumpTo('${h}')" onkeydown="if(event.key==='Enter') window.glinkJumpTo('${h}')">
                        <div class="flex items-center gap-3 min-w-0 w-full">
                            <svg class="p-1.5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center float-left h-10 w-10 overflow-clip relative flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              <div class="flex flex-col md:flex-row overflow-hidden min-w-0 transition-[padding] duration-10 ease-out group-hover:pr-9">
                                  <span class="font-medium whitespace-nowrap text-slate-800">${h}</span>
                                  <span class="text-slate-400 truncate md:ml-2 ">${(() => { const loc = locations.find(l => l.name === h); return loc ? `${loc.postcode} ${loc.address}` : ''; })()}</span>
                              </div>
                        </div>
                        <button class="absolute right-3 flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 hover:bg-slate-200 text-slate-500 transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100" onclick="event.stopPropagation(); window.delHistory(${i})">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                   </div>`).join('') + 
                    `<div class="p-4 font-bold text-slate-400">最近の履歴をもっと見る</div>`;

                historyList.innerHTML = html;
                historyList.classList.remove('hidden');
            } else if (historyList) {
                historyList.remove(); 
            }
            updateSearchShape(); 
        };

        const renderSuggests = (val) => {
            const suggestList = document.getElementById('suggest-list');
            const matches = locations.filter(l => l.name.includes(val) || l.tags.some(t => t.includes(val)));
            const html = matches.map(m => `
                <div tabindex="0" class="p-4 hover:bg-blue-50 focus:bg-blue-100 outline-none cursor-pointer flex items-center gap-2 min-w-0" onclick="window.glinkJumpTo('${m.name}')" onkeydown="if(event.key==='Enter') window.glinkJumpTo('${m.name}')">
                    <div class="w-8 h-8 flex items-center justify-center text-gray-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div class="flex flex-col md:flex-row overflow-hidden min-w-0">
                        <span class="font-bold text-slate-800 whitespace-nowrap flex-shrink-0">${m.name}</span>
                        <span class="text-slate-400 truncate md:ml-2">${m.address}</span>
                </div>
               </div>`).join('');
            
            suggestList.innerHTML = html;
            suggestList.classList.toggle('hidden', html === '');
            updateSearchShape(); 
        };

        const updateSearchShape = () => {
            const hl = document.getElementById('history-list');
            const sl = document.getElementById('suggest-list');
            const isVisible = (hl && !hl.classList.contains('hidden') && hl.children.length > 0) || 
                              (sl && !sl.classList.contains('hidden') && sl.children.length > 0);
            if (isVisible) {
                searchContainer.classList.remove('rounded-full');
                searchContainer.classList.add('rounded-t-2xl');
            } else {
                searchContainer.classList.add('rounded-full');
                searchContainer.classList.remove('rounded-t-2xl');
            }
        };

        searchInput.onfocus = () => {
            if (!searchInput.value) renderHistory();
            else renderSuggests(searchInput.value);
            updateSearchShape(); 
        };
        
        searchInput.oninput = (e) => {
            const val = e.target.value;

            const btn = document.getElementById('glink-search-btn');
            if (btn && state.selectedLoc === null) {
                btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`;
            }

            if (!val) {
                document.title = "Digital Map";
                const suggestList = document.getElementById('suggest-list');
                document.getElementById('suggest-list').classList.add('hidden');
                suggestList.innerHTML = '';
                renderHistory();
            } else {
                const historyList = document.getElementById('history-list');
                if (historyList) historyList.classList.add('hidden');
                renderSuggests(val);
            }
            updateSearchShape();
        };

        const searchWrapper = searchContainer.parentElement;

        searchWrapper.addEventListener('focusout', (e) => {
            updateSearchShape();

            setTimeout(() => {
                const sl = document.getElementById('suggest-list');
                const hl = document.getElementById('history-list');
                const isFocusInside = searchWrapper.contains(document.activeElement);

                if (!isFocusInside) {
                    if (sl) { sl.classList.add('hidden'); sl.innerHTML = ''; }
                    if (hl) { hl.classList.add('hidden'); hl.innerHTML = ''; }
                    updateSearchShape();
                }
            }, 250);
        });

        const closeListsOnSelect = (e) => {
            if ((e.type === 'keydown' && e.key !== 'Enter') || !e.target.closest('#suggest-list > div, #history-list > div')) return;
            
            setTimeout(() => {
                const sl = document.getElementById('suggest-list');
                const hl = document.getElementById('history-list');
                if (sl) { sl.classList.add('hidden'); sl.innerHTML = ''; }
                if (hl) { hl.classList.add('hidden'); hl.innerHTML = ''; }
                updateSearchShape();
            }, 10);
        };
        
        searchWrapper.addEventListener('click', closeListsOnSelect);
        searchWrapper.addEventListener('keydown', closeListsOnSelect);
        
        window.glinkJumpTo = (name) => {
            const loc = locations.find(l => l.name === name);
            if (loc) { 
                showDetail(loc); 
                state.x = 2500 - loc.x; 
                state.y = 2500 - loc.y; 
                state.scale = 2.0; 
                update(); 
        
                const hIdx = state.history.indexOf(name);
                if (hIdx > -1) state.history.splice(hIdx, 1);
                state.history.unshift(name);
                savedHistory = state.history; 
            }
        };

        const performSearch = () => {
            const val = searchInput.value.trim();
            if (!val) return;

            const exactMatch = locations.find(l => l.name === val);
            if (exactMatch) {
                window.glinkJumpTo(exactMatch.name);
            }
            
            const btn = document.getElementById('glink-search-btn');
            if (btn) {
                btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
            }
        };

        document.getElementById('glink-search-btn').onclick = () => {
            const isDetailOpen = state.selectedLoc !== null;
            const hasText = searchInput.value.trim() !== "";

            if (isDetailOpen && hasText) {
                searchInput.value = '';
                window.closeDetail();
                updateSearchIcon();
                const sl = document.getElementById('suggest-list');
                if(sl) { sl.classList.add('hidden'); sl.innerHTML = ''; }
                updateSearchShape();
            } else {
                performSearch();
            }
        };

        searchInput.onkeydown = (e) => { 
            if (e.key === 'Enter') performSearch(); 
            if (e.key === 'ArrowDown') {
                const firstSuggest = document.querySelector('#suggest-list [tabindex="0"], #history-list [tabindex="0"]');
                if (firstSuggest) firstSuggest.focus();
            }
        };

        viewport.addEventListener('mousedown', (e) => { 
            // 詳細パネル内、または詳細パネル自体をクリックした場合はドラッグを開始しない
            if (e.target.closest('#detail-panel')) return; 

            state.isDragging = true; 
            state.startX = e.clientX - state.x; 
            state.startY = e.clientY - state.y; 
            const detailPanel = document.getElementById('detail-panel');
            if (detailPanel && !detailPanel.contains(e.target)) closeDetail(); 
        });

        window.addEventListener('mousemove', (e) => { 
            if (state.isDragging) { 
                state.x = Math.round(e.clientX - state.startX); 
                state.y = Math.round(e.clientY - state.startY); 
                update(); 
            } 
        }, { signal });

        window.addEventListener('mouseup', () => state.isDragging = false, { signal });

        viewport.addEventListener('touchstart', (e) => {
            if (e.target.closest('#detail-panel')) return;

            if (e.touches.length === 1) { 
                state.startX = e.touches[0].clientX - state.x; state.startY = e.touches[0].clientY - state.y; 
                const detailPanel = document.getElementById('detail-panel');
                if (detailPanel && !detailPanel.contains(e.target)) closeDetail(); 
            }
        });
        viewport.addEventListener('touchmove', (e) => {
            // パネル上での操作ならマップ移動を更新しない
            if (e.target.closest('#detail-panel')) return;

            if (e.touches.length === 1) { 
                state.x = Math.round(e.touches[0].clientX - state.startX); 
                state.y = Math.round(e.touches[0].clientY - state.startY); 
            }
            update();
        }, { passive: false });

        document.getElementById('glink-locate-me').onclick = () => { alert("位置情報の取得が許可されていません。"); };
        document.getElementById('glink-zoom-in').onclick = () => { state.scale = Math.min(state.scale + 0.5, 4); update(); };
        document.getElementById('glink-zoom-out').onclick = () => { state.scale = Math.max(state.scale - 0.5, 0.5); update(); };
        
        document.getElementById('map-close-btn').onclick = () => { 
            const m = document.getElementById('map-modal'); 
            m.classList.add('opacity-0'); 
            document.body.style.overflow = '';
            document.title = originalTitle;
            setTimeout(() => {
                m.remove();
                controller.abort();
            }, 300); 
        };

        const m = document.getElementById('map-modal'); 
        m.classList.remove('hidden'); 
        document.body.style.overflow = 'hidden';
        setTimeout(() => { m.classList.remove('opacity-0'); update(); }, 10); 
    };

    const openBtn = document.getElementById('open-glink-map');
    if (openBtn) openBtn.onclick = (e) => { 
        e.preventDefault(); 
        openMapModal();
    };
});
