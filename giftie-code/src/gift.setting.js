
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
  NEXT_DATE: 'GIFT_NEXT_DATE',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是第一行文案', },
    { key: 's', wording: '这是第二行文案', },
    { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: 'XXX',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-7
  targetGiftIndex: 7,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/img 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '1元红包', alias: '1', image: 'img/6.png',  description: '一心一意只为你' },
  { key: 'w', name: '50元红包', alias: '50', image: 'img/6.png',  description: '来50元，够吃一顿了' },
  { key: 'e', name: '88元红包', alias: '88', image: 'img/6.png',  description: '小小的发一下' },
  { key: 'r', name: '520红包', alias: '520', image: 'img/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: '1111红包', alias: '1111', image: 'img/6.png',  description: '“一生一世只选择你”' },
  { key: 'y', name: '1314红包', alias: '1314', image: 'img/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: '8888红包', alias: '8888', image: 'img/6.png',  description: '“发发发”' },
  { key: 'i', name: '谢谢惠顾', alias: '谢谢惠顾', image: 'img/780.jpg',  description: '也许这次运气不太好，下次再试试吧' },
];
