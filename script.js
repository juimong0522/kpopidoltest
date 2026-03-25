// 游戏数据 - 对话树结构
const gameData = {
    dialogs: {
        start: {
            id: "start",
            character: "旁白",
            text: "你在森林中醒来，感到有些迷茫。前方有两条路，左边通向一片幽暗的树林，右边则是一条开满鲜花的小径。",
            options: [
                {
                    text: "选择左边的幽暗树林",
                    next: "dark_forest"
                },
                {
                    text: "选择右边的鲜花小径",
                    next: "flower_path"
                }
            ]
        },
        dark_forest: {
            id: "dark_forest",
            character: "旁白",
            text: "你走进了幽暗的树林，周围的光线越来越暗。突然，你听到了一阵低沉的咆哮声从深处传来。",
            options: [
                {
                    text: "继续前进，探索声音的来源",
                    next: "encounter_wolf"
                },
                {
                    text: "小心后退，寻找其他路径",
                    next: "back_to_crossroad"
                }
            ]
        },
        flower_path: {
            id: "flower_path",
            character: "旁白",
            text: "你沿着鲜花小径前行，空气中弥漫着花香。不久，你看到一位穿着长袍的老人坐在路边的石头上。",
            options: [
                {
                    text: "上前与老人交谈",
                    next: "talk_to_old_man"
                },
                {
                    text: "悄悄绕过老人，继续前进",
                    next: "secret_garden"
                }
            ]
        },
        encounter_wolf: {
            id: "encounter_wolf",
            character: "狼",
            text: "一只巨大的狼出现在你面前，它的眼睛发出绿色的光芒，看起来又饿又凶。",
            options: [
                {
                    text: "尝试安抚狼",
                    next: "calm_wolf"
                },
                {
                    text: "转身逃跑",
                    next: "run_away"
                }
            ]
        },
        back_to_crossroad: {
            id: "back_to_crossroad",
            character: "旁白",
            text: "你小心地退回到了交叉路口，重新思考你的选择。",
            options: [
                {
                    text: "再次选择左边的幽暗树林",
                    next: "dark_forest"
                },
                {
                    text: "选择右边的鲜花小径",
                    next: "flower_path"
                }
            ]
        },
        talk_to_old_man: {
            id: "talk_to_old_man",
            character: "老人",
            text: "年轻人，你为何来到这片森林？我是这片森林的守护者，已经在这里生活了很久。",
            options: [
                {
                    text: "告诉老人你迷路了，请求帮助",
                    next: "old_man_help"
                },
                {
                    text: "询问森林的秘密",
                    next: "forest_secret"
                }
            ]
        },
        secret_garden: {
            id: "secret_garden",
            character: "旁白",
            text: "你绕过老人，继续前进，发现了一片隐藏的花园，里面种满了各种奇花异草。",
            options: [
                {
                    text: "仔细观察花园中的植物",
                    next: "magical_plant"
                },
                {
                    text: "继续深入花园",
                    next: "garden_ending"
                }
            ]
        },
        calm_wolf: {
            id: "calm_wolf",
            character: "旁白",
            text: "你尝试安抚狼，慢慢伸出手。令人惊讶的是，狼似乎感受到了你的善意，逐渐平静下来。",
            options: [
                {
                    text: "跟随狼进入森林深处",
                    next: "wolf_ending"
                }
            ]
        },
        run_away: {
            id: "run_away",
            character: "旁白",
            text: "你转身逃跑，但狼的速度比你快得多。就在它要追上你时，一道光芒闪过...",
            options: [
                {
                    text: "...",
                    next: "bad_ending"
                }
            ]
        },
        old_man_help: {
            id: "old_man_help",
            character: "老人",
            text: "迷路了吗？这片森林很容易让人迷失方向。不过，如果你能帮我一个忙，我可以告诉你如何离开。",
            options: [
                {
                    text: "询问需要什么帮助",
                    next: "help_old_man"
                }
            ]
        },
        forest_secret: {
            id: "forest_secret",
            character: "老人",
            text: "这片森林是一个连接不同世界的通道。你之所以来到这里，是因为你有一个未完成的使命。",
            options: [
                {
                    text: "追问使命是什么",
                    next: "mission_reveal"
                }
            ]
        },
        magical_plant: {
            id: "magical_plant",
            character: "旁白",
            text: "你发现了一株发光的植物，它的花瓣呈现出彩虹般的颜色。当你触摸它时，一股温暖的能量流遍全身。",
            options: [
                {
                    text: "摘下一片花瓣",
                    next: "petal_ending"
                }
            ]
        },
        help_old_man: {
            id: "help_old_man",
            character: "老人",
            text: "我的魔法杖掉在了森林深处，如果你能帮我找回来，我就会送你回家。",
            options: [
                {
                    text: "答应帮助老人寻找魔法杖",
                    next: "find_wand"
                }
            ]
        },
        mission_reveal: {
            id: "mission_reveal",
            character: "老人",
            text: "你的使命是保护这片森林免受黑暗势力的侵害。只有拥有纯洁心灵的人才能进入这里，而你就是被选中的人。",
            options: [
                {
                    text: "接受使命",
                    next: "hero_ending"
                }
            ]
        },
        find_wand: {
            id: "find_wand",
            character: "旁白",
            text: "你在森林深处找到了老人的魔法杖。当你拿起它时，它发出了耀眼的光芒。",
            options: [
                {
                    text: "带着魔法杖回到老人身边",
                    next: "wand_return"
                }
            ]
        },
        wand_return: {
            id: "wand_return",
            character: "老人",
            text: "谢谢你，年轻人。你不仅帮我找回了魔法杖，也证明了你的善良。现在，我将送你回家。",
            options: [
                {
                    text: "...",
                    next: "good_ending"
                }
            ]
        }
    },
    endings: {
        wolf_ending: {
            title: "狼的伙伴",
            text: "你跟随狼进入了森林深处，发现它是森林的守护者。你们成为了朋友，一起保护这片神奇的森林。"
        },
        bad_ending: {
            title: "迷失的灵魂",
            text: "你在森林中迷失了方向，永远被困在了这片神秘的土地上。"
        },
        garden_ending: {
            title: "花园的守护者",
            text: "你发现了花园的秘密，成为了新的守护者，永远留在了这片美丽的地方。"
        },
        petal_ending: {
            title: "魔法的力量",
            text: "花瓣的魔法将你送回了家，但你永远不会忘记这段奇妙的冒险。"
        },
        hero_ending: {
            title: "森林的英雄",
            text: "你接受了使命，成为了森林的守护者，用你的力量保护着这片神奇的土地。"
        },
        good_ending: {
            title: "回家的路",
            text: "老人使用魔法杖打开了回家的通道，你回到了自己的世界，但这段冒险将永远铭刻在你的记忆中。"
        }
    }
};

// 游戏状态
let currentDialogId = "start";

// DOM 元素
const storyScreen = document.getElementById('story-screen');
const dialogScreen = document.getElementById('dialog-screen');
const endingScreen = document.getElementById('ending-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const characterName = document.getElementById('character-name');
const dialogText = document.getElementById('dialog-text');
const optionsContainer = document.getElementById('options');
const endingTitle = document.getElementById('ending-title');
const endingText = document.getElementById('ending-text');

// 初始化游戏
function initGame() {
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
}

// 开始游戏
function startGame() {
    storyScreen.style.display = 'none';
    dialogScreen.style.display = 'flex';
    currentDialogId = "start";
    showDialog(currentDialogId);
}

// 显示对话
function showDialog(dialogId) {
    const dialog = gameData.dialogs[dialogId];
    if (!dialog) {
        // 检查是否是结局
        showEnding(dialogId);
        return;
    }
    
    characterName.textContent = dialog.character;
    dialogText.textContent = dialog.text;
    
    // 清空选项
    optionsContainer.innerHTML = '';
    
    // 添加选项
    dialog.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => {
            currentDialogId = option.next;
            showDialog(currentDialogId);
        });
        optionsContainer.appendChild(button);
    });
}

// 显示结局
function showEnding(endingId) {
    const ending = gameData.endings[endingId];
    if (ending) {
        dialogScreen.style.display = 'none';
        endingScreen.style.display = 'flex';
        endingTitle.textContent = ending.title;
        endingText.textContent = ending.text;
    }
}

// 重新开始游戏
function restartGame() {
    endingScreen.style.display = 'none';
    storyScreen.style.display = 'flex';
}

// 启动游戏
initGame();