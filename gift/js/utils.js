// 基础工具函数
const Utils = {
  // 随机数生成
  random: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  // 随机颜色生成
  randomColor: function() {
    const colors = [
      'lightpink', 'skyblue', 'lightgreen', 'lavender',
      'lightyellow', 'plum', 'coral', 'bisque', 'aquamarine',
      'mistyrose', 'honeydew', 'lavenderblush', 'oldlace'
    ];
    return colors[this.random(0, colors.length - 1)];
  },
  
  // 温馨提示语
  tips: [
    '多喝水哦~', '保持微笑呀', '每天都要元气满满',
    '记得吃水果', '保持好心情', '好好爱自己', '我想你了',
    '梦想成真', '期待下一次见面', '金榜题名',
    '顺顺利利', '早点休息', '愿所有烦恼都消失',
    '别熬夜', '今天过得开心嘛', '天冷了，多穿衣服'
  ],
  
  // 随机提示
  randomTip: function() {
    return this.tips[this.random(0, this.tips.length - 1)];
  },
  
  // 防抖函数
  debounce: function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};