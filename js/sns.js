// SNSの投稿データ
const snsData = {
    talker: {
        title: "Talker.com",
        name: "毛利小五郎",
        id: "@kogoro_detective",
        bio: "私立探偵やってます。眠りの小五郎。元刑事。仕事の依頼は電話か事務所まで。",
        following: "26",
        followers: "1412",
        posts: [
            { date: "3時間前", content: "今日の競馬もボロ負けだ…。誰か景気のいい依頼を持ってきてくれんかね。", likes: 124, retweets: 45, reply: 2, views: "1.2万" },
            { date: "5時間前", content: "ポアロのサンドイッチは相変わらず絶品だな。", likes: 890, retweets: 110, reply: 24, views: "1000" },
            { date: "1日", content: "昨夜の記憶がない。気づいたら事件が解決していた。さすがは『眠りの小五郎』、自分でも恐ろしいぜ。", likes: 2500, retweets: 800, reply: 240, views: "1.8万" },
            { date: "2026/03/25", content: "コンビニによったら、雨が降ってきやがった。傘は事務所に置いてきてしまった。", likes: 80, retweets: 20, reply: 62, views: "1.8万" },
            { date: "2026/03/22", content: "結局、張り込みは空振り。この時期の夜風は体に堪える。コンビニのコーヒーだけが味方だ。", likes: 12, retweets: 3, reply: 1, views: "850" },
            { date: "2026/03/18", content: "報告書の作成が溜まっている。現場に出るより、このデスクワークの方がよっぽど精神を削られるな。", likes: 45, retweets: 8, reply: 4, views: "2100" },
            { date: "2026/03/17", content: "卒業シーズンか。袴姿の学生を見かける。彼らの未来に、私の仕事が必要ないことを願うばかりだ。", likes: 112, retweets: 15, reply: 2, views: "3400" },
            { date: "2026/03/16", content: "週明け早々、新規の相談。話を聞くだけで半日が過ぎた。証拠以上に、納得を求めている人も多い。", likes: 67, retweets: 4, reply: 1, views: "1900" },
            { date: "2026/03/15", content: "確定申告の準備で一日潰れた。領収書の山と格闘するのは、どんな難事件より骨が折れるぜ。", likes: 32, retweets: 5, reply: 2, views: "1200" },
            { date: "2026/03/14", content: "ホワイトデーか。依頼人への手土産を買いに出たら、どこもかしこも行列。結局いつもの菓子折りに落ち着く。", likes: 45, retweets: 2, reply: 1, views: "1500" },
            { date: "2026/03/13", content: "13日の金曜日。迷信は信じないが、今日は機材のバッテリーが急に切れた。不吉というより管理不足だ。", likes: 28, retweets: 1, reply: 0, views: "1100" },
            { date: "2026/03/12", content: "調査対象が予想外の行動を見せた。直感は大事だが、詰めを誤ると数日分が水の泡になる。気を付けなければならない。", likes: 156, retweets: 24, reply: 12, views: "5600" },
            { date: "2026/03/11", content: "春一番のせいか、今日の屋外調査は砂埃で散々だった。機材のクリーニングを念入りにやらないと。", likes: 18, retweets: 1, reply: 0, views: "900" },
            { date: "2026/03/10", content: "裁判資料としての証拠写真。ピントひとつで勝負が決まることもある。現像する瞬間の緊張感は慣れないな。", likes: 89, retweets: 10, reply: 3, views: "2500" },
            { date: "2026/03/09", content: "今日は久々に休み。昼間から飲むビールが一番の贅沢だ。電話が鳴らないことを祈る。", likes: 210, retweets: 18, reply: 22, views: "7800" },
            { date: "2026/03/08", content: "「人探し」の依頼。手がかりは10年前の不鮮明な写真一枚。地道な聞き込みが一番の近道だと再確認した。", likes: 120, retweets: 15, reply: 4, views: "4500" },
            { date: "2026/03/07", content: "防犯カメラの設置アドバイス。最近はIT化が進んで、アナログな技術だけでは食っていけんな。", likes: 54, retweets: 6, reply: 1, views: "1800" },
            { date: "2026/03/06", content: "深夜の張り込み終了。夜明けの空を見ながら食べる牛丼。体に悪いものほど美味いのはなぜだろうか。", likes: 145, retweets: 12, reply: 9, views: "5200" },
            { date: "2026/03/05", content: "依頼人と面談。言葉の裏を読むのがこの仕事だが、時折、真実を知ることが正解なのか分からなくなることもある。", likes: 89, retweets: 15, reply: 6, views: "3200" },
            { date: "2026/03/04", content: "深夜の張り込み中、パトカーに職務質問されそうになった。不審者と紙一重なのが辛いところだな。", likes: 210, retweets: 40, reply: 12, views: "8000" },
            { date: "2026/03/03", content: "雛祭り。事務所の片隅に花でも飾ろうかと思ったが、柄じゃないのでやめた。湯呑みを洗うだけで精一杯だ。", likes: 42, retweets: 3, reply: 2, views: "1400" },
            { date: "2026/03/02", content: "古い知人から厄介な相談を持ちかけられた。仕事として受けるべきか、友人として断るべきか。酒が進んでしまう。", likes: 112, retweets: 12, reply: 20, views: "4100" },
            { date: "2026/03/01", content: "今日から3月。就活生らしいスーツ姿を街で見かける。初心忘るべからず。自分の名刺を改めて見つめ直す。", likes: 78, retweets: 9, reply: 3, views: "2100" },
            { date: "2026/02/28", content: "機材のメンテナンス。レンズの曇りは心の曇り。小さな綻びが大きなミスに繋がるのがこの業界の常識だ。", likes: 67, retweets: 5, reply: 2, views: "1500" },
            { date: "2026/02/27", content: "今月の経理終了。赤字ではないが、贅沢はできんな。明日からまた馬車馬のように働くとするか。", likes: 41, retweets: 2, reply: 1, views: "1300" },
            { date: "2026/02/26", content: "今日もまた、誰かの秘密をカメラに収める仕事。飯の種ではあるが、たまにはもっと建設的な依頼が欲しくなる。", likes: 310, retweets: 55, reply: 34, views: "1.2万" },
            { date: "2026/02/25", content: "昨夜の記憶がない。気づいたら事件が解決していた。自分でも恐ろしい。これが才能というやつか。", likes: 2500, retweets: 800, reply: 240, views: "1.8万" },
            { date: "2026/02/24", content: "三連休明け。休み返上で動いていた甲斐あって、決定的な証拠を押さえられた。週明けの報告が楽しみだ。", likes: 88, retweets: 10, reply: 3, views: "2800" },
            { date: "2026/02/23", content: "天皇誕生日。祝日だが、世間が休んでいる時こそ絶好の調査日和。遊園地での尾行は、一人だと浮いて困る。", likes: 134, retweets: 20, reply: 5, views: "4200" },
            { date: "2026/02/22", content: "猫の日。現場近くで懐っこい野良猫に懐かれた。尾行中に足元で鳴かれるのは勘弁してほしい。", likes: 450, retweets: 120, reply: 30, views: "1.1万" },
            { date: "2026/02/21", content: "素行調査。対象者が一日中図書館にこもっていた。こちらも読書が進んだが、腰が痛くてたまらん。", likes: 56, retweets: 4, reply: 2, views: "1700" },
            { date: "2026/02/20", content: "依頼人との打ち合わせ。感情的になる相手を落ち着かせるのも仕事のうち。まずは温かい茶を出すことから始める。", likes: 48, retweets: 2, reply: 1, views: "1400" },
            { date: "2026/02/19", content: "雨。尾行の難易度が上がるが、傘のおかげで顔を隠しやすい。メリットとデメリットは常に表裏一体だな。", likes: 35, retweets: 3, reply: 0, views: "1200" },
            { date: "2026/02/18", content: "ボイスレコーダーの新調。技術の進化には驚かされる。昔の苦労が嘘のようだ。", likes: 29, retweets: 1, reply: 0, views: "980" },
            { date: "2026/02/17", content: "事務所の家賃振込完了。この看板を守り続けるのも、楽じゃない。誰か良い依頼を持ってきてくれんか。", likes: 52, retweets: 6, reply: 4, views: "1800" },
            { date: "2026/02/16", content: "浮気調査。真実を伝える瞬間は、何度経験しても胸が痛む。これも一種のデトックスだと思ってもらうしかない。", likes: 210, retweets: 30, reply: 15, views: "6700" },
            { date: "2026/02/15", content: "予定がぽっかり空いた午後に、一人で入る定食屋。こういう時間があるから、不規則な生活も続けていける。", likes: 520, retweets: 60, reply: 25, views: "9800" },
            { date: "2026/02/14", content: "バレンタイン。調査対象が誰と会うか、今日ほど分かりやすい日はない。効率はいいが、少し虚しい。", likes: 156, retweets: 20, reply: 8, views: "5200" },
            { date: "2026/02/13", content: "深夜の公園での張り込み。カイロを5枚貼っても足りない。温かい自販機の缶スープが神様に見えた。", likes: 82, retweets: 12, reply: 5, views: "2400" },
            { date: "2026/02/12", content: "建物の構造チェック。逃げ道や死角を把握するのは基本中の基本。空き巣対策の相談も増えてきたな。", likes: 41, retweets: 4, reply: 1, views: "1300" },
            { date: "2026/02/11", content: "建国記念の日。街が賑わう中、一人で写真の整理。最近はデジタル一眼のシャッター音が響かないのが助かる。", likes: 58, retweets: 2, reply: 0, views: "1600" },
            { date: "2026/02/10", content: "予報通り雪になった。雪の中の尾行は足跡や視認性の問題で神経を使う。早々に引き上げて風呂に入りたい。", likes: 64, retweets: 8, reply: 2, views: "1900" },
            { date: "2026/02/09", content: "名刺を切らしてしまった。急いで印刷屋へ。この肩書き一つで、多くの扉が開くこともあれば、閉じることもある。", likes: 37, retweets: 1, reply: 0, views: "1100" },
            { date: "2026/02/08", content: "守秘義務があるから書けないが、今日の一件はなかなかの難題だった。一人で解決したのが信じられん。", likes: 890, retweets: 120, reply: 45, views: "2.1万" },
            { date: "2026/02/07", content: "週末の張り込み。対象者が全く動かない。こういう時は、ただひたすらに自分との戦いだ。", likes: 25, retweets: 2, reply: 1, views: "800" },
            { date: "2026/01/31", content: "1月も終わりか。正月気分を完全に払拭。新規案件が数件。一つ一つ、丁寧に解きほぐしていくとしよう。", likes: 45, retweets: 5, reply: 1, views: "1400" },
            { date: "2026/01/30", content: "最近、妙に視線を感じると思ったら、ただの自意識過剰だった。職業病もここまでくると末期だな。", likes: 230, retweets: 40, reply: 18, views: "8900" },
            { date: "2026/01/29", content: "聞き込み調査で訪れた街が、昔とすっかり変わっていた。風景は変わっても、人間の悩みは変わらんものだな。", likes: 92, retweets: 12, reply: 4, views: "3100" },
            { date: "2026/01/28", content: "事務所の掃除。埃を払うと、心まで洗われる気がする。整理整頓は調査の基本だ。", likes: 34, retweets: 2, reply: 1, views: "1100" },
            { date: "2026/01/27", content: "深夜のコンビニ。店員に顔を覚えられてしまった。毎日同じ時間にコーヒーを買いに来れば当然か。", likes: 62, retweets: 5, reply: 3, views: "2000" },
            { date: "2026/01/26", content: "依頼の電話が一本。内容は至ってシンプルだが、こういう時こそ裏がある。慎重に進める必要があるな。", likes: 51, retweets: 4, reply: 2, views: "1600" },
            { date: "2026/01/25", content: "給料日後の週末。街の浮ついた空気とは裏腹に、こちらは精算業務。現実は地味なものだ。", likes: 55, retweets: 4, reply: 1, views: "1800" },
            { date: "2026/01/24", content: "調査機材のバッテリーが寒さで死にかけた。冬の屋外を甘く見ていた。予備は常に多めに持つのが定石だ。", likes: 28, retweets: 2, reply: 0, views: "900" },
            { date: "2026/01/23", content: "一件解決。依頼人の安堵した顔を見ると、この仕事を続けていて良かったと心から思う。", likes: 340, retweets: 45, reply: 12, views: "9200" },
            { date: "2026/01/22", content: "尾行中に偶然、昔の同僚を見かけた。声をかけようか迷ったが、仕事中なので伏せた。孤独も仕事の一部だ。", likes: 110, retweets: 15, reply: 8, views: "3800" },
            { date: "2026/01/21", content: "冷え込みが厳しい。足先が痺れる。こんな夜は、早く帰って熱燗でもひっかけたい。", likes: 49, retweets: 3, reply: 5, views: "1500" },
            { date: "2026/01/20", content: "大寒。一年で最も寒い時期か。張り込み場所の近くに自販機があるかないかで、天国と地獄が分かれる。", likes: 38, retweets: 2, reply: 1, views: "1200" },
            { date: "2026/01/19", content: "報告書の誤字を指摘された。恥ずかしい限りだ。論理的な文章構成も探偵の重要なスキルなのだが。", likes: 24, retweets: 1, reply: 2, views: "850" },
            { date: "2026/01/18", content: "日曜だが急ぎの案件。対象者がパチンコ屋に入り浸り。こちらも隣で打つふりをしながら監視。肩が凝る。", likes: 156, retweets: 22, reply: 10, views: "5400" },
            { date: "2026/01/17", content: "資料集めで図書館へ。ネット社会でも、紙の資料にしかない真実は確かにある。手がかりは足で稼ぐものだ。", likes: 47, retweets: 5, reply: 0, views: "1400" },
            { date: "2026/01/16", content: "素行調査。対象者がスポーツジムへ。こちらの体力不足を痛感。少しは鍛えないといかんな。", likes: 31, retweets: 2, reply: 4, views: "1100" },
            { date: "2026/01/15", content: "最近はIT関連のトラブル相談が増えている。時代に合わせて勉強が必要か…。", likes: 92, retweets: 12, reply: 6, views: "3100" },
            { date: "2026/01/14", content: "成人の日を過ぎて、ようやく世の中が平常運転に戻った感じがする。こちらの胃腸も平常運転に戻したい。", likes: 26, retweets: 1, reply: 2, views: "900" },
            { date: "2026/01/13", content: "古い顧客からの年賀状。内容は近況報告だが、こういう繋がりが一番の財産だ。", likes: 88, retweets: 8, reply: 3, views: "2200" },
            { date: "2026/01/12", content: "三連休最終日。家族連れで賑わう公園のベンチで、一人新聞を読みふける。立派な不審者だな、こりゃ。", likes: 142, retweets: 20, reply: 15, views: "4800" },
            { date: "2025/12/31", content: "大晦日。事務所の掃除も終わり、ようやく一息。今年は多くの「真実」に向き合った一年だった。来年も精進しよう。", likes: 380, retweets: 50, reply: 15, views: "1.2万" },
            { date: "2025/12/30", content: "帰省ラッシュ。駅での張り込みは人の波に飲まれて困難を極める。見失わないよう、こちらも旅行客を装う。", likes: 142, retweets: 18, reply: 5, views: "4800" },
            { date: "2025/12/29", content: "仕事納め。といっても、探偵に休みはない。緊急の依頼に備えて、電話だけは肌身離さず持っておく。", likes: 98, retweets: 12, reply: 3, views: "3200" },
            { date: "2025/12/28", content: "一年使ったカメラのメンテナンス。シャッター回数は数万回。こいつが俺の目となり、多くの証拠を残してくれた。", likes: 110, retweets: 15, reply: 4, views: "3500" },
            { date: "2025/12/27", content: "年賀状の宛名書き。仕事柄、お世話になった弁護士や顧客へ。個人情報は厳重に管理しなければ。", likes: 45, retweets: 3, reply: 1, views: "1500" },
            { date: "2025/12/25", content: "クリスマス。華やかな街並みを背に、一人静かに証拠写真の整理。ケーキの代わりに、少し良い酒を空ける。", likes: 190, retweets: 25, reply: 10, views: "6500" },
            { date: "2025/12/24", content: "クリスマスイブ。浮気調査の書き入れ時だ。皮肉なものだが、仕事があるのはありがたいことだな。", likes: 320, retweets: 85, reply: 40, views: "1.8万" },
            { date: "2025/12/22", content: "冬至。ゆず湯に入る余裕はないが、せめてコンビニのゆず茶で暖を取る。夜が長いのは、張り込みには好都合だ。", likes: 54, retweets: 6, reply: 2, views: "1800" },
            { date: "2025/12/20", content: "忘年会シーズン。酔客に紛れての調査はやりやすいが、酒の誘惑に勝つのが一番の難問かもしれない。", likes: 72, retweets: 7, reply: 4, views: "2400" },
            { date: "2025/12/18", content: "深夜の張り込み中、パトカーの巡回と遭遇。何度も職質を回避するテクニックだけは上達した気がする。", likes: 156, retweets: 30, reply: 12, views: "5600" },
            { date: "2025/12/15", content: "一件落着。依頼人の「これでようやく眠れます」という一言が、この仕事の最大の報酬だ。", likes: 420, retweets: 65, reply: 28, views: "9800" },
            { date: "2025/12/12", content: "冬の雨は骨まで冷える。防寒着を新調しようか。安物では、長時間の不動姿勢には耐えられない。", likes: 38, retweets: 4, reply: 1, views: "1300" },
            { date: "2025/12/10", content: "ボーナス時期。こちらは出す側でも貰う側でもないが、街の活気にあてられて少し高めの刺身を買う。", likes: 62, retweets: 5, reply: 3, views: "2100" },
            { date: "2025/12/08", content: "素行調査。対象者がパチンコ屋で大勝ちしていた。依頼人は「金がない」と言われていたはずだが…世知辛い。", likes: 210, retweets: 45, reply: 18, views: "7200" },
            { date: "2025/12/05", content: "報告書の誤字脱字チェック。この一文字で裁判の行方が変わるかもしれない。集中力が切れたら少し仮眠だ。", likes: 24, retweets: 1, reply: 1, views: "950" },
            { date: "2025/12/03", content: "名刺の裏にメモを残す癖。デジタルも良いが、結局最後は紙とペンが一番確実だと思い知らされる。", likes: 41, retweets: 3, reply: 0, views: "1200" },
            { date: "2025/12/01", content: "12月。カレンダーが最後の一枚になった。やり残したことは多いが、目の前の依頼を一つずつ片付けるしかない。", likes: 82, retweets: 8, reply: 2, views: "2500" },
            { date: "2025/11/28", content: "一件解決後の、事務所での独り言。壁に向かって喋るようになったらお終いか。…いや、整理のためだ。", likes: 134, retweets: 20, reply: 15, views: "4500" },
            { date: "2025/11/25", content: "依頼人と喫茶店で面談。隣の席の会話が筒抜け。情報管理にはもっと気を配るべき場所を選ばねば。", likes: 58, retweets: 4, reply: 2, views: "1800" },
            { date: "2025/11/22", content: "「いい夫婦の日」か。皮肉にも、この日を境に相談が増えるのがこの業界の不思議なところだ。", likes: 290, retweets: 60, reply: 25, views: "8900" },
            { date: "2025/11/20", content: "三脚の調子が悪い。長時間の固定撮影には欠かせない相棒なのだが。買い替えを検討するか。", likes: 22, retweets: 2, reply: 1, views: "800" },
            { date: "2025/11/18", content: "深夜の道路工事。張り込み場所を移動せざるを得なくなった。臨機応変さが試される。", likes: 35, retweets: 4, reply: 0, views: "1100" },
            { date: "2025/11/15", content: "七五三。神社での調査。幸せそうな家族連れの中で、一人だけ異質な視線を送っている自分に気づき苦笑する。", likes: 124, retweets: 12, reply: 6, views: "4100" },
            { date: "2025/11/12", content: "事務所の備品の買い出し。電球一つ変えるのも、経営者としての仕事。誰もやってはくれない。", likes: 31, retweets: 1, reply: 1, views: "900" },
            { date: "2025/11/10", content: "対象者が新幹線に。即座にチケットを手配。このスピード感が、生死（成否）を分ける。", likes: 167, retweets: 28, reply: 14, views: "5200" },
            { date: "2025/11/08", content: "「探し物」の依頼。思い出の場所を巡るうちに、自分自身の記憶も少し掘り起こされてしまった。", likes: 88, retweets: 9, reply: 5, views: "2900" },
            { date: "2025/11/05", content: "ボイスレコーダーに吹き込んだ自分の声。聞き返すと、意外と冷静なトーンで驚く。", likes: 26, retweets: 2, reply: 1, views: "850" },
            { date: "2025/11/03", content: "文化の日。美術館での尾行。静かすぎて、自分の足音がやけに響く気がして冷や汗をかいた。", likes: 92, retweets: 10, reply: 3, views: "3100" },
            { date: "2025/11/01", content: "11月。空気が澄んできて、写真が綺麗に撮れる。仕事としてはありがたい季節だ。", likes: 45, retweets: 5, reply: 2, views: "1400" },
            { date: "2025/10/31", content: "ハロウィン。仮装した群衆の中では、尾行も容易だが、こちらも何か被らなければ浮いてしまうのか？", likes: 210, retweets: 35, reply: 12, views: "6500" },
            { date: "2025/10/28", content: "一件、大きな案件が落ち着いた。今夜は少し贅沢に、駅ビルの焼き鳥を買って帰ろう。", likes: 115, retweets: 14, reply: 8, views: "3800" },
            { date: "2025/10/25", content: "調査対象が夜逃げ。こちらの報酬はどうなる。こういうリスクも込みの仕事だが、やるせない。", likes: 256, retweets: 40, reply: 22, views: "9100" },
            { date: "2025/10/22", content: "デスク周りの整理。不要な書類は全てシュレッダーへ。秘密を灰にするのも仕事のうちだ。", likes: 34, retweets: 2, reply: 0, views: "1100" },
            { date: "2025/10/20", content: "最近、腰痛が酷い。長時間の座り仕事か、無理な姿勢での張り込みか。整体に行かねば。", likes: 48, retweets: 3, reply: 10, views: "1500" },
            { date: "2025/10/18", content: "近所の定食屋で。店主に「最近どうだい？」と聞かれ、「ぼちぼちです」と返す。いつもの挨拶だ。", likes: 72, retweets: 6, reply: 2, views: "2200" },
            { date: "2025/10/15", content: "浮気調査。証拠は揃ったが、依頼人に伝えるべきか。彼女の震える手を見て、言葉が詰まった。", likes: 310, retweets: 55, reply: 30, views: "1.2万" },
            { date: "2025/10/12", content: "三連休。街の賑わいとは無縁に、薄暗い部屋で映像の解析。コマ送りで見えてくる真実がある。", likes: 64, retweets: 8, reply: 3, views: "2400" },
            { date: "2025/10/10", content: "旧友からの電話。ただの近況報告だったが、不意に緊張が解けた。仕事モードをオフにするのも大事だ。", likes: 98, retweets: 12, reply: 5, views: "3100" },
            { date: "2025/10/08", content: "「人違い」を装って接触調査。心臓の鼓動が相手に聞こえるんじゃないかと、いつも思う。", likes: 145, retweets: 20, reply: 7, views: "4800" },
            { date: "2025/10/05", content: "秋の長雨。ジメジメした事務所で、コーヒーの香りが唯一の救いだ。", likes: 29, retweets: 2, reply: 1, views: "900" },
            { date: "2025/09/30", content: "9月終了。今月は移動距離が過去最高だった。ガソリン代も馬鹿にならん。", likes: 42, retweets: 3, reply: 1, views: "1300" },
            { date: "2025/09/25", content: "「眠りの小五郎」…誰が言い出したか知らんが、最近少しずつ通り名が広まっている。責任が重くなるな。", likes: 1200, retweets: 350, reply: 110, views: "4.5万" },
            { date: "2025/09/22", content: "お彼岸。墓地での張り込み。静まり返った場所でのシャッター音は、心臓に悪い。", likes: 89, retweets: 12, reply: 4, views: "3200" },
            { date: "2025/09/20", content: "敬老の日。ご年配の依頼人から「孫を捜してほしい」との切実な訴え。必ず見つけ出すと約束した。", likes: 215, retweets: 40, reply: 15, views: "6800" },
            { date: "2025/09/15", content: "調査機材のSDカードを予備も含めて全てフォーマット。新しい案件に向けて、気持ちをリセットする。", likes: 34, retweets: 2, reply: 0, views: "1100" },
            { date: "2025/09/12", content: "残暑が厳しい。日中の車内待機は、まさにサウナ。エアコンをかけ続けるわけにもいかず、忍耐のみ。", likes: 67, retweets: 8, reply: 10, views: "2100" },
            { date: "2025/09/10", content: "素行調査。対象者がスポーツバーで熱狂していた。こういう趣味があるなら、もっと早く言ってくれれば楽だったのに。", likes: 52, retweets: 5, reply: 2, views: "1800" },
            { date: "2025/09/08", content: "依頼人と最終確認。報告書の内容に納得していただいた。これで法廷でも戦えるはずだ。", likes: 128, retweets: 15, reply: 6, views: "3400" },
            { date: "2025/09/05", content: "雨。尾行対象がタクシーを拾った。こちらも即座に捕まえる。映画のような展開だが、財布には優しくない。", likes: 198, retweets: 35, reply: 12, views: "5200" },
            { date: "2025/09/01", content: "今日から9月。台風の進路が気になる。調査の日程を調整せねばならんかもしれん。", likes: 31, retweets: 2, reply: 1, views: "1000" },
            { date: "2025/08/31", content: "夏休み最終日。宿題に追われる子供たちを尻目に、自分は未完了の報告書に追われる。大人になっても変わらん。", likes: 110, retweets: 15, reply: 22, views: "4500" },
            { date: "2025/08/25", content: "お盆休みの反動か、急ぎの依頼が重なった。事務所に泊まり込み。明日には髭を剃らねば。", likes: 45, retweets: 4, reply: 2, views: "1500" }
        ]
    },
    insta: {
        title: "InstaPhoto.com",
        name: "毛利小五郎",
        id: "kogoro_detective",
        posts_count: "128",
        followers: "70",
        following: "220",
        bio: "私立探偵やってます。眠りの小五郎。元刑事。仕事の依頼は電話か事務所まで。",
        posts: [
            { img: "https://images.unsplash.com/photo-1511140593289-399307693526?q=80&w=400", caption: "事務所の下の喫茶店にて。 #ポアロ" },
            { img: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=400", caption: "沖野ヨーコちゃんの新曲、最高すぎるぜ！" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "たまには真面目に仕事…ふぁ～あ、眠い。" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "たまには真面目に仕事…ふぁ～あ、眠い。" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "このあとの台風の進路が気になる。" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "明日は晴れる。" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "ラーメン美味い。" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "天気" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "晴れる" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "天気良い" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "晴れないかな" },
            { img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400", caption: "初投稿" }
        ]
    },
    viewtube: {
        channelName: "毛利小五郎チャンネル",
        handle: "@kogoro_detective_ch",
        subscribers: "12.8万人",
        total: "128",
        description: "私立探偵の毛利小五郎の公式チャンネル。事件解決の裏側や、たまに競馬予想も。",
        bannerColor: "bg-slate-800",
        videos: [
            { id: 1, title: "【密着】名探偵の1日。朝のコーヒーから夜の晩酌まで。", views: "185回", date: "3日前", duration: "12:05", thumb: "bg-blue-900" },
            { id: 2, title: "競馬歴30年の俺が教える、明日のG1レース大予想！", views: "1.2万回", date: "1週間前", duration: "08:42", thumb: "bg-green-800" },
            { id: 3, title: "【奇跡】眠りの小五郎、鮮やかなる推理ショー（切り抜き）", views: "2100回", date: "1週間前", duration: "15:20", thumb: "bg-slate-700" },
            { id: 4, title: "喫茶ポアロ特製！絶品ハムサンドの作り方をこっそり公開！", views: "8.2万回", date: "2週間前", duration: "10:15", thumb: "bg-yellow-700" },
            { id: 5, title: "【飯テロ】米花駅裏の路地で見つけた、伝説のカツ丼屋が凄すぎる！", views: "15.4万回", date: "2週間前", duration: "10:15", thumb: "bg-orange-800" },
            { id: 6, title: "深夜のコンビニ飯、これとこれを混ぜると最強に美味い説。", views: "8.2万回", date: "1か月前", duration: "08:42", thumb: "bg-yellow-900" },
            { id: 7, title: "【調査】探偵が本気で選ぶ、米花町で一番「入りにくい」定食屋。", views: "6.7万回", date: "1か月前", duration: "14:20", thumb: "bg-amber-900" },
            { id: 8, title: "【検証】張り込み中の夜食、一番腹持ちが良いのはどれ？", views: "4200回", date: "10日前", duration: "12:05", thumb: "bg-slate-700" },
            { id: 9, title: "喫茶ポアロの期間限定メニュー、初日に食べに行ってみた。", views: "12.1万回", date: "2か月前", duration: "09:30", thumb: "bg-yellow-700" },
            { id: 10, title: "【実録】浮気調査の現場からお届け。これがリアルな探偵の昼飯だ！", views: "5600回", date: "2か月前", duration: "06:45", thumb: "bg-neutral-800" },
            { id: 11, title: "商店街の福引きで当てた高級肉を、一人でバレないように焼く！", views: "4.5万回", date: "5か月前", duration: "11:20", thumb: "bg-red-900" },
            { id: 12, title: "【悲報】米花町5丁目に新しくできたラーメン屋、行列すぎて断念...", views: "3.1万回", date: "6か月前", duration: "05:10", thumb: "bg-orange-700" },
            { id: 13, title: "探偵の必須アイテム紹介。これさえあれば証拠は逃さない。", views: "2100回", date: "6か月前", duration: "15:40", thumb: "bg-blue-950" },
            { id: 14, title: "仕事終わりの一杯。米花町の居酒屋で一人飲み動画。", views: "5.4万回", date: "7か月前", duration: "20:15", thumb: "bg-stone-900" },
            { id: 15, title: "【なぜ】事務所のポストに「ドーナツ」が入ってた件！", views: "8500回", date: "7か月前", duration: "07:30", thumb: "bg-gray-800" },
            { id: 16, title: "2025年、米花町で本当に美味かった店ベスト5！", views: "18.9万回", date: "8か月前", duration: "25:00", thumb: "bg-rose-900" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const openTalker = document.getElementById('open-sns-x');
    const openInsta = document.getElementById('open-sns-insta');
    const originalTitle = document.title;
    
    let modal = null; // モーダルの参照を管理

    const closeSNS = () => {
        if (modal) {
            modal.remove(); // DOMから完全に削除
            modal = null;
        }
        document.body.style.overflow = '';
        document.title = originalTitle;
    };

    // モーダルを開く時に都度生成する
    const initModal = () => {
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.id = 'sns-modal';
        modal.className = 'fixed inset-0 z-[100] bg-white overflow-y-auto'; // hiddenクラス不要
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    };

    const getHeader = (data, type) => `
        <div class="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-100 items-center max-w-2xl">
          <div class="max-w-2xl mx-auto p-2.5 flex items-center">
            <button id="close-sns-btn" class="p-2 hover:bg-slate-100 rounded-full transition">
                <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </button>
            <div class="${type === 'instaPhoto' ? '' : 'ml-6'} flex-grow">
              <div class="flex flex-col ${type === 'instaPhoto' ? 'text-center' : ''}">
                <h4 class="font-bold text-lg text-slate-900">${type === 'instaPhoto' ? data.id : data.name}</h4>
            </div>
            <div id="header-action-area" class="mr-2"></div>
          </div> 
        </div>
    `;

    function renderTalker() {
        initModal();
        const data = snsData.talker;
        document.title = `${data.name} さん（${data.id}）/ Talker`;
        const postsHtml = data.posts.map(post => `
            <div class="border-b border-slate-100 p-4 hover:bg-slate-50 transition-colors cursor-pointer">
                <div class="flex gap-3">
                    <div class="w-12 h-12 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-slate-500 overflow-hidden">
                         <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div class="flex-grow">
                        <div class="flex items-center gap-1">
                            <span class="font-bold text-sm select-none [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]">${data.name}</span>
                                        <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                            <span class="text-slate-500 text-xs select-none [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]">${data.id} · ${post.date}</span>
                        </div>
                        <p class="text-sm mt-1 text-slate-800 leading-relaxed">${post.content}</p>
                        <div class="flex gap-2 mt-3 text-slate-500 text-xs select-none justify-between [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]">
                            <button class="action-btn-reply w-16 hover:text-blue-500 flex items-center gap-1 transition-colors">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                <span class="truncate">${post.reply}</span>
                            </button>
                            <button class="action-btn-retweet w-16 hover:text-green-500 flex items-center gap-1 transition-colors">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                                <span class="truncate">${post.retweets}</span>
                            </button>
                            <button class="action-btn-like w-16 hover:text-red-500 flex items-center gap-1 transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                <span class="truncate">${post.likes}</span>
                            </button>
                            <button class="action-btn-views w-16 hover:text-blue-500 flex items-center gap-1 transition-colors">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
                                <span class="truncate">${post.views}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        modal.innerHTML = `
            <div class="max-w-2xl lg:max-w-6xl mx-auto min-h-screen bg-white">
                <div class="lg:flex px-0 lg:px-4">
                  <aside class="hidden md:flex flex-col items-end sticky top-0 h-screen border-r border-slate-100">
                   <nav>
                    <div class="p-3.5">
                     <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                     </svg>
                    </div>
                   </nav>
                  </aside>
                    <div class="flex-grow max-w-2xl border-x border-slate-100 lg:mr-6">
                        ${getHeader(data, 'talker')} <div class="relative">
                            <div class="h-32 md:h-48 bg-slate-300"></div>
                            <div class="px-4 pb-4">
                                <div class="relative flex justify-between items-end -mt-12 mb-4">
                                    <div class="w-24 h-24 md:w-32 md:h-32 bg-slate-200 rounded-full ring-4 ring-white flex items-center justify-center text-slate-500 overflow-hidden">
                                        <svg class="w-16 h-16 md:w-20 md:h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                    </div>
                                    <button class="action-btn-follow bg-slate-900 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-slate-800 transition" select-none [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]>フォロー</button>
                                </div>
                                <div>
                                    <h5 class="font-bold text-xl md:text-2xl flex items-center gap-1 select-none [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]">
                                        ${data.name} 
                                        <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                                    </h5>
                                    <p class="text-slate-500 text-sm select-none [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]">${data.id}</p>
                                    <p class="text-sm mt-3 text-slate-800 leading-relaxed select-none [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]">${data.bio}</p>
                                    <div class="flex gap-4 mt-3 text-sm">
                                        <span class="text-slate-500"><strong class="text-slate-900">${data.following}</strong> フォロー中</span>
                                        <span class="text-slate-500"><strong class="text-slate-900">${data.followers}</strong> フォロワー</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex border-b border-slate-100 sticky top-[61px] bg-white z-10">
                            <div class="flex-grow text-center py-4 font-bold border-b-2 border-yellow-600 text-sm">ポスト</div>
                            <div class="flex-grow text-center py-4 text-slate-400 text-sm">返信</div>
                            <div class="flex-grow text-center py-4 text-slate-400 text-sm">画像</div>
                            <div class="flex-grow text-center py-4 text-slate-400 text-sm">動画</div>
                        </div>
                        ${postsHtml}
                    </div>

                    <div class="hidden lg:block w-80 sticky top-[10px] h-fit">
                        <div class="border border-slate-100 rounded-2xl p-4">
                            <h4 class="font-bold text-xl mb-1">Talkerをはじめよう</h4>
                            <p class="text-xs text-slate-500 mb-4">今すぐ登録して、タイムラインをカスタマイズしましょう。</p>
                        
                            <div class="space-y-3">
                                <button class="w-full flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#4285F4"/>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#34A853"/>
                                    </svg>
                                    G-Linkで登録
                                </button>
                                <button class="w-full flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="#0F172A" stroke-width="2"></path>
                                        <path d="M12 22V12M12 12L3 7M12 12l9-5" stroke="#0F172A" stroke-width="1.5"></path>
                                        <circle cx="12" cy="12" r="3" fill="#0F172A"></circle>
                                    </svg>
                                    Core Accountで登録
                                </button>
                                <div class="relative py-2 flex items-center justify-center">
                                    <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-100"></div></div>
                                    <span class="relative bg-white px-2 text-xs text-slate-500">または</span>
                                </div>
                                <button class="w-full py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition">アカウントを作成</button>
                            </div>
                        
                            <p class="text-[10px] text-slate-400 mt-4 leading-tight">
                                アカウントを登録することにより、<a href="#" class="text-blue-500">利用規約</a>と<a href="#" class="text-blue-500">プライバシーポリシー</a>（<a href="#" class="text-blue-500">Cookieの使用</a>を含む）に同意したとみなされます。
                            </p>
                        </div>
                    
                        <div class="mt-4 px-4 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500">
                            <a href="#" class="hover:underline">利用規約</a>
                            <a href="#" class="hover:underline">プライバシーポリシー</a>
                            <a href="#" class="hover:underline">Cookieのポリシー</a>
                            <a href="#" class="hover:underline">アクセシビリティ</a>
                            <a href="#" class="hover:underline">広告情報</a>
                            <a href="#" class="hover:underline">もっと見る...</a>
                            <span>© 2026 Talker Corp.</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // --- サブモーダル表示関数 ---
        function showSubModal(type) {
            const subModal = document.createElement('div');
            // fixed に変更することで画面中央に固定。z-indexを上げて確実に前面へ。
            subModal.className = 'fixed inset-0 z-50 bg-black/40 flex items-center justify-center';
            
            // SNSモーダル自体のスクロールを禁止
            modal.style.overflow = 'hidden';

            const configs = {
                reply: {
                    icon: `<div class="mb-6"><svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div>`,
                    title: '返信して会話に参加しましょう。',
                    desc: `Talkerに登録すると、${data.name}さんのポストに返信できます。`,
                    btn: '<button class="w-full py-3 bg-slate-900 text-white rounded-full font-bold mb-3">ログイン</button><button class="w-full py-3 border border-slate-200 rounded-full font-bold">アカウント作成</button>'
                },
                retweet: {
                    icon: `<div class="text-green-500 mb-6"><svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg></div>`,
                    title: 'リポストしてポストを拡散しましょう。',
                    desc: `Talkerに登録すると、${data.name}さんのポストをあなたのフォロワーに共有できます。`,
                    btn: '<button class="w-full py-3 bg-slate-900 text-white rounded-full font-bold mb-3">ログイン</button><button class="w-full py-3 border border-slate-200 rounded-full font-bold">アカウント作成</button>'
                },
                like: {
                    icon: `<div class="text-pink-500 mb-6"><svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>`,
                    title: '気に入ったポストやあとで読みたいポストに「いいね」しましょう。',
                    desc: `Talkerアカウントを作成すると、${data.name}さんのポストに「いいね」できます。`,
                    btn: '<button class="w-full py-3 bg-slate-900 text-white rounded-full font-bold mb-3">ログイン</button><button class="w-full py-3 border border-slate-200 rounded-full font-bold">アカウント作成</button>'
                },
                follow: {
                    icon: `<div class="mb-6 text-slate-900"><svg class="w-16 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M23 13v-3h3V8h-3V5h-2v3h-3v2h3v3h2z"></path></svg></div>`,
                    title: `${data.name}さんをフォローして、どんな情報をTalkerで投稿しているかチェックしましょう。`,
                    desc: 'Talkerに登録すると、このアカウントのポストをすぐに確認することができます。',
                    btn: '<button class="w-full py-3 bg-slate-900 text-white rounded-full font-bold mb-3">ログイン</button><button class="w-full py-3 border border-slate-200 rounded-full font-bold">アカウント作成</button>'
                },
                views: {
                    icon: '<div class="text-slate-900 mb-6"><svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"  stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg></div>',
                    title: '再生数',
                    desc: 'このポストが表示された回数です。詳細については<a href="#" class="underline">ヘルプセンター</a>をご覧ください。',
                    btn: '<button id="close-sub-btn" class="w-full py-3 bg-slate-900 text-white rounded-full font-bold">この表示を閉じる</button>'
                }
            };

            const config = configs[type];
            
            subModal.innerHTML = `
                <div class="bg-white w-full h-full lg:h-auto lg:max-w-md lg:rounded-2xl p-8 relative flex flex-col justify-center lg:block">
                    <button id="close-sub-x" class="absolute top-4 left-4 p-2 hover:bg-slate-100 rounded-full">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <div class="text-left mt-8 lg:mt-0">
                        ${config.icon}
                        <h2 class="text-2xl font-bold mb-4 leading-tight">${config.title}</h2>
                        <p class="text-slate-500 mb-10">${config.desc}</p>
                        <div class="space-y-2">
                            ${config.btn}
                        </div>
                    </div>
                </div>
            `;

            // bodyではなくmodal内に直接追加
            modal.appendChild(subModal);

            // 閉じる処理
            const close = () => {
                subModal.remove();
                modal.style.overflow = 'auto'; // スクロール再開
            };
            subModal.querySelector('#close-sub-x').onclick = close;
            if(subModal.querySelector('#close-sub-btn')) subModal.querySelector('#close-sub-btn').onclick = close;
            subModal.onclick = (e) => { if(e.target === subModal) close(); };
        }

        // 各ボタンにイベント登録
        modal.querySelectorAll('.action-btn-follow').forEach(el => el.onclick = () => showSubModal('follow'));
        modal.querySelectorAll('.action-btn-reply').forEach(el => el.onclick = () => showSubModal('reply'));
        modal.querySelectorAll('.action-btn-retweet').forEach(el => el.onclick = () => showSubModal('retweet'));
        modal.querySelectorAll('.action-btn-like').forEach(el => el.onclick = () => showSubModal('like'));
        modal.querySelectorAll('.action-btn-views').forEach(el => el.onclick = () => showSubModal('views'));

        // スクロール監視ロジックの追加
        const followBtnOriginal = modal.querySelector('button.bg-slate-900.text-white');
        const headerActionArea = modal.querySelector('#header-action-area');
        
        modal.onscroll = () => {
            const rect = followBtnOriginal.getBoundingClientRect();
            // 元のボタンの頭がヘッダーより上に隠れたら表示
            if (rect.top < 25) {
                if (!headerActionArea.innerHTML) {
                    // クラス名「action-btn-follow-header」をHTML文字列に追加
                    headerActionArea.innerHTML = `<button class="action-btn-follow-header bg-slate-900 text-white px-4 py-1.5 rounded-full font-bold text-sm hover:bg-slate-800 transition" select-none [--webkit-user-select:none] [--webkit-tap-highlight-color:transparent]>フォロー</button>`;
            
                    // 要素が存在することを確認してからイベントを付与
                    const headerFollowBtn = headerActionArea.querySelector('.action-btn-follow-header');
                    if (headerFollowBtn) {
                        headerFollowBtn.onclick = () => showSubModal('follow');
                    }
                }
            } else {
                headerActionArea.innerHTML = '';
            }
        };
        setupCloseEvent();
    }

    function renderInsta() {
        initModal();
        const data = snsData.insta;
        document.title = `${data.name}(${data.id})・ InstaPhoto`;
        const gridHtml = data.posts.map(post => `
            <div class="aspect-square bg-slate-100 relative group cursor-pointer overflow-hidden">
                <img src="${post.img}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
            </div>
        `).join('');

        modal.innerHTML = `
            <div class="max-w-2xl mx-auto min-h-screen bg-white">
                ${getHeader(data, 'instaPhoto')}
                <div>
                    <div class="flex items-center gap-6 md:gap-10 mt-3 mb-8 mx-3">
                        <div class="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-yellow-400 to-red-500 p-1 rounded-full flex-shrink-0">
                            <div class="w-full h-full bg-white rounded-full p-1">
                                <div class="w-full h-full bg-slate-200 rounded-full flex items-center justify-center text-slate-400 overflow-hidden">
                                    <svg class="w-12 h-12 md:w-20 md:h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grow">
                            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                <h5 class="text-xl font-normal">${data.name}</h5>
                            </div>
                            <div class="flex gap-6 md:gap-10 text-sm md:text-base">
                                <div class="text-center md:text-left"><strong class="block md:inline">${data.posts_count}</strong> 投稿</div>
                                <div class="text-center md:text-left"><strong class="block md:inline">${data.followers}</strong> フォロワー</div>
                                <div class="text-center md:text-left"><strong class="block md:inline">${data.following}</strong> フォロー中</div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-8 mx-3">
                        <p class="font-bold text-sm mb-1">${data.id}</p>
                        <p class="text-sm text-slate-800 whitespace-pre-wrap">${data.bio}</p>
                    </div>
                    <div class="p-3 outline-none cursor-pointer flex items-center gap-2 min-w-0">
                    <button class="bg-slate-100 hover:bg-slate-200 px-6 py-1.5 rounded-lg text-sm font-bold transition w-full">フォローする</button>
                    <button class="bg-slate-100 hover:bg-slate-200 px-6 py-1.5 rounded-lg text-sm font-bold transition w-full">メッセージ</button>
                    </div>
                    
                    <div class="flex border-t border-slate-100 mt-8">
                        <div class="flex-1 flex justify-center items-center py-4 border-t border-slate-900 -mt-[1px]">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="3" y="3" width="5" height="5"></rect><rect x="9.5" y="3" width="5" height="5"></rect><rect x="16" y="3" width="5" height="5"></rect>
                                <rect x="3" y="9.5" width="5" height="5"></rect><rect x="9.5" y="9.5" width="5" height="5"></rect><rect x="16" y="9.5" width="5" height="5"></rect>
                                <rect x="3" y="16" width="5" height="5"></rect><rect x="9.5" y="16" width="5" height="5"></rect><rect x="16" y="16" width="5" height="5"></rect>
                            </svg>
                        </div>
                        <div class="flex-1 flex justify-center items-center py-4 text-slate-400">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                        </div>
                        <div class="flex-1 flex justify-center items-center py-4 text-slate-400">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-1 relative">
                        ${gridHtml}
                   <div class="absolute bottom-0 left-0 w-full h-[calc(100%/3)] bg-gradient-to-t from-white via-white/80 to-transparent flex flex-col items-center justify-end pb-4 z-10 pointer-events-none">
                        <p class="text-sm font-bold mb-3 text-gray-800">全機能を体験しよう</p>
                        <button class="bg-[#0095f6] hover:bg-[#1877f2] text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors">
                            InstaPhotoに登録
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        `;
        setupCloseEvent();
    }

    function setupCloseEvent() {
        document.getElementById('close-sns-btn').addEventListener('click', closeSNS);
    }

    if (openTalker) openTalker.addEventListener('click', renderTalker);
    if (openInsta) openInsta.addEventListener('click', renderInsta);
});

// ViewTubeの全画面表示制御
document.getElementById('open-video-viewtube')?.addEventListener('click', function(e) {
    e.preventDefault();
    openViewTube();
});

function openViewTube() {
    // 背景スクロール禁止
    document.body.style.overflow = 'hidden';
    
    // 開くたびにコンテナを初期化して生成する
    let container = document.getElementById('viewtube-container');
    if (container) container.remove(); 
    
    container = document.createElement('div');
    container.id = 'viewtube-container';
    container.className = 'fixed inset-0 z-[100] bg-white overflow-y-auto transition-opacity duration-300 opacity-0';
    document.body.appendChild(container);

    const data = snsData.viewtube;
    
    // チャンネルページの生成 (メニュー関連要素をテンプレートから削除済)
    container.innerHTML = `
       <div class="flex h-full w-full">
<nav class="fixed bottom-0 left-0 w-full h-14 bg-white border-t border-slate-200 flex justify-around items-center z-50 md:static md:w-[72px] md:h-full md:flex-col md:justify-start md:border-t-0 md:border-r md:pt-4 lg:w-[70px] p-2">
    
    <button class="flex flex-col items-center justify-center w-full md:w-auto md:py-4 hover:bg-slate-100 rounded-lg transition-colors group !w-[-webkit-fill-available]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mb-1 text-slate-700 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="text-[10px] text-slate-700 group-hover:text-black">ホーム</span>
    </button>

    <button class="flex flex-col items-center justify-center w-full md:w-auto md:py-4 hover:bg-slate-100 rounded-lg transition-colors group !w-[-webkit-fill-available]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mb-1 text-slate-700 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v8l9-11h-7z"/>
        </svg>
        <span class="text-[10px] text-slate-700 group-hover:text-black">ショート</span>
    </button>

    <button class="flex flex-col items-center justify-center w-full md:w-auto md:py-4 hover:bg-slate-100 rounded-lg transition-colors group !w-[-webkit-fill-available]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mb-1 text-slate-700 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
        <span class="text-[10px] text-slate-700 group-hover:text-black text-black truncate w-14">登録チャンネル</span>
    </button>

    <button class="flex flex-col items-center justify-center w-full md:w-auto md:py-4 hover:bg-slate-100 rounded-lg transition-colors group !w-[-webkit-fill-available]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mb-1 text-slate-700 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <span class="text-[10px] text-slate-700 group-hover:text-black">マイページ</span>
    </button>

</nav>
        <div class="min-h-screen bg-[#f9f9f9] text-slate-900 font-sans pb-14 md:pb-0 overflow-y-auto !w-[-webkit-fill-available]">
            <nav class="sticky top-0 bg-white z-10 px-4 py-2 flex items-center shadow-sm justify-between">
                <div class="flex items-center gap-1">
                    <svg class="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"></rect>
    <path d="M8 4L12 9L16 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M10 16.5V10.5L15 13.5L10 16.5Z"></path>
</svg>
                    <span class="hidden md:flex font-black text-xl tracking-tighter">ViewTube</span>

            <div class="flex md:hidden items-center gap-2">
                <span class="font-bold text-lg truncate max-w-[180px]">${data.channelName}</span>
            </div>
        </div>

        <div class="hidden md:flex flex-grow max-w-[600px] mx-4 items-center gap-4">
            <div class="flex flex-grow items-center">
                <input type="text" placeholder="検索" class="w-full h-10 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 shadow-inner">
                <button class="h-10 px-5 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                </button>
            </div>
            <button class="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
            </button>
        </div>

        <div class="flex items-center gap-1 md:gap-3 flex-shrink-0">
            <button class="md:hidden p-2 hover:bg-slate-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            </button>

            <button id="vt-menu-trigger" class="p-2 hover:bg-slate-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
            </button>

            <button class="hidden md:flex items-center gap-2 px-3 py-1.5 text-blue-600 border border-gray-200 rounded-full hover:bg-blue-50 transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
                ログイン
            </button>
            </div>
           </nav>

            <div class="w-full h-32 md:h-48 ${data.bannerColor} relative">
                <div class="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>

            <div class="max-w-6xl mx-auto px-4 md:px-8 py-6">
            <div class="mb-8">
                <div class="flex items-center gap-4 md:gap-6 mb-4">
                    <div class="w-20 h-20 md:w-32 md:h-32 rounded-full bg-slate-300 border-4 border-white shadow-sm flex-shrink-0 overflow-hidden">
                        <div class="w-full h-full bg-slate-400"></div> 
                    </div>
        
                    <div class="flex-1">
                        <h2 class="text-xl md:text-3xl font-bold leading-tight">${data.channelName}</h2>
                        <p class="text-sm text-slate-600">${data.handle}</p>
                        <div class="flex flex-wrap items-center text-xs md:text-sm text-slate-500 mt-1">
                            <span>チャンネル登録者数 ${data.subscribers}</span>
                            <span>･</span>
                            <span>${data.total}本の動画</span>
                        </div>
                    </div>
                </div>

                <p class="text-slate-600 text-sm mt-2 line-clamp-1 md:line-clamp-none">${data.description}</p>
                <button class="mt-4 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-700 transition w-[-webkit-fill-available] md:w-auto">
                    チャンネル登録
                </button>
                </div>

                <div class="flex border-b border-slate-200 mt-8 overflow-x-auto no-scrollbar">
                    <button class="px-4 py-3 text-slate-500 font-medium text-sm whitespace-nowrap hover:text-slate-800 transition">ホーム</button>
                    <button class="px-4 py-3 border-b-2 border-slate-900 font-bold text-sm whitespace-nowrap">動画</button>
                    <button class="px-4 py-3 text-slate-500 font-medium text-sm whitespace-nowrap hover:text-slate-800 transition">ショート</button>
                    <button class="px-4 py-3 text-slate-500 font-medium text-sm whitespace-nowrap hover:text-slate-800 transition">コミュニティ</button>
                </div>

                <div class="flex gap-2 py-4 overflow-x-auto no-scrollbar">
                    <button class="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-sm font-medium">新しい順</button>
                    <button class="px-4 py-1.5 bg-slate-100 text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-200">人気の順</button>
                    <button class="px-4 py-1.5 bg-slate-100 text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-200">古い順</button>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 mt-2">
                    ${data.videos.map(v => `
                        <div class="group cursor-pointer flex gap-3 md:block">
                            <div class="aspect-video bg-slate-200 rounded-xl md:mb-3 relative overflow-hidden w-40 sm:w-40 md:w-full flex-shrink-0">
                                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition"></div>
                                  <span class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-[10px] px-1.5 py-0.5 rounded">${v.duration}</span>
                            </div>
                            <div class="flex gap-3 min-w-0">
                                <div class="w-9 h-9 rounded-full bg-slate-200 flex-shrink-0 hidden md:block"></div>
                                <div class="min-w-0 -mr-2 flex-1">
                                    <h3 class="text-sm font-bold leading-tight line-clamp-3 md:line-clamp-2 [overflow:hidden] [text-overflow:ellipsis]">${v.title}</h3>
                                    <p class="text-xs text-slate-500 mt-2 hidden md:block">${data.channelName}</p>
                                    <p class="text-xs text-slate-500 mt-1 md:mt-0">${v.views} • ${v.date}</p>
                                </div>
                                <button class="flex-shrink-0 text-slate-400 hover:text-slate-600 ml-auto self-start w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 active:bg-slate-200 transition-colors -mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                               </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
     </div>
    `;

    const originalTitle = document.title;
    document.title = `${data.channelName} - Viewtube`;

    // 表示処理
    requestAnimationFrame(() => {
        container.classList.add('opacity-100');
    });

    // 閉じる機能の統合
    const closeVT = () => {
        container.classList.remove('opacity-100');
        toggleMenu(false);
        setTimeout(() => {
            container.remove(); // DOMから完全に削除
            document.title = originalTitle;
            document.body.style.overflow = ''; // スクロール復帰を追加
        }, 300);
    };

    // メニューの動的生成と閉じるイベント
    const menuTrigger = document.getElementById('vt-menu-trigger');

    const toggleMenu = (show) => {
        const isMobile = window.innerWidth < 768;
        if (show) {
            // メニュー関係の要素を動的生成
            const overlay = document.createElement('div');
            overlay.id = 'vt-menu-overlay';
            overlay.className = 'fixed inset-0 bg-black/20 z-[60] transition-opacity opacity-0';
            
            const menu = document.createElement('div');
            menu.id = isMobile ? 'vt-mobile-menu' : 'vt-pc-menu';
            
            if (isMobile) {
                menu.className = 'fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-[70] flex flex-col transition-transform transform translate-y-full';
                menu.innerHTML = `
                    <div class="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-3"></div>
                    <button class="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-base border-b border-slate-50 w-[-webkit-fill-available]">ログイン</button>
                    <button class="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-base border-b border-slate-50 w-[-webkit-fill-available]">設定</button>
                    <button class="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-base border-b border-slate-50 w-[-webkit-fill-available]">再生履歴</button>
                    <button class="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-base border-b border-slate-50 w-[-webkit-fill-available]">アプリを開く</button>
                    <button class="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-base border-b border-slate-50 w-[-webkit-fill-available]">ヘルプ</button>
                    <button id="close-viewtube-mobile" class="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-base w-[-webkit-fill-available]">Viewtubeを閉じる</button>
                `;
            } else {
                menu.className = 'fixed top-12 right-20 w-64 bg-white rounded-xl shadow-xl z-[70] flex flex-col py-2 border border-slate-200';
                menu.innerHTML = `
                    <button class="px-4 py-3 hover:bg-slate-100 flex items-center gap-3 text-sm w-[-webkit-fill-available]">再生履歴</button>
                    <button class="px-4 py-3 hover:bg-slate-100 flex items-center gap-3 text-sm w-[-webkit-fill-available]">表示言語: 日本語</button>
                    <button class="px-4 py-3 hover:bg-slate-100 flex items-center gap-3 text-sm w-[-webkit-fill-available]">場所: 日本</button>
                    <div class="h-[1px] bg-slate-100 my-1"></div>
                    <button class="px-4 py-3 hover:bg-slate-100 flex items-center gap-3 text-sm w-[-webkit-fill-available]">設定</button>
                    <button class="px-4 py-3 hover:bg-slate-100 flex items-center gap-3 text-sm w-[-webkit-fill-available]">ヘルプ</button>
                    <div class="h-[1px] bg-slate-100 my-1"></div>
                    <button id="close-viewtube" class="px-4 py-3 hover:bg-slate-100 flex items-center gap-3 text-sm w-[-webkit-fill-available]">Viewtubeを閉じる</button>
                `;
            }

            container.appendChild(overlay);
            container.appendChild(menu);

            // 動的生成されたボタンへのイベント登録
            overlay.addEventListener('click', () => toggleMenu(false));
            const closeBtn = menu.querySelector('#close-viewtube') || menu.querySelector('#close-viewtube-mobile');
            if (closeBtn) closeBtn.addEventListener('click', closeVT);

            // アニメーション発火
            requestAnimationFrame(() => {
                overlay.classList.add('opacity-100');
                if (isMobile) menu.classList.remove('translate-y-full');
            });
        } else {
            const overlay = document.getElementById('vt-menu-overlay');
            const pcMenu = document.getElementById('vt-pc-menu');
            const mobileMenu = document.getElementById('vt-mobile-menu');
            
            if (overlay) overlay.classList.remove('opacity-100');
            if (mobileMenu) mobileMenu.classList.add('translate-y-full');
            
            setTimeout(() => {
                if (overlay) overlay.remove();
                if (pcMenu) pcMenu.remove();
                if (mobileMenu) mobileMenu.remove();
            }, 300);
        }
    };

    menuTrigger.addEventListener('click', () => toggleMenu(true));
}
