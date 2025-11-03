[中文](./README.cn.md) | **English**

<p align="center"><img width="100" src="./logo.png" alt="Gift logo"></p>
<h1 align="center">Giftie</h1>
<p align="center">
  <a target="_blank" href="https://kyrieliu.cn"><img src="https://img.shields.io/badge/Powered-kyrieliu-red" alt="Powered by kyrieliu"></a>
  <a href="javascript:void(0)"><img src="https://img.shields.io/badge/Version-1.1.0-blue" alt="version"></a>
  <a href="javascript:void(0)"><img src="https://img.shields.io/badge/License-MIT-blueviolet" alt="license"></a>
  <a href="javascript:void(0)"><img src="https://img.shields.io/badge/Vue-2.x-41b883" alt="vue"></a>
  <a href="javascript:void(0)"><img src="https://img.shields.io/badge/node-14.15.0-%23026e00" alt="node version"></a>
  <a target="_blank" href="https://kyrieliu.cn/images/qrcode.jpg"><img src="https://img.shields.io/badge/Consult-Wechat%20Official%20Account-green" alt="wechat"></a>
</p>
  
## :sparkles: Introduction
> The Chrome extension [marie](https://github.com/KKKyrie/marie) for one-click marriage appointment booking in Guangdong Province is now open source. After using Giftie, you might want to consider using [marie](https://github.com/KKKyrie/marie) next :smirk:  

Giftie is the **ultimate solution** for conquering the "**gift-giving dilemma**".  
Using a combination of "custom messages" + "custom gifts" + "lottery draw", it helps the gift recipient (mother/wife/girlfriend) feel your genuine love and heartfelt affection.   

💍I used this little tool and successfully proposed!  
  
Interesting backstory: [Part.1](https://mp.weixin.qq.com/s/7PY3547eXXQEJFVcvEyLww), [Part.2](https://mp.weixin.qq.com/s/fgGW3uhocwk71FhqoCcIBw)  
  
**Note: Runtime environment only supports [Node v14.15.0](https://nodejs.org/dist/v14.15.0/)**
  
<br><br><br>

## :chestnut: Demo
<p align="center"><img alt="demo" width="300" src="./demo.png"></p>
<p align="center">(WeChat access only, please scan QR code with WeChat to view demo)</p>
  
<br><br><br>

## :bookmark: Usage Guide
### :star: Click Star
Click star on GitHub to continuously follow this project (you can quickly find this project through your personal homepage); and it can slightly satisfy the author's vanity, providing motivation for future iterations.
> Fun fact: star is equivalent to follow/bookmark/like.  
  
<br>

### :loop: Fork and Customize Configuration
After forking, you can make customized configurations in this "your own code" repository.  
Giftie puts all customizable variables in the configuration file ```gift.setting.js```, with detailed comments on each field. Here's a quick overview of the key fields:  
```javascript
// Key for controlling global project status, no need to modify unless special circumstances or override usage
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// Whether to allow the other party to re-draw after the lottery ends
// Recommended to keep during debugging, remove when giving to the other party
export const IS_SHOW_RESTART = false;

// Homepage configuration (mainly copy, theme modification not supported yet)
export const homeConfig = {
  // Main title
  title: '520 Gift Lottery',
  // Messages, each item in the array represents a line
  messages: [
    { key: 'a', wording: 'This is the first line of copy', },
    { key: 's', wording: 'This is the second line of copy', },
    { key: 'd', wording: 'And here is the third line of copy', },
  ],
  // Final interpretation rights belong to
  owner: 'XXX',
  // Lottery wheel animation time in milliseconds
  timeout: 5000,
  // Specify winning gift index, starting from 0
  targetGiftIndex: null,
};

// Gift list
// Don't change the field key, just ensure each gift's key field is different
// Put images in public/images, preferably square, otherwise affects visual experience
// name is the full name of the gift; alias is the short name (used for display in lottery grid)
export const gifts = [
  { key: 'q', name: 'Dior Duo Set', alias: 'Dior Duo', image: '/images/1.png',  description: '"Classic charming colors, showcasing luxurious charm"' },
  { key: 'w', name: 'Tencent Video Lifetime VIP', alias: 'VIP', image: '/images/2.png',  description: '"Covering your lifetime VIP"' },
  { key: 'e', name: 'Lancôme Advanced Génifique Set', alias: 'Black Bottle Set', image: '/images/3.png',  description: '"Strong stabilization, fast repair"' },
  { key: 'r', name: '520 Red Envelope', alias: '520', image: '/images/6.png',  description: '"Want to sing a hundred love songs for you"' },
  { key: 't', name: 'Dior Starry Sky Set', alias: 'Dior Starry', image: '/images/5.png',  description: '"Versatile lip makeup, exquisitely crafted"' },
  { key: 'y', name: '1314 Red Envelope', alias: '1314', image: '/images/6.png',  description: '"From now on, I will always be by your side"' },
  { key: 'u', name: 'UR Shopping Voucher: ¥1,000', alias: 'UR', image: '/images/7.png',  description: '"UR! Buy!"' },
  { key: 'i', name: 'Dyson Hair Styling Set', alias: 'Dyson', image: '/images/8.png',  description: '"Meeting all different styling needs"' },
];
```
Note: When configuring gifts, please find gift images yourself. To ensure visual experience, please choose **square** and **compressed** images.  
  
<br>

### :rocket: Deployment
After modifying the configuration and checking that everything is correct, you can go live.  
Just put the built files directly on your own server. If you don't have your own server, we recommend using [Tencent Cloud's Static Website Hosting Service](https://cloud.tencent.com/document/product/876/40270).  
> Tip: This project is a "pure frontend" project, with key states saved in the client (localStorage). After all, it's an MVP product, and surely no one's mother/wife/girlfriend would delete the client state to re-draw (cheat) the lottery, right? Right? If anyone feels this is not secure enough, you can also modify it to save user states in a database.  
  
<br><br><br>

## :flags: Future Roadmap
- Support for multiple fonts
- Support for multiple themes
- Support for custom lottery modes (wheel or nine-grid)
- More flexible copy configuration  
  
:star2: If Giftie helps you, feel free to express your support with a star, thanks~   
If you want to get my new open source projects first-hand, make sure to follow me on GitHub~
  
<br><br><br>

## :star: Star Trends
[![Star History Chart](https://api.star-history.com/svg?repos=kkkyrie/giftie&type=Date)](https://star-history.com/#kkkyrie/giftie&Date)  
Updating in real time...

<br><br><br>

## :green_heart: Finally
Follow my personal original WeChat official account to get more fun and interesting articles/projects first-hand, making frontend development more enjoyable :stuck_out_tongue_closed_eyes:  
<p align="center"><img width="350" alt="" src="https://kyrieliu.cn/images/qrcode2.jpg"></p>