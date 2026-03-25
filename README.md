# K-pop女爱豆风格测试

一个基于H5的K-pop女爱豆风格测试工具，通过回答10道选择题来匹配适合自己参考的女爱豆。

## 功能特点

- 🎵 10道详细的风格测试题目
- 📱 响应式设计，适合手机和电脑访问
- 🎨 美观的K-pop风格界面
- 📊 智能匹配算法，找到最适合的女爱豆
- 📷 自动生成女爱豆照片

## 测试题目

1. 身高：高（168以上）、适中（160-168）、娇小（160以下）
2. 脸型：圆脸、V脸、方脸/方圆脸、鹅蛋脸
3. 肤色：冷白皮、粉白、黄白、小麦色
4. 五官量感：浓颜、淡颜
5. 眼睛形状：圆眼、杏眼、猫眼、细长眼
6. 嘴唇厚度：厚唇、薄唇、适中
7. 适合发色：黑/深棕、白金/浅色、彩色
8. 头发长短：长发、短发
9. 身材：沙漏型、H型、梨型、苹果型
10. 气质风格：清纯可爱、妩媚性感、帅气酷飒、优雅清冷、鬼马精灵、元气阳光

## 部署到GitHub Pages

### 步骤1：创建GitHub仓库

1. 访问 [GitHub](https://github.com) 并登录账号
2. 点击右上角的 "+", 选择 "New repository"
3. 填写仓库信息：
   - Repository name: `kpop-idol-test` (或其他名称)
   - Description: `K-pop女爱豆风格测试工具`
   - 勾选 "Initialize this repository with a README"
   - 点击 "Create repository"

### 步骤2：上传文件

1. 进入创建的仓库
2. 点击 "Add file" -> "Upload files"
3. 选择并上传以下文件：
   - `kpop-test.html`
   - `kpop-style.css`
   - `kpop-script.js`
4. 填写 commit message (例如："Add K-pop test files")
5. 点击 "Commit changes"

### 步骤3：启用GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 滚动到 "GitHub Pages" 部分
3. 在 "Source" 下拉菜单中选择 "main" 分支
4. 点击 "Save"
5. 稍等几分钟，页面会显示一个可访问的URL

### 步骤4：访问和分享

- GitHub Pages 部署完成后，你会得到一个类似 `https://your-username.github.io/kpop-idol-test/` 的URL
- 直接访问该URL，然后点击 "kpop-test.html" 即可开始测试
- 或者直接访问 `https://your-username.github.io/kpop-idol-test/kpop-test.html`

## 本地运行

如果你想在本地运行测试：

1. 下载所有文件到本地文件夹
2. 直接双击 `kpop-test.html` 文件在浏览器中打开
3. 或者使用本地服务器：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 然后在浏览器中访问 http://localhost:8000/kpop-test.html
   ```

## 数据来源

测试数据基于 `idol.csv` 文件中的女爱豆信息，包含60+位K-pop女爱豆的详细数据。

## 技术栈

- HTML5
- CSS3
- JavaScript
- 响应式设计

## 注意事项

- 本测试仅用于娱乐和参考，结果仅供参考
- 所有图片均通过在线文本转图片API生成
- 部署到GitHub Pages后，链接可在微信等社交平台分享

希望你喜欢这个测试！🎶