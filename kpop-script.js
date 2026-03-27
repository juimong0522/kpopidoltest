// 测试题目数据
const questions = [
    {
        id: 1,
        text: "1. 你的身高属于哪种类型？",
        options: [
            { text: "高（168cm以上）", value: "高" },
            { text: "适中（160-168cm）", value: "适中" },
            { text: "娇小（160cm以下）", value: "娇小" }
        ]
    },
    {
        id: 2,
        text: "2. 你的脸型更接近以下哪种？",
        options: [
            { text: "圆脸", value: "圆脸" },
            { text: "V脸", value: "V脸" },
            { text: "方脸/方圆脸", value: "方脸/方圆脸" },
            { text: "鹅蛋脸", value: "鹅蛋脸" }
        ]
    },
    {
        id: 3,
        text: "3. 你的肤色属于哪种类型？",
        options: [
            { text: "冷白皮", value: "冷白皮" },
            { text: "粉白", value: "粉白" },
            { text: "黄白", value: "黄白" },
            { text: "小麦色", value: "小麦色" }
        ]
    },
    {
        id: 4,
        text: "4. 你的五官量感如何？",
        options: [
            { text: "浓颜（五官立体鲜明）", value: "浓颜" },
            { text: "淡颜（五官柔和精致）", value: "淡颜" }
        ]
    },
    {
        id: 5,
        text: "5. 你的眼睛形状更像哪种？",
        options: [
            { text: "圆眼", value: "圆眼" },
            { text: "杏眼", value: "杏眼" },
            { text: "猫眼", value: "猫眼" },
            { text: "细长眼", value: "细长眼" }
        ]
    },
    {
        id: 6,
        text: "6. 你的嘴唇厚度属于哪种类型？",
        options: [
            { text: "厚唇", value: "厚唇" },
            { text: "薄唇", value: "薄唇" },
            { text: "适中", value: "适中" }
        ]
    },
    {
        id: 7,
        text: "7. 你觉得自己适合哪种发色？",
        options: [
            { text: "黑/深棕", value: "黑/深棕" },
            { text: "白金/浅色", value: "白金/浅色" },
            { text: "彩色", value: "彩色" }
        ]
    },
    {
        id: 8,
        text: "8. 你更喜欢哪种头发长度？",
        options: [
            { text: "长发", value: "长发" },
            { text: "短发", value: "短发" }
        ]
    },
    {
        id: 9,
        text: "9. 你的身材类型更接近哪种？",
        options: [
            { text: "沙漏型", value: "沙漏型" },
            { text: "H型", value: "H型" },
            { text: "梨型", value: "梨型" },
            { text: "苹果型", value: "苹果型" }
        ]
    },
    {
        id: 10,
        text: "10. 你觉得自己的气质风格更偏向哪种？（最多可选3项）",
        options: [
            { text: "清纯可爱", value: "清纯可爱" },
            { text: "妩媚性感", value: "妩媚性感" },
            { text: "帅气酷飒", value: "帅气酷飒" },
            { text: "优雅清冷", value: "优雅清冷" },
            { text: "鬼马精灵", value: "鬼马精灵" },
            { text: "元气阳光", value: "元气阳光" },
            { text: "端庄大气", value: "端庄大气" }
        ],
        isMultiple: true,
        maxSelections: 3
    }
];

// 女爱豆数据
let idols = [
    { id: 1, name: "林允儿", group: "少女时代", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、端庄大气" },
    { id: 2, name: "金泰妍", group: "少女时代", height: "娇小", faceShape: "V脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "中长发", bodyShape: "H型", style: "端庄大气、优雅清冷、元气阳光" },
    { id: 3, name: "黄美英", group: "少女时代", height: "高", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "H型", style: "清纯可爱、元气阳光、甜美风" },
    { id: 4, name: "郑秀妍", group: "少女时代", height: "娇小", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、元气阳光" },
    { id: 5, name: "权俞利", group: "少女时代", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、元气阳光、甜美风" },
    { id: 6, name: "金孝渊", group: "少女时代", height: "娇小", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "苹果型", style: "端庄大气、元气阳光、元气阳光" },
    { id: 7, name: "崔秀英", group: "少女时代", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "端庄大气、甜美风、元气阳光" },
    { id: 8, name: "Tiffany", group: "少女时代", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "端庄大气、清纯可爱" },
    { id: 9, name: "林娜琏", group: "TWICE", height: "高", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、甜美风、元气阳光" },
    { id: 10, name: "名井南(Mina)", group: "TWICE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、甜美风" },
    { id: 11, name: "凑崎纱夏(Sana)", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、元气阳光、清纯可爱" },
    { id: 12, name: "平井桃(Momo)", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、清纯可爱" },
    { id: 13, name: "孙彩瑛", group: "TWICE", height: "高", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "苹果型", style: "妩媚性感、元气阳光" },
    { id: 14, name: "周子瑜", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "苹果型", style: "甜美风、元气阳光" },
    { id: 15, name: "金多贤", group: "TWICE", height: "娇小", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、阳光少女" },
    { id: 16, name: "林娜琏", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、元气阳光" },
    { id: 17, name: "俞定延", group: "TWICE", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "端庄大气、元气阳光" },
    { id: 18, name: "裴珠泫(Irene)", group: "Red Velvet", height: "娇小", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、甜美风" },
    { id: 19, name: "朴秀荣(Joy)", group: "Red Velvet", height: "高", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "元气阳光、清纯可爱、甜美风" },
    { id: 20, name: "姜涩琪", group: "Red Velvet", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、阳光少女" },
    { id: 21, name: "孙承完(Wendy)", group: "Red Velvet", height: "娇小", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "短发", bodyShape: "梨型", style: "端庄大气、元气阳光" },
    { id: 22, name: "金艺琳(Yeri)", group: "Red Velvet", height: "娇小", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "端庄大气、阳光少女" },
    { id: 23, name: "裴真率(Bae)", group: "NMIXX", height: "高", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "清纯可爱、元气阳光、妩媚性感" },
    { id: 24, name: "吴海媛", group: "NMIXX", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、元气阳光" },
    { id: 25, name: "薛仑娥(Sullyoon)", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "端庄大气、阳光少女" },
    { id: 26, name: "金奎真(Kyujin)", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 27, name: "张圭珍", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "苹果型", style: "端庄大气、元气阳光" },
    { id: 28, name: "Lily M", group: "NMIXX", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "苹果型", style: "元气阳光、甜美风" },
    { id: 29, name: "李素莉(Leesol)", group: "KiiiKiii", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、端庄大气" },
    { id: 30, name: "金秀智(Sui)", group: "KiiiKiii", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、端庄大气、甜美风" },
    { id: 31, name: "池智雨(Jiyu)", group: "KiiiKiii", height: "娇小", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "白金/浅色", hairLength: "短发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 32, name: "金夏温(Haum)", group: "KiiiKiii", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "长发", bodyShape: "苹果型", style: "端庄大气、阳光少女" },
    { id: 33, name: "金佳览(Kya)", group: "KiiiKiii", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 34, name: "金采源", group: "Lessarafim", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "清纯可爱、甜美风" },
    { id: 35, name: "宫胁咲良", group: "Lessarafim", height: "高", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 36, name: "中村一叶", group: "Lessarafim", height: "高", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、甜美风、妩媚性感" },
    { id: 37, name: "洪恩采", group: "Lessarafim", height: "高", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、元气阳光" },
    { id: 38, name: "金秋天", group: "Lessarafim", height: "高", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、元气阳光" },
    { id: 39, name: "全昭弥", group: "solo", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "清纯可爱、元气阳光" },
    { id: 40, name: "安宥真", group: "IVE", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、端庄大气、清纯可爱" },
    { id: 41, name: "张元英", group: "IVE", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、元气阳光、甜美风" },
    { id: 42, name: "直井怜(Rei)", group: "IVE", height: "高", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "梨型", style: "端庄大气、阳光少女" },
    { id: 43, name: "金秋天(Liz)", group: "IVE", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、甜美风" },
    { id: 44, name: "李瑞", group: "IVE", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 45, name: "李贤瑞", group: "IVE", height: "高", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、元气阳光" },
    { id: 46, name: "黄礼志(Yeji)", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、阳光少女" },
    { id: 47, name: "崔智秀(Lia)", group: "ITZY", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、元气阳光" },
    { id: 48, name: "申留真", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "梨型", style: "妩媚性感、甜美风" },
    { id: 49, name: "李彩领", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、端庄大气" },
    { id: 50, name: "申有娜", group: "ITZY", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、元气阳光" },
    { id: 51, name: "李瑞", group: "ILLIT", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、元气阳光" },
    { id: 52, name: "金敏周(Minju)", group: "ILLIT", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "端庄大气、甜美风、元气阳光" },
    { id: 53, name: "Moka", group: "ILLIT", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 54, name: "Minju", group: "ILLIT", height: "高", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 55, name: "Iroha", group: "ILLIT", height: "娇小", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "苹果型", style: "端庄大气、阳光少女、妩媚性感" },
    { id: 56, name: "金智妮(Jennie)", group: "BLACKPINK", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "妩媚性感、清纯可爱" },
    { id: 57, name: "朴彩英(Rosé)", group: "BLACKPINK", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、清纯可爱" },
    { id: 58, name: "金智秀(Jisoo)", group: "BLACKPINK", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、甜美风" },
    { id: 59, name: "Lisa", group: "BLACKPINK", height: "适中", faceShape: "圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、清纯可爱" },
    { id: 60, name: "Ahyeon", group: "Babymonster", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "妩媚性感、端庄大气" },
    { id: 61, name: "Haram", group: "Babymonster", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "短发", bodyShape: "苹果型", style: "端庄大气、元气阳光" },
    { id: 62, name: "Chiquita", group: "Babymonster", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "妩媚性感、端庄大气、元气阳光" },
    { id: 63, name: "Pharita", group: "Babymonster", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、甜美风" },
    { id: 64, name: "Asa", group: "Babymonster", height: "高", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 65, name: "Ruka", group: "Babymonster", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "妩媚性感、阳光少女" },
    { id: 66, name: "柳智敏(Karina)", group: "aespa", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "妩媚性感、端庄大气、清纯可爱" },
    { id: 67, name: "金玟庭(Winter)", group: "aespa", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "中长发", bodyShape: "H型", style: "端庄大气、甜美风、元气阳光" },
    { id: 68, name: "内永枝利(Giselle)", group: "aespa", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、阳光少女" },
    { id: 69, name: "宁艺卓(NingNing)", group: "aespa", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "端庄大气、甜美风" },
    { id: 70, name: "田小娟", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "白金/浅色、彩色", hairLength: "中长发", bodyShape: "梨型", style: "清纯可爱、元气阳光" },
    { id: 71, name: "赵美延", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、端庄大气、甜美风" },
    { id: 72, name: "田小娟", group: "(G)I-DLE", height: "娇小", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、阳光少女" },
    { id: 73, name: "叶舒华", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、端庄大气" },
    { id: 74, name: "李知恩", group: "solo", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、清纯可爱" },
    { id: 75, name: "Minnie", group: "(G)I-DLE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 76, name: "孝琳", group: "SISTAR", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "妩媚性感" },
    { id: 77, name: "宝拉", group: "SISTAR", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 78, name: "昭宥", group: "SISTAR", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、端庄大气" },
    { id: 79, name: "多顺", group: "SISTAR", height: "高", faceShape: "V脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "中长发", bodyShape: "梨型", style: "清纯可爱、端庄大气、阳光少女" },
    { id: 80, name: "宋茜", group: "f(x)", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、妩媚性感、甜美风" },
    { id: 81, name: "Amber", group: "f(x)", height: "高", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、元气阳光" },
    { id: 82, name: "Krystal", group: "f(x)", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、端庄大气" },
    { id: 83, name: "Minji", group: "NewJeans", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "妩媚性感、元气阳光、甜美风" },
    { id: 84, name: "Hanni", group: "NewJeans", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "中长发", bodyShape: "苹果型", style: "端庄大气、阳光少女" },
    { id: 85, name: "Danielle", group: "NewJeans", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、妩媚性感" },
    { id: 86, name: "Haerin", group: "NewJeans", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、阳光少女、甜美风" },
    { id: 87, name: "Hyein", group: "NewJeans", height: "高", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 88, name: "朴智妍", group: "T-ara", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 89, name: "CL", group: "2NE1", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、甜美风" },
    { id: 90, name: "朴春", group: "2NE1", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "中长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 91, name: "孟佳", group: "miss A", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、甜美风" },
    { id: 92, name: "李赛纶", group: "fromis_9", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "苹果型", style: "端庄大气" },
    { id: 93, name: "宋河英", group: "fromis_9", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、甜美风、妩媚性感" },
    { id: 94, name: "朴池原", group: "fromis_9", height: "娇小", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "端庄大气" },
    { id: 95, name: "李瑞渊", group: "fromis_9", height: "娇小", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "短发", bodyShape: "梨型", style: "端庄大气" },
    { id: 96, name: "金施贤", group: "everglow", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "端庄大气、阳光少女" },
    { id: 97, name: "金请夏", group: "solo", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "中长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 98, name: "金艺林", group: "solo", height: "娇小", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "苹果型", style: "清纯可爱、甜美风、妩媚性感" },
    { id: 99, name: "全昭弥(Somi)", group: "solo", height: "高", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "H型", style: "端庄大气、阳光少女" },
    { id: 100, name: "Solar", group: "MAMAMOO", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 101, name: "Moonbyul", group: "MAMAMOO", height: "娇小", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "梨型", style: "清纯可爱、妩媚性感" },
    { id: 102, name: "Wheein", group: "MAMAMOO", height: "娇小", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "梨型", style: "妩媚性感、元气阳光" },
    { id: 103, name: "Julie", group: "KISS OF LIFE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "妩媚性感" },
    { id: 104, name: "Natty", group: "KISS OF LIFE", height: "适中", faceShape: "鹅蛋脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "H型", style: "端庄大气、清纯可爱" },
    { id: 105, name: "Belle", group: "KISS OF LIFE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "白金/浅色、彩色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、妩媚性感" },
    { id: 106, name: "Haneul", group: "KISS OF LIFE", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "端庄大气、甜美风、元气阳光" },
    { id: 107, name: "Carmen", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、甜美风" },
    { id: 108, name: "Jiwoo", group: "Hearts2Heart", height: "高", faceShape: "方脸/方圆脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "H型", style: "端庄大气、甜美风、元气阳光" },
    { id: 109, name: "Yuha", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、元气阳光" },
    { id: 110, name: "Stella", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "长发", bodyShape: "梨型", style: "端庄大气" },
    { id: 111, name: "Juun", group: "Hearts2Heart", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
    { id: 112, name: "A-na", group: "Hearts2Heart", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "端庄大气、甜美风" },
    { id: 113, name: "Ian", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "端庄大气、元气阳光、阳光少女" },
    { id: 114, name: "Ye-on", group: "Hearts2Heart", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "苹果型", style: "端庄大气" },
    { id: 115, name: "hitomi", group: "Saymyname", height: "娇小", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "中长发", bodyShape: "H型", style: "端庄大气、元气阳光" },
    { id: 116, name: "周洁琼", group: "中国女", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、甜美风" },
    { id: 117, name: "金采炫", group: "Kep1er", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、甜美风" },
    { id: 118, name: "休宁巴伊叶", group: "Kep1er", height: "娇小", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "梨型", style: "元气阳光、阳光少女" }
];

// 游戏状态
let currentQuestionIndex = 0;
let userAnswers = [];

// DOM 元素
const startScreen = document.getElementById('start-screen');
const testScreen = document.getElementById('test-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const progressFill = document.getElementById('progress-fill');
const idolName = document.getElementById('idol-name');
const idolGroup = document.getElementById('idol-group');
const idolHeight = document.getElementById('idol-height');
const idolFaceShape = document.getElementById('idol-face-shape');
const idolSkinTone = document.getElementById('idol-skin-tone');
const idolFeatureIntensity = document.getElementById('idol-feature-intensity');
const idolEyeShape = document.getElementById('idol-eye-shape');
const idolLipThickness = document.getElementById('idol-lip-thickness');
const idolHairColor = document.getElementById('idol-hair-color');
const idolHairLength = document.getElementById('idol-hair-length');
const idolBodyShape = document.getElementById('idol-body-shape');
const idolStyle = document.getElementById('idol-style');
const idolPhoto = document.getElementById('idol-photo');

// 初始化游戏
function initGame() {
    startBtn.addEventListener('click', startTest);
    restartBtn.addEventListener('click', restartTest);
    loadIdolData();
}

// 加载女爱豆数据
function loadIdolData() {
    // 由于CSV文件编码问题，这里直接使用解析后的数据
    // 实际项目中可以使用fetch API读取CSV文件
    idols = [
        { id: 1, name: "姜涩琪", group: "Red Velvet", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "长发、短发", bodyShape: "H型", style: "帅气酷飒、优雅清冷" },
        { id: 2, name: "孙承完（Wendy）", group: "Red Velvet", height: "娇小", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "短发", bodyShape: "梨型", style: "清纯可爱、元气阳光" },
        { id: 3, name: "金艺琳（Yeri）", group: "Red Velvet", height: "娇小", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、优雅清冷" },
        { id: 4, name: "裴真率（Bae）", group: "NMIXX", height: "高", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色", hairLength: "短发", bodyShape: "H型", style: "优雅清冷、元气阳光、帅气酷飒" },
        { id: 5, name: "吴海嫄", group: "NMIXX", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、元气阳光" },
        { id: 6, name: "薛仑娥（Sullyoon）", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、优雅清冷" },
        { id: 7, name: "张圭珍（Kyujin）", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、鬼马精灵" },
        { id: 8, name: "金智羽", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发、短发", bodyShape: "苹果型", style: "清纯可爱、元气阳光" },
        { id: 9, name: "Lily M", group: "NMIXX", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "白金/浅色", hairLength: "短发", bodyShape: "苹果型", style: "元气阳光、端庄大气" },
        { id: 10, name: "李修旻（Leesol)", group: "KiiiKiii", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 11, name: "李守彬（Sui)", group: "KiiiKiii", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "优雅清冷、清纯可爱、端庄大气" },
        { id: 12, name: "徐知裕（Jiyu)", group: "KiiiKiii", height: "娇小", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "白金/浅色", hairLength: "短发", bodyShape: "H型", style: "清纯可爱、鬼马精灵" },
        { id: 13, name: "郭河音（Haum）", group: "KiiiKiii", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、优雅清冷" },
        { id: 14, name: "朴祉禹（Kya）", group: "KiiiKiii", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发、短发", bodyShape: "H型", style: "清纯可爱、鬼马精灵" },
        { id: 15, name: "宫胁咲良", group: "Lessarafim", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发、短发", bodyShape: "H型", style: "优雅清冷、端庄大气" },
        { id: 16, name: "金采源", group: "Lessarafim", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "梨型", style: "清纯可爱、鬼马精灵" },
        { id: 17, name: "许允真", group: "Lessarafim", height: "高", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "苹果型", style: "元气阳光、端庄大气" },
        { id: 18, name: "中村一叶", group: "Lessarafim", height: "高", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、端庄大气、帅气酷飒" },
        { id: 19, name: "洪恩採", group: "Lessarafim", height: "高", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱、元气阳光" },
        { id: 20, name: "崔叡娜", group: "solo", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发、短发", bodyShape: "H型", style: "鬼马精灵、元气阳光" },
        { id: 21, name: "张元英", group: "IVE", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、清纯可爱、妩媚性感" },
        { id: 22, name: "安宥真", group: "IVE", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发、短发", bodyShape: "H型", style: "帅气酷飒、元气阳光、端庄大气" },
        { id: 23, name: "直井怜（Rei）", group: "IVE", height: "高", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发、短发", bodyShape: "梨型", style: "清纯可爱、鬼马精灵" },
        { id: 24, name: "金志垣（Liz）", group: "IVE", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、端庄大气" },
        { id: 25, name: "金秋天", group: "IVE", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 26, name: "李瑞", group: "IVE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、元气阳光" },
        { id: 27, name: "黄礼志（Yeji）", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发、短发", bodyShape: "H型", style: "帅气酷飒、鬼马精灵" },
        { id: 28, name: "崔智秀（Lia）", group: "ITZY", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、元气阳光" },
        { id: 29, name: "申留真", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "梨型", style: "帅气酷飒、端庄大气" },
        { id: 30, name: "李彩领", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "妩媚性感、清纯可爱" },
        { id: 31, name: "申有娜", group: "ITZY", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "妩媚性感、元气阳光" },
        { id: 32, name: "李沅禧", group: "ILLIT", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、元气阳光" },
        { id: 33, name: "朴慜柱（Minju）", group: "ILLIT", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发、短发", bodyShape: "H型", style: "清纯可爱、优雅清冷、端庄大气" },
        { id: 34, name: "境萌花（Moka)", group: "ILLIT", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、鬼马精灵" },
        { id: 35, name: "卢玧我", group: "ILLIT", height: "高", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、帅气酷飒" },
        { id: 36, name: "外园彩羽（Iroha)", group: "ILLIT", height: "娇小", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发、短发", bodyShape: "苹果型", style: "清纯可爱、鬼马精灵、帅气酷飒" },
        { id: 37, name: "金智妮（Jennie）", group: "BLACKPINK", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "帅气酷飒、妩媚性感" },
        { id: 38, name: "朴彩英（Rosé）", group: "BLACKPINK", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、妩媚性感" },
        { id: 39, name: "金智秀（Jisoo）", group: "BLACKPINK", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "优雅清冷、端庄大气" },
        { id: 40, name: "Lisa", group: "BLACKPINK", height: "适中", faceShape: "圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发、短发", bodyShape: "H型", style: "帅气酷飒、妩媚性感" },
        { id: 41, name: "郑雅娴", group: "Babymonster", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "帅气酷飒、清纯可爱" },
        { id: 42, name: "李茶仁（Rora）", group: "Babymonster", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、元气阳光" },
        { id: 43, name: "Chiquita", group: "Babymonster", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "帅气酷飒、清纯可爱、元气阳光" },
        { id: 44, name: "Pharita", group: "Babymonster", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、端庄大气" },
        { id: 45, name: "榎并杏纱（Asa）", group: "Babymonster", height: "高", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "鬼马精灵、妩媚性感" },
        { id: 46, name: "河井榴花（Ruka）", group: "Babymonster", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "帅气酷飒、鬼马精灵" },
        { id: 47, name: "柳智敏（Karina）", group: "aespa", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "帅气酷飒、优雅清冷、妩媚性感" },
        { id: 48, name: "金玟庭（Winter）", group: "aespa", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发、短发", bodyShape: "H型", style: "清纯可爱、优雅清冷、鬼马精灵" },
        { id: 49, name: "内永绘里(Giselle)", group: "aespa", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "梨型", style: "妩媚性感、优雅清冷" },
        { id: 50, name: "宁艺卓（NingNing）", group: "aespa", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、端庄大气" },
        { id: 51, name: "宋雨琦", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "白金/浅色、彩色", hairLength: "长发、短发", bodyShape: "梨型", style: "鬼马精灵、元气阳光" },
        { id: 52, name: "赵美延", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、清纯可爱、端庄大气" },
        { id: 53, name: "田小娟", group: "(G)I-DLE", height: "娇小", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "帅气酷飒、鬼马精灵" },
        { id: 54, name: "叶舒华", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 55, name: "徐穗珍", group: "solo", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、妩媚性感" },
        { id: 56, name: "Minnie", group: "(G)I-DLE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、帅气酷飒" },
        { id: 57, name: "孝琳", group: "SISTAR", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "妩媚性感" },
        { id: 58, name: "宝拉", group: "SISTAR", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、帅气酷飒" },
        { id: 59, name: "昭宥", group: "SISTAR", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "妩媚性感、清纯可爱" },
        { id: 60, name: "金多顺", group: "SISTAR", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发、短发", bodyShape: "沙漏型", style: "妩媚性感、清纯可爱、优雅清冷" },
        { id: 61, name: "宋茜", group: "f(x)", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、帅气酷飒、端庄大气" },
        { id: 62, name: "刘逸云(Amber)", group: "f(x)", height: "高", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "帅气酷飒、元气阳光" },
        { id: 63, name: "郑秀晶(Krystal)", group: "f(x)", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、清纯可爱" },
        { id: 64, name: "金珉池(Minji)", group: "NewJeans", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "帅气酷飒、元气阳光、端庄大气" },
        { id: 65, name: "Hanni", group: "NewJeans", height: "适中", faceShape: "圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发、短发", bodyShape: "梨型", style: "清纯可爱、鬼马精灵" },
        { id: 66, name: "Danielle", group: "NewJeans", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱、妩媚性感" },
        { id: 67, name: "姜海璘(Haerin)", group: "NewJeans", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱、优雅清冷、鬼马精灵" },
        { id: 68, name: "李惠仁(Hyein)", group: "NewJeans", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 69, name: "朴智妍", group: "T-ara", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、妩媚性感" },
        { id: 70, name: "李彩麟（CL）", group: "2NE1", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发、短发", bodyShape: "H型", style: "帅气酷飒、端庄大气" },
        { id: 71, name: "朴山多拉", group: "2NE1", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发、短发", bodyShape: "H型", style: "优雅清冷、帅气酷飒" },
        { id: 72, name: "裴秀智", group: "miss A", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱、端庄大气" },
        { id: 73, name: "宋河英", group: "fromis_9", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发、短发", bodyShape: "苹果型", style: "清纯可爱" },
        { id: 74, name: "李彩煐", group: "fromis_9", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、端庄大气、妩媚性感" },
        { id: 75, name: "白知宪", group: "fromis_9", height: "娇小", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱" },
        { id: 76, name: "李娜炅", group: "fromis_9", height: "娇小", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "短发", bodyShape: "沙漏型", style: "清纯可爱" },
        { id: 77, name: "王怡人", group: "everglow", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱、优雅清冷" },
        { id: 78, name: "金泫雅", group: "solo", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发、短发", bodyShape: "沙漏型", style: "鬼马精灵、妩媚性感" },
        { id: 79, name: "权恩妃", group: "solo", height: "娇小", faceShape: "方脸/方圆脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发、短发", bodyShape: "H型", style: "清纯可爱" },
        { id: 80, name: "全昭弥（Somi)", group: "solo", height: "高", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "白金/浅色、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 81, name: "文星伊", group: "MAMAMOO", height: "适中", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "优雅清冷、帅气酷飒" },
        { id: 82, name: "丁辉人", group: "MAMAMOO", height: "娇小", faceShape: "V脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、帅气酷飒" },
        { id: 83, name: "华莎", group: "MAMAMOO", height: "娇小", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发、短发", bodyShape: "梨型", style: "帅气酷飒、元气阳光" },
        { id: 84, name: "Julie", group: "KISS OF LIFE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "妩媚性感" },
        { id: 85, name: "Natty", group: "KISS OF LIFE", height: "适中", faceShape: "鹅蛋脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
        { id: 86, name: "Belle", group: "KISS OF LIFE", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、妩媚性感" },
        { id: 87, name: "元天空(Haneul)", group: "KISS OF LIFE", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷、端庄大气" },
        { id: 88, name: "Carmen", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱、端庄大气" },
        { id: 89, name: "Jiwoo", group: "Hearts2Heart", height: "高", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发、短发", bodyShape: "H型", style: "清纯可爱、优雅清冷、端庄大气" },
        { id: 90, name: "Yuha", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱、元气阳光" },
        { id: 91, name: "Stella", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱" },
        { id: 92, name: "Juun", group: "Hearts2Heart", height: "适中", faceShape: "方脸/方圆脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "H型", style: "优雅清冷、帅气酷飒" },
        { id: 93, name: "A-na", group: "Hearts2Heart", height: "高", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、端庄大气" },
        { id: 94, name: "Ian", group: "Hearts2Heart", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "清纯可爱、元气阳光、鬼马精灵" },
        { id: 95, name: "Ye-on", group: "Hearts2Heart", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "苹果型", style: "清纯可爱" },
        { id: 96, name: "本田仁美（hitomi)", group: "Saymyname", height: "娇小", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发、短发", bodyShape: "H型", style: "清纯可爱、元气阳光" },
        { id: 97, name: "程潇", group: "宇宙少女", height: "适中", faceShape: "鹅蛋脸", skinTone: "黄白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "清冷优雅、元气阳光" },
        { id: 98, name: "沈晓婷", group: "Kep1er", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "适中", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "沙漏型", style: "清冷优雅、端庄大气" },
        { id: 99, name: "江崎光", group: "Kep1er", height: "娇小", faceShape: "V脸", skinTone: "黄白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "梨型", style: "元气阳光、鬼马精灵" }
    ];
}

// 开始测试
function startTest() {
    startScreen.style.display = 'none';
    testScreen.style.display = 'flex';
    currentQuestionIndex = 0;
    userAnswers = [];
    showQuestion(currentQuestionIndex);
}

// 显示问题
function showQuestion(index) {
    const question = questions[index];
    questionNumber.textContent = `问题 ${index + 1}/10`;
    questionText.textContent = question.text;
    
    // 更新进度条
    progressFill.style.width = `${(index / questions.length) * 100}%`;
    
    // 清空选项
    optionsContainer.innerHTML = '';
    
    // 处理多选题
    if (question.isMultiple) {
        const selectedOptions = [];
        
        // 添加选项
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            
            button.addEventListener('click', () => {
                // 切换选择状态
                const optionIndex = selectedOptions.indexOf(option.value);
                if (optionIndex > -1) {
                    // 取消选择
                    selectedOptions.splice(optionIndex, 1);
                    button.style.backgroundColor = '#f0f0f0';
                    button.style.borderColor = '#ddd';
                } else {
                    // 选择选项
                    if (selectedOptions.length < question.maxSelections) {
                        selectedOptions.push(option.value);
                        button.style.backgroundColor = '#ffe6ea';
                        button.style.borderColor = '#ff6b8b';
                    }
                }
            });
            
            optionsContainer.appendChild(button);
        });
        
        // 添加确认按钮
        const confirmButton = document.createElement('button');
        confirmButton.className = 'btn';
        confirmButton.textContent = '确认选择';
        confirmButton.style.marginTop = '20px';
        
        confirmButton.addEventListener('click', () => {
            if (selectedOptions.length > 0) {
                userAnswers.push(selectedOptions);
                if (index < questions.length - 1) {
                    showQuestion(index + 1);
                } else {
                    showResult();
                }
            }
        });
        
        optionsContainer.appendChild(confirmButton);
    } else {
        // 处理单选题
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.addEventListener('click', () => {
                userAnswers.push(option.value);
                if (index < questions.length - 1) {
                    showQuestion(index + 1);
                } else {
                    showResult();
                }
            });
            optionsContainer.appendChild(button);
        });
    }
}

// 计算匹配度
function calculateMatch(userAnswers, idol) {
    let score = 0;
    let styleScore = 0;
    const answerFields = ['height', 'faceShape', 'skinTone', 'featureIntensity', 'eyeShape', 'lipThickness', 'hairColor', 'hairLength', 'bodyShape', 'style'];
    
    // 题目权重分配：1、5、6、7每题10分；2、4、10每题15分；3、8、9每题5分
    const weights = [10, 15, 5, 15, 10, 10, 10, 5, 5, 15];
    
    for (let i = 0; i < userAnswers.length; i++) {
        const userAnswer = userAnswers[i];
        const idolValue = idol[answerFields[i]];
        
        if (i === 9) { // 最后一题（气质风格）是多选题
            // 解析爱豆的气质风格标签
            const idolStyles = idolValue.split('、');
            
            // 计算匹配的数量
            let matchCount = 0;
            userAnswer.forEach(style => {
                if (idolStyles.includes(style)) {
                    matchCount++;
                }
            });
            
            // 根据匹配数量计算得分
            // 权重为15分，根据匹配数量按比例计算
            if (matchCount > 0) {
                const styleMatchScore = (matchCount / userAnswer.length) * weights[i];
                score += styleMatchScore;
                styleScore = styleMatchScore;
            }
        } else { // 单选题
            // 检查是否匹配
            if (idolValue.includes(userAnswer)) {
                score += weights[i];
            }
        }
    }
    
    return { score, styleScore };
}

// 显示结果
function showResult() {
    // 计算每个女爱豆的匹配度
    const idolScores = idols.map(idol => {
        const { score, styleScore } = calculateMatch(userAnswers, idol);
        return {
            idol,
            score,
            styleScore
        };
    });
    
    // 按匹配度排序，总分相同时按风格匹配得分排序
    idolScores.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        } else {
            return b.styleScore - a.styleScore;
        }
    });
    
    // 获取Top 5匹配度最高的女爱豆
    const topIdols = idolScores.slice(0, 5);
    
    // 显示结果
    testScreen.style.display = 'none';
    resultScreen.style.display = 'flex';
    
    // 计算总分（根据权重）
    const totalScore = 10 + 15 + 5 + 15 + 10 + 10 + 10 + 5 + 5 + 15; // 总分为100分
    
    // 显示第一名
    const topIdol = topIdols[0];
    const topIdolElement = document.getElementById('top-idol');
    const percentage = Math.round((topIdol.score / totalScore) * 100);
    
    // 构建第一名的HTML（去掉图片展示）
    topIdolElement.innerHTML = `
        <div class="top-idol-info">
            <h2>🏆 ${topIdol.idol.name}</h2>
            <p>组合: ${topIdol.idol.group}</p>
            <div class="match-progress">
                <div class="match-progress-fill" style="width: 0%"></div>
            </div>
            <div class="match-percentage">匹配度: ${percentage}%</div>
        </div>
    `;
    
    // 动画显示进度条
    setTimeout(() => {
        const progressFill = topIdolElement.querySelector('.match-progress-fill');
        progressFill.style.width = `${percentage}%`;
    }, 300);
    
    // 显示总结性话语
    const summaryElement = document.getElementById('summary');
    summaryElement.textContent = `恭喜你！你与 ${topIdol.idol.name} 的风格最为匹配，相似度高达 ${percentage}%。以下是其他匹配度较高的女爱豆，供你参考。`;
    
    // 显示2-5名
    const otherIdolsElement = document.getElementById('other-idols');
    otherIdolsElement.innerHTML = '';
    
    topIdols.slice(1).forEach((item, index) => {
        const idol = item.idol;
        const score = item.score;
        const otherPercentage = Math.round((score / totalScore) * 100);
        
        const otherIdolItem = document.createElement('div');
        otherIdolItem.className = 'other-idol-item';
        
        otherIdolItem.innerHTML = `
            <div class="other-idol-info">
                <div class="other-idol-rank">${index + 2}</div>
                <div>
                    <span class="other-idol-name">${idol.name}</span>
                    <span class="other-idol-group">(${idol.group})</span>
                </div>
            </div>
            <div class="other-idol-match">${otherPercentage}%</div>
        `;
        
        otherIdolsElement.appendChild(otherIdolItem);
    });
}

// 重新测试
function restartTest() {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'flex';
}

// 启动游戏
initGame();