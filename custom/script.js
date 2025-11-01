let title = document.querySelector('title');
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let description = document.querySelector('meta[name="description"]');

let descriptionOG = document.querySelector('meta[property="og:description"]');
let picOG = document.querySelector('meta[property="og:image"]');

let pictwitter = document.querySelector('meta[name="twitter:image"]');

let descriptionweichat = document.querySelector('meta[itemprop="description"]');
let picweichat = document.querySelector('meta[itemprop="image"]');

// 禁止页面滑动
document.addEventListener('touchmove', function(event) {

    event.preventDefault();


}, { passive: false });

const params = new URLSearchParams(window.location.search);
let username = params.get("name");
let subject = params.get("subject");
let titleInput = params.get("title");
let descriptionInput = params.get("description");
let picInput = params.get("pic");

// 限制用户名长度，避免页面样式崩坏
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";
if (titleInput) {
  title.textContent = titleInput;
}

if (picInput) {
  // 动态生成meta（针对SPA应用）
  // 通过链接参数强制更新微信缓存
  // 获取当前时间戳
  var timestamp = new Date().getTime();

  picOG.setAttribute('content',picInput+"?v="+timestamp);
  pictwitter.setAttribute('content',picInput+"?v="+timestamp);
  picweichat.setAttribute('content',picInput+"?v="+timestamp);
}

if (descriptionInput) {
  description.setAttribute('content',descriptionInput);
  descriptionOG.setAttribute('content',descriptionInput);
  descriptionweichat.setAttribute('content',descriptionInput);
}

if (subject) {
  questionText.innerText = subject;
}
// 防止 `null` 变成 `"null"`
if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}


let clickCount = 0; // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
  "？你认真的吗…",
  "要不再想想？",
  "不许选这个！ ",
  "我会很伤心…",
  "不行:(",
];

// No 按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;

  // 让 Yes 变大，每次放大 0.5 倍
  let yesSize = 1 + clickCount * 0.5;
  // let yesOffset = clickCount * 25;
  yesButton.style.transform = `scale(${yesSize})`;
  // yesButton.style.transform = `translateX(${yesOffset}px)`;

  // 挤压 No 按钮，每次右移 50px
  let noOffset = clickCount * 25;
  noButton.style.transform = `translateX(${noOffset}px)`;

  // 让图片和文字往上移动
  let moveUp = clickCount * 10;
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`;

  // No 文案变化（前 5 次变化）
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（前 5 次变化）
  if (clickCount === 1) mainImage.src = "images/shocked.png"; // 震惊
  if (clickCount === 2) mainImage.src = "images/think.png"; // 思考
  if (clickCount === 3) mainImage.src = "images/angry.png"; // 生气
  if (clickCount === 4) mainImage.src = "images/crying.png"; // 哭
  if (clickCount >= 5) mainImage.src = "images/crying.png"; // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
const loveTest = `!!!喜欢你!! ( >᎑<)♡︎ᐝ  ${
  username ? `${safeUsername}  ♡︎ᐝ(>᎑< )` : ""
}`;

yesButton.addEventListener("click", function () {
  // 先创建基础 HTML 结构
  document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

  // 确保用户名安全地插入
  document.querySelector(".yes-text").innerText = loveTest;

  // 禁止滚动，保持页面美观
  document.body.style.overflow = "hidden";
});