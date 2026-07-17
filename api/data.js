//npx vercel --prod//
export default function handler(req, res) {
    // 取得當前請求的來源網域
    const origin = req.headers.origin;

    // 定義你允許存取的網域清單 (正式網域 + 本地開發網域)
    const allowedOrigins = [
        'https://project-8p9q6.vercel.app',
        'http://localhost:3000',
    ];

    // 如果請求的來源在清單中，就動態允許它
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    // 允許常見的請求方法與標頭
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 處理瀏覽器的預檢請求 (OPTIONS)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    res.status(200).json({
        itemDb: { 
        earring: [
            { name: "豐饒之根", img: "/accessory/earring/3.png", stats: { crit: 15, str: 125, agi:50, int: 167, wil: 58 },
              upgrade: { 0:{},
                         1 :{atk:16,pen: 7},2:{atk:32, pen:13},3:{atk:48, pen:20},4:{atk:64, pen:26},5 :{atk:80, pen:33},
                         6 :{atk:96,pen:39},7:{atk:112,pen:46},8:{atk:128,pen:52},9:{atk:144,pen:59},10:{atk:160,pen:65},
                         11:{atk:176,pen:72} ,12:{atk:192,pen:78 },13:{atk:208,pen:85} ,14:{atk:224,pen:91 },15:{atk:240,pen:98 }, 
                         16:{atk:256,pen:104},17:{atk:272,pen:111},18:{atk:288,pen:117},19:{atk:304,pen:124},20:{atk:320,pen:130},
                        }
              },
            { name: "太陽的悲願", img: "/accessory/earring/2.png", stats: { crit: 11, str: 125, agi:50, int: 167, wil: 58 } ,
              upgrade: { 0 :{}, 
                         1 :{atk:15, pen: 6}, 2:{atk:30,pen: 11}, 3:{atk:45,pen: 17}, 4:{atk:60,pen:22},   5:{atk:75, pen:28},
                         6 :{atk:90, pen:33}, 7:{atk:105,pen:39}, 8:{atk:120,pen:44}, 9:{atk:135,pen:50}, 10:{atk:150,pen:55},
                         11:{atk:165,pen:61},12:{atk:180,pen:66},13:{atk:195,pen:72},14:{atk:210,pen:77}, 15:{atk:225,pen:83}, 
                         16:{atk:240,pen:88},17:{atk:255,pen:94},18:{atk:270,pen:99},19:{atk:285,pen:105},20:{atk:300,pen:110},
                        },
              },
            { name: "聖所的耳環", img: "/accessory/earring/1.png", stats: { crit: 7 } },
        ],

        head: [
            {
                name: "埃柳頭盔", img: "/gear/head/head1.png", set: "埃柳",
                rarityStats: {
                    white:  { force: 900,  def:4888, str: 180, agi: 90, int: 243, wil: 80 },
                    green:  { force: 945,  def:5118, str: 180, agi: 90, int: 243, wil: 80 },
                    blue:   { force: 990,  def:5348, str: 180, agi: 90, int: 243, wil: 80 },
                    purple: { force: 1035, def:5578, str: 180, agi: 90, int: 243, wil: 80 },
                    orange: { force: 1080, def:5808, str: 180, agi: 90, int: 243, wil: 80 },
                    red:    { force: 1125, def:6158, str: 180, agi: 90, int: 243, wil: 80 },
                },
                refine: { def:  { max: 479, step: { plus: 50, minus: 10} }, }
            },

            {
                name: "兀恩雅頭盔", img: "/gear/head/兀恩雅頭盔.png", set: "兀恩雅",
                rarityStats: {
                    white:  { force: 750, def:4338, str: 180, agi: 90, int: 243, wil: 80 },
                    green:  { force: 780, def:4448, str: 180, agi: 90, int: 243, wil: 80 },
                    blue:   { force: 810, def:4558, str: 180, agi: 90, int: 243, wil: 80 },
                    purple: { force: 840, def:4668, str: 180, agi: 90, int: 243, wil: 80 },
                    orange: { force: 870, def:4778, str: 180, agi: 90, int: 243, wil: 80 },
                    red:    { force: 900, def:4888, str: 180, agi: 90, int: 243, wil: 80 },
                },
                refine: { def:  { max: 479, step: { plus: 50, minus: 10} }, }
            },
        ],

        necklace: [
            { name: "璀璨的貓咪項鍊", img: "/accessory/necklace/璀璨的貓咪項鍊.png",
              stats: { bal: 2, crit: 2, def: 50, str: 10, agi: 16, int: 13, wil: 10} },
            { name: "黑貓項鍊", img: "/accessory/necklace/黑貓項鍊.png",
              stats: { bal: 4, crit: 4, def: 50, str: 10, agi: 16, int: 13, wil: 10} },
        ],

        weapon: [
            {
                name: "埃柳武器", img: "/gear/weapon/埃柳武器.png", set: "埃柳",
                rarityStats: {
                    white:  { atk: 37400, bal: 75, crit: 136, force: 4250, speed: 47, str: 110, agi: 60, int: 148, wil: 80},
                    green:  { atk: 38650, bal: 76, crit: 137, force: 4400, speed: 47, str: 110, agi: 60, int: 148, wil: 80},
                    blue:   { atk: 39900, bal: 77, crit: 138, force: 4550, speed: 47, str: 110, agi: 60, int: 148, wil: 80},
                    purple: { atk: 41150, bal: 78, crit: 139, force: 4700, speed: 47, str: 110, agi: 60, int: 148, wil: 80},
                    orange: { atk: 7 },
                    red:    { atk: 9 },
                },
                refine: {
                    atk:  { max: 2000, step: { plus: 150, minus: 10} },
                    crit: { max: 4 },
                    bal:  { max: 4 },
                }
            },

            {
                name: "兀恩雅武器", img: "/gear/weapon/兀恩雅武器.png", set: "兀恩雅",
                // ★ 改成 rarityStats
                rarityStats: {
                    white:  { atk: 34900, bal: 67, crit: 128, speed: 47, force: 3750, str: 110, agi: 60, int: 148, wil: 80},
                    green:  { atk: 35400, bal: 67, crit: 128, speed: 47, force: 3850, str: 110, agi: 60, int: 148, wil: 80},
                    blue:   { atk: 35900, bal: 67, crit: 128, speed: 47, force: 3950, str: 110, agi: 60, int: 148, wil: 80},
                    purple: { atk: 36400, bal: 67, crit: 128, speed: 47, force: 4050, str: 110, agi: 60, int: 148, wil: 80},
                    orange: { atk: 36900, bal: 67, crit: 128, speed: 47, force: 4150, str: 110, agi: 60, int: 148, wil: 80},
                    red:    { atk: 37400, bal: 67, crit: 128, speed: 47, force: 4250, str: 110, agi: 60, int: 148, wil: 80},
                },
                refine: {
                    atk:  { max: 2000, step: { plus: 150, minus: 10} },
                    crit: { max: 4 },
                    bal:  { max: 4 },
                }
            }
        ],

        chest: [
            {
                name: "埃柳鏈甲", img: "/gear/chest/埃柳鏈甲.png", set: "埃柳",
                rarityStats: {
                    white:  { force: 900,  def: 5058, str: 225, agi: 113, int: 304, wil: 100 },
                    green:  { force: 945,  def: 5339, str: 225, agi: 113, int: 304, wil: 100 },
                    blue:   { force: 990,  def: 5620, str: 225, agi: 113, int: 304, wil: 100 },
                    purple: { force: 1035, def: 5914, str: 225, agi: 113, int: 304, wil: 100 },
                    orange: { force: 1080, def: 6208, str: 225, agi: 113, int: 304, wil: 100 },
                    red:    { force: 1125, def: 6502, str: 225, agi: 113, int: 304, wil: 100 },
                },
                refine: { def:  { max: 596, step: { plus:50, minus:10 } }, }
            },

            {
                name: "兀恩雅鏈甲", img: "/gear/chest/兀恩雅鏈甲.png", set: "兀恩雅",
                rarityStats: {
                    white:  { force: 750, def: 4508, str: 225, agi: 113, int: 304, wil: 100 },
                    green:  { force: 780, def: 4618, str: 225, agi: 113, int: 304, wil: 100 },
                    blue:   { force: 810, def: 4728, str: 225, agi: 113, int: 304, wil: 100 },
                    purple: { force: 840, def: 4838, str: 225, agi: 113, int: 304, wil: 100 },
                    orange: { force: 870, def: 4948, str: 225, agi: 113, int: 304, wil: 100 },
                    red:    { force: 900, def: 5058, str: 225, agi: 113, int: 304, wil: 100 },
                },
                refine: { def:  { max: 596, step: { plus:50, minus:10 } }, }
            },
        ],

        totem: [
            { name: "埃柳之書",   img: "/accessory/totem/埃柳之書.png",
              stats: { atk: 1410, crit: 10, speed: 3, def: 3090, str: 180, agi: 90, int: 243, wil: 80 }, },
            { name: "兀恩雅之書", img: "/accessory/totem/兀恩雅之書.png",
              stats: { atk: 1410, crit: 10, speed: 3, def: 3590, str: 180, agi: 90, int: 243, wil: 80 }, },
        ],

        leg: [
            {
                name: "埃柳護脛", img: "/gear/leg/埃柳護脛.png", set: "埃柳",
                rarityStats: {
                    white:  { force: 900,  def: 4843, str: 225, agi: 113, int: 304, wil: 100 },
                    green:  { force: 945,  def: 5093, str: 225, agi: 113, int: 304, wil: 100 },
                    blue:   { force: 990,  def: 5343, str: 225, agi: 113, int: 304, wil: 100 },
                    purple: { force: 1035, def: 5643, str: 225, agi: 113, int: 304, wil: 100 },
                    orange: { force: 1080, def: 5943, str: 225, agi: 113, int: 304, wil: 100 },
                    red:    { force: 1125, def: 6243, str: 225, agi: 113, int: 304, wil: 100 },
                },
                refine: { def:  { max: 567, step: { plus: 50, minus:10 } }, }
            },

            {
                name: "兀恩雅護脛", img: "/gear/leg/兀恩雅護脛.png", set: "兀恩雅",
                rarityStats: {
                    white:  { force: 750, def: 4293, str: 225, agi: 113, int: 304, wil: 100 },
                    green:  { force: 780, def: 4403, str: 225, agi: 113, int: 304, wil: 100 },
                    blue:   { force: 810, def: 4513, str: 225, agi: 113, int: 304, wil: 100 },
                    purple: { force: 840, def: 4623, str: 225, agi: 113, int: 304, wil: 100 },
                    orange: { force: 870, def: 4733, str: 225, agi: 113, int: 304, wil: 100 },
                    red:    { force: 900, def: 4843, str: 225, agi: 113, int: 304, wil: 100 },
                },
                refine: { def:  { max: 567, step: { plus: 50, minus:10 } }, }
            },
        ],

        hand: [
            {
                name: "兀恩雅護手", img: "/gear/hand/兀恩雅護手.png", set: "兀恩雅",
                rarityStats: {
                    white:  { force: 750, def:4338, str: 225, agi: 113, int: 304, wil: 100 },
                    green:  { force: 780, def:4448, str: 225, agi: 113, int: 304, wil: 100 },
                    blue:   { force: 810, def:4558, str: 225, agi: 113, int: 304, wil: 100 },
                    purple: { force: 840, def:4668, str: 225, agi: 113, int: 304, wil: 100 },
                    orange: { force: 870, def:4778, str: 225, agi: 113, int: 304, wil: 100 },
                    red:    { force: 900, def:4888, str: 225, agi: 113, int: 304, wil: 100 },
                },
                refine: { def:  { max: 479, step: { plus: 50, minus: 10} }, }
            },
        ],

        belt: [
            { name: "詛咒腰帶", img: "/accessory/belt/詛咒腰帶.png", stats: { bal: 12, str: 145, agi: 95, int: 193, wil: 105 } },
            { name: "鬥爭腰帶", img: "/accessory/belt/鬥爭腰帶.png", stats: { bal: 8,  str: 145, agi: 95, int: 193, wil: 105 } },
        ],

        feet: [
            {
                name: "兀恩雅靴子", img: "/gear/feet/兀恩雅靴子.png", set: "兀恩雅",
                rarityStats: {
                    white:  { force: 750, def:4338, str: 225, agi: 113, int: 304, wil: 100 },
                    green:  { force: 780, def:4448, str: 225, agi: 113, int: 304, wil: 100 },
                    blue:   { force: 810, def:4558, str: 225, agi: 113, int: 304, wil: 100 },
                    purple: { force: 840, def:4668, str: 225, agi: 113, int: 304, wil: 100 },
                    orange: { force: 870, def:4778, str: 225, agi: 113, int: 304, wil: 100 },
                    red:    { force: 900, def:4888, str: 225, agi: 113, int: 304, wil: 100 },
                },
                refine: { def:  { max: 479, step: { plus: 50, minus: 10} }, }
            },
        ],

        jewelry: [
            { name: "灰燼暮光胸針", img: "/accessory/jewelry/灰燼暮光胸針.png",
                stats: { crit: 4, speed: 3, def: 200, str:50, agi: 50, int: 67, wil: 50 } },
            { name: "純白之羽胸針", img: "/accessory/jewelry/純白之羽胸針.png", 
                stats: { crit: 2, speed: 2, def: 100, str:50, agi: 50, int: 67, wil: 50 } },
        ],

        ring: [
            { name: "暗之暈", img: "/accessory/ring/暗之暈.png", stats: { bal: 5,  crit: 6, str: 140, agi: 70, int: 180, wil: 80 },
            upgrade: { 0:{}, 20:{atk:280,pen:90} } },
            { name: "暗之影", img: "/accessory/ring/暗之影.png", stats: { bal: 5,  crit: 6, str: 140, agi: 70, int: 180, wil: 80 },
            upgrade: { 0:{}, 20:{atk:280,pen:90} } },
        ],

        ring2: [
            { name: "暗之暈", img: "/accessory/ring/暗之暈.png", stats: { bal: 5,  crit: 6, str: 140, agi: 70, int: 180, wil: 80 },
            upgrade: { 0:{}, 20:{atk:280,pen:90} } },
            { name: "暗之影", img: "/accessory/ring/暗之影.png", stats: { bal: 5,  crit: 6, str: 140, agi: 70, int: 180, wil: 80 },
            upgrade: { 0:{}, 20:{atk:280,pen:90} } },
        ],

        artifact: [
            { name: "注視者的完整技能道具", img: "/accessory/artifact/注視者的完整的神祕貓雕像.png", stats: { atk: 1000, bal: 5 } },
        ],
        },

        enchantDb: { 
        //武器字首
        "悲劇的":   { type: "top",   slots: ["weapon"],             stats: { atk: 700, speed: 8, crit: 8, bal: 4 } },
        "復仇的":   { type: "top",   slots: ["weapon"],             stats: { atk: 550, speed: 8, crit: 6, bal: 2 } },
        //武器字尾
        "一擊":     { type: "end",   slots: ["weapon"],             stats: { atk: 1030, speed: 3, crit: 10, bal: -1 } },
        "怨恨":     { type: "end",   slots: ["weapon"],             stats: { atk: 1000, speed: 3, crit: 7, bal: -1 } },
        //頭腿字首
        "滿盈的":   { type: "top",   slots: ["head","leg"],      stats: { atk: 245, def: 200, speed: 2, crit: 3, bal: 6 } },
        "被遺忘的": { type: "top",   slots: ["head","leg"],      stats: { atk: 245, def: 200, speed: 2, crit: 3, bal: 4 } },
        //頭腿字尾
        "鬥魂":     { type: "end",   slots: ["head","leg"],      stats: { atk: 285, def: 280, crit: 8 } },
        "進擊":     { type: "end",   slots: ["head","leg"],      stats: { atk: 285, def: 280, crit: 5 } },
        //手腳字首
        "優雅的":   { type: "top",   slots: ["hand","feet"],     stats: { atk: 145, def: 300, speed: 2, crit: 4, bal: 5 } } ,
        "悲痛的":   { type: "top",   slots: ["hand","feet"],     stats: { atk: 145, def: 300, speed: 2, crit: 3, bal: 4 } } ,
        //手腳字尾
        "孤獨":     { type: "end",   slots: ["hand","feet"],     stats: { atk: 465, def: -300, speed: 1, bal: 10 } } ,
        "狂暴":     { type: "end",   slots: ["hand","feet"],     stats: { atk: 465, def: -300, speed: 1, bal: 7 } } ,
        //胸部字首
        "永恆的":   { type: "top",   slots: ["chest"],             stats: { def: 160, crit: 9, bal: -3 } } ,
        "預言的":   { type: "top",   slots: ["chest"],             stats: { def: 160, crit: 7, bal: -3 } } ,
        "高尚的":   { type: "top",   slots: ["chest"],             stats: { def: 160, crit: 6, bal: -3 } } ,
        "保持平衡的":{ type: "top",  slots: ["chest"],             stats: { speed: 2, crit: 1, bal: 1 } } ,
        //胸部字尾
        "試煉":     { type: "end",   slots: ["chest"],             stats: { def: 120, crit: 12, bal: -1 } } ,
        "悲嘆":     { type: "end",   slots: ["chest"],             stats: { def: 120, crit: 9, bal: -1 } } ,
        //書字首
        "虛無的":   { type: "top",   slots: ["totem"],             stats: { speed: 1, def: 1000, crit: 4 } } ,
        "勝者的":   { type: "top",   slots: ["totem"],             stats: { speed: 1, def: 800, crit: 2 } } ,
        "激烈的":   { type: "top",   slots: ["totem"],             stats: { speed: 1, def: 800, crit: 1 } } ,
        //書字尾
        "讚揚":     { type: "end",   slots: ["totem"],             stats: { atk: 230, crit: 4 } } ,
        "瘋狂":     { type: "end",   slots: ["totem"],             stats: { atk: 230, crit: 2 } } ,
        //腰帶字首
        "乾涸的":   { type: "top",   slots: ["belt"],              stats: { speed: 1, crit: 6, bal: 4 } } ,
        "古代的":   { type: "top",   slots: ["belt"],              stats: { speed: 1, crit: 4, bal: 2 } } ,
        "強烈的":   { type: "top",   slots: ["belt"],              stats: { speed: 1, crit: 3, bal: 1 } } ,
        //腰帶字尾
        //飾品字首
        "隱藏的":   { type: "top",   slots: ["earring","necklace"], stats: { atk: 700, speed: 1 } },
        "扭曲的":   { type: "top",   slots: ["earring","necklace"], stats: { atk: 450, speed: 1 } },
        "深刻的":   { type: "top",   slots: ["earring","necklace"], stats: { atk: 200, speed: 1 } },
        //戒指字首
        "對立的":   { type: "top",   slots: ["ring","ring2"],       stats: { bal: 9 } },
        "追蹤者的": { type: "top",   slots: ["ring","ring2"],       stats: { bal: 7 } },
        //戒指字尾
        "神秘":     { type: "end",   slots: ["ring","ring2"],       stats: { atk: 200, bal: 2, crit: 2 } } ,
        //胸針字首
        "超越的":   { type: "top",   slots: ["jewelry"],            stats: { atk: 600, speed: 1, crit: 2, bal:2, force: 150 } },
        "時空的":   { type: "top",   slots: ["jewelry"],            stats: { atk: 450, speed: 1, force: 100 } },
        //胸針字尾
        //技能道具字首
        "循環的":   { type: "top",   slots: ["artifact"],           stats: { atk: 700, speed: 5, crit: 2, bal: 2, force: 50 } },
        //技能道具字尾
        "降臨":     { type: "end",   slots: ["artifact"],           stats: { atk: 450, crit: 2, bal: 2 } } ,
        //精靈石
        "暴擊+2":   { type: "stone", 
                      slots: ["earring","necklace","weapon","totem","belt","jewelry","ring","ring2"], stats: { crit: 2 } },
        "平衡+2":   { type: "stone", 
                      slots: ["earring","necklace","weapon","totem","belt","jewelry","ring","ring2"], stats: { bal: 2 } },
        },

        setDb: { 
        "兀恩雅": { 1:{ bal:2},2:{bal:4},3:{ def: 450, int: 131, str: 95, bal:5},4:{ def: 510, int: 158, str: 115, bal:6},
                    5:{ def: 570, int: 185, str: 135, bal:8},6:{ def: 630, int: 209, str: 155, bal:10} },
        "埃柳":   { 1:{def:120,str:23,bal:3},2:{def:240,str:46,bal:6},3:{def:485,str:95,bal:7},
                    4:{def:615,str:115,bal:8},5:{def:615,str:135,bal:10},6:{def:680,str:155,bal:12} }
        },

        pairDb: { 
        "115套裝": { 
            slots: [ "ring", "ring2"],
            items: [ "暗之暈", "暗之影"], 
            bonus: { crit: 2 } },
        },

    });
}