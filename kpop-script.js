// 测试题目数据
const questions = [
    {
        id: 1,
        text: "1. 身高",
        options: [
            { text: "高（168以上）", value: "高" },
            { text: "适中（160-168）", value: "适中" },
            { text: "娇小（160以下）", value: "娇小" }
        ]
    },
    {
        id: 2,
        text: "2. 脸型",
        options: [
            { text: "圆脸", value: "圆脸" },
            { text: "V脸", value: "V脸" },
            { text: "方脸/方圆脸", value: "方脸/方圆脸" },
            { text: "鹅蛋脸", value: "鹅蛋脸" }
        ]
    },
    {
        id: 3,
        text: "3. 肤色",
        options: [
            { text: "冷白皮", value: "冷白皮" },
            { text: "粉白", value: "粉白" },
            { text: "黄白", value: "黄白" },
            { text: "小麦色", value: "小麦色" }
        ]
    },
    {
        id: 4,
        text: "4. 五官量感",
        options: [
            { text: "浓颜", value: "浓颜" },
            { text: "淡颜", value: "淡颜" }
        ]
    },
    {
        id: 5,
        text: "5. 眼睛形状",
        options: [
            { text: "圆眼", value: "圆眼" },
            { text: "杏眼", value: "杏眼" },
            { text: "猫眼", value: "猫眼" },
            { text: "细长眼", value: "细长眼" }
        ]
    },
    {
        id: 6,
        text: "6. 嘴唇厚度",
        options: [
            { text: "厚唇", value: "厚唇" },
            { text: "薄唇", value: "薄唇" },
            { text: "适中", value: "适中" }
        ]
    },
    {
        id: 7,
        text: "7. 适合发色",
        options: [
            { text: "黑/深棕", value: "黑/深棕" },
            { text: "白金/浅色", value: "白金/浅色" },
            { text: "彩色", value: "彩色" }
        ]
    },
    {
        id: 8,
        text: "8. 头发长短",
        options: [
            { text: "长发", value: "长发" },
            { text: "短发", value: "短发" }
        ]
    },
    {
        id: 9,
        text: "9. 身材",
        options: [
            { text: "沙漏型", value: "沙漏型" },
            { text: "H型", value: "H型" },
            { text: "梨型", value: "梨型" },
            { text: "苹果型", value: "苹果型" }
        ]
    },
    {
        id: 10,
        text: "10. 气质风格",
        options: [
            { text: "清纯可爱", value: "清纯可爱" },
            { text: "妩媚性感", value: "妩媚性感" },
            { text: "帅气酷飒", value: "帅气酷飒" },
            { text: "优雅清冷", value: "优雅清冷" },
            { text: "鬼马精灵", value: "鬼马精灵" },
            { text: "元气阳光", value: "元气阳光" }
        ]
    }
];

// 女爱豆数据
let idols = [];

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
        { id: 1, name: "张元英", group: "IVE", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 2, name: "裴珠泫(Irene)", group: "Red Velvet", height: "娇小", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 3, name: "金智妮(Jennie)", group: "BLACKPINK", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "梨型", style: "妩媚性感、酷飒" },
        { id: 4, name: "朴彩英(Rosé)", group: "BLACKPINK", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 5, name: "金智秀(Jisoo)", group: "BLACKPINK", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 6, name: "柳智敏(Karina)", group: "aespa", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "妩媚性感、帅气酷飒" },
        { id: 7, name: "田小娟", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "白金/浅色、彩色", hairLength: "中长发", bodyShape: "梨型", style: "帅气酷飒、元气阳光" },
        { id: 8, name: "黄礼志(Yeji)", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 9, name: "朴秀荣(Joy)", group: "Red Velvet", height: "高", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "元气阳光、优雅清冷" },
        { id: 10, name: "金旼炡(Winter)", group: "aespa", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "中长发", bodyShape: "H型", style: "优雅清冷、清纯可爱" },
        { id: 11, name: "Lisa", group: "BLACKPINK", height: "适中", faceShape: "圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、酷飒" },
        { id: 12, name: "林娜琏", group: "TWICE", height: "高", faceShape: "方脸/方圆脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 13, name: "名井南(Mina)", group: "TWICE", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、优雅清冷" },
        { id: 14, name: "凑崎纱夏(Sana)", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、元气阳光、鬼马精灵" },
        { id: 15, name: "平井桃(Momo)", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "元气阳光、妩媚性感" },
        { id: 16, name: "孙彩瑛", group: "TWICE", height: "高", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "中短发", bodyShape: "沙漏型", style: "妩媚性感、帅气酷飒" },
        { id: 17, name: "周子瑜", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、元气阳光" },
        { id: 18, name: "俞定延", group: "TWICE", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "白金/浅色、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 19, name: "金多贤", group: "TWICE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、元气阳光" },
        { id: 20, name: "赵美延(Miyeon)", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 21, name: "田小娟", group: "(G)I-DLE", height: "娇小", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 22, name: "叶舒华", group: "(G)I-DLE", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "梨型", style: "清纯可爱、优雅清冷" },
        { id: 23, name: "宋雨琦", group: "(G)I-DLE", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、鬼马精灵" },
        { id: 24, name: "姜涩琪", group: "Red Velvet", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 25, name: "孙承完(Wendy)", group: "Red Velvet", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "元气阳光、优雅清冷" },
        { id: 26, name: "金艺琳(Yeri)", group: "Red Velvet", height: "娇小", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "沙漏型", style: "优雅清冷、鬼马精灵、元气阳光" },
        { id: 27, name: "崔智秀(Lia)", group: "ITZY", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 28, name: "申留真(Ryujin)", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 29, name: "李彩领(Chaeryeong)", group: "ITZY", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "元气阳光、优雅清冷" },
        { id: 30, name: "申有娜(Yuna)", group: "ITZY", height: "适中", faceShape: "V脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、元气阳光" },
        { id: 31, name: "雪允(Sullyoon)", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 32, name: " Lily", group: "NMIXX", height: "高", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、元气阳光" },
        { id: 33, name: "吴海媛(Haewon)", group: "NMIXX", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "妩媚性感、帅气酷飒" },
        { id: 34, name: "薛仑娥(Sullyoon)", group: "NMIXX", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、元气阳光" },
        { id: 35, name: "金奎真(Kyujin)", group: "NMIXX", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、元气阳光" },
        { id: 36, name: "林允儿(Yoona)", group: "少女时代", height: "高", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷、元气阳光" },
        { id: 37, name: "金泰妍(Taeyeon)", group: "少女时代", height: "娇小", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "优雅清冷、元气阳光、鬼马精灵" },
        { id: 38, name: "崔秀英(Sooyoung)", group: "少女时代", height: "高", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、妩媚性感" },
        { id: 39, name: "金孝渊(Hyoyeon)", group: "少女时代", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 40, name: "权俞利(Yuri)", group: "少女时代", height: "适中", faceShape: "鹅蛋脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、元气阳光" },
        { id: 41, name: "李顺圭(Sunny)", group: "少女时代", height: "娇小", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕", hairLength: "短发", bodyShape: "沙漏型", style: "优雅清冷、元气阳光、鬼马精灵" },
        { id: 42, name: "安宥真", group: "IVE", height: "高", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、元气阳光" },
        { id: 43, name: "直井怜(Rei)", group: "IVE", height: "适中", faceShape: "圆脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、元气阳光" },
        { id: 44, name: "金秋天(Liz)", group: "IVE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 45, name: "金秋天(Liz)", group: "IVE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 46, name: "金秋天(Liz)", group: "IVE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 47, name: "金秋天(Liz)", group: "IVE", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 48, name: "金采源(Chae Won)", group: "KiiiKiii", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、白金/浅色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 49, name: "金智媛(Ji Won)", group: "KiiiKiii", height: "娇小", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "沙漏型", style: "帅气酷飒、元气阳光" },
        { id: 50, name: "金多惠(Da Hye)", group: "KiiiKiii", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "猫眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、酷飒" },
        { id: 51, name: "Ahyeon", group: "Babymonster", height: "适中", faceShape: "V脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 52, name: "Rora", group: "Babymonster", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色", hairLength: "短发", bodyShape: "沙漏型", style: "优雅清冷、清纯可爱" },
        { id: 53, name: "Chiquita", group: "Babymonster", height: "适中", faceShape: "鹅蛋脸", skinTone: "小麦色", featureIntensity: "淡颜", eyeShape: "猫眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 54, name: "Pharita", group: "Babymonster", height: "高", faceShape: "长脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、白金/浅色、彩色", hairLength: "长发", bodyShape: "H型", style: "优雅清冷、元气阳光" },
        { id: 55, name: "Asa", group: "Babymonster", height: "适中", faceShape: "V脸", skinTone: "冷白皮", featureIntensity: "浓颜", eyeShape: "细长眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "短发", bodyShape: "H型", style: "妩媚性感、帅气酷飒" },
        { id: 57, name: "宫胁咲良", group: "IZONE", height: "适中", faceShape: "鹅蛋脸", skinTone: "粉白", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "H型", style: "清纯可爱、优雅清冷" },
        { id: 58, name: "金采源", group: "IZONE", height: "适中", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、元气阳光" },
        { id: 59, name: "权恩妃", group: "IZONE", height: "适中", faceShape: "方脸/方圆脸", skinTone: "小麦色", featureIntensity: "浓颜", eyeShape: "圆眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "帅气酷飒、元气阳光" },
        { id: 61, name: "崔叡娜", group: "IZONE", height: "娇小", faceShape: "圆脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "圆眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "沙漏型", style: "优雅清冷、元气阳光" },
        { id: 62, name: "金秋天(Liz)", group: "ILLIT", height: "适中", faceShape: "鹅蛋脸", skinTone: "冷白皮", featureIntensity: "淡颜", eyeShape: "杏眼", lipThickness: "厚唇", hairColor: "黑/深棕、彩色", hairLength: "长发", bodyShape: "梨型", style: "优雅清冷、清纯可爱" },
        { id: 63, name: "李瑞敏(Minju)", group: "ILLIT", height: "适中", faceShape: "长脸", skinTone: "粉白", featureIntensity: "浓颜", eyeShape: "杏眼", lipThickness: "薄唇", hairColor: "黑/深棕、彩色", hairLength: "中长发", bodyShape: "H型", style: "妩媚性感、元气阳光" }
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
    
    // 添加选项
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

// 计算匹配度
function calculateMatch(userAnswers, idol) {
    let score = 0;
    const answerFields = ['height', 'faceShape', 'skinTone', 'featureIntensity', 'eyeShape', 'lipThickness', 'hairColor', 'hairLength', 'bodyShape', 'style'];
    
    for (let i = 0; i < userAnswers.length; i++) {
        const userAnswer = userAnswers[i];
        const idolValue = idol[answerFields[i]];
        
        // 检查是否匹配
        if (idolValue.includes(userAnswer)) {
            score++;
        }
    }
    
    return score;
}

// 显示结果
function showResult() {
    // 计算每个女爱豆的匹配度
    const idolScores = idols.map(idol => {
        return {
            idol,
            score: calculateMatch(userAnswers, idol)
        };
    });
    
    // 按匹配度排序
    idolScores.sort((a, b) => b.score - a.score);
    
    // 获取匹配度最高的女爱豆
    const bestMatch = idolScores[0].idol;
    
    // 显示结果
    testScreen.style.display = 'none';
    resultScreen.style.display = 'flex';
    
    // 更新结果信息
    idolName.textContent = bestMatch.name;
    idolGroup.textContent = `组合: ${bestMatch.group}`;
    idolHeight.textContent = `身高: ${bestMatch.height}`;
    idolFaceShape.textContent = `脸型: ${bestMatch.faceShape}`;
    idolSkinTone.textContent = `肤色: ${bestMatch.skinTone}`;
    idolFeatureIntensity.textContent = `五官量感: ${bestMatch.featureIntensity}`;
    idolEyeShape.textContent = `眼睛形状: ${bestMatch.eyeShape}`;
    idolLipThickness.textContent = `嘴唇厚度: ${bestMatch.lipThickness}`;
    idolHairColor.textContent = `适合发色: ${bestMatch.hairColor}`;
    idolHairLength.textContent = `头发长短: ${bestMatch.hairLength}`;
    idolBodyShape.textContent = `身材: ${bestMatch.bodyShape}`;
    idolStyle.textContent = `气质风格: ${bestMatch.style}`;
    
    // 更新图片
    const photoUrl = `https://console.enterprise.trae.cn/api/ide/v1/text_to_image?prompt=K-pop%20female%20idol%20${bestMatch.name}%20portrait%20professional%20photo&image_size=square`;
    idolPhoto.querySelector('img').src = photoUrl;
}

// 重新测试
function restartTest() {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'flex';
}

// 启动游戏
initGame();