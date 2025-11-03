// 主应用逻辑
class MysteryGiftApp {
  constructor() {
    this.isPlaying = false;
    this.popupCount = 0;
    this.maxPopups = 400;
    this.popupInterval = null;
    // this.audio = document.getElementById('bgMusic');
    this.startBackdrop = document.getElementById('start-backdrop');
    this.confirmBtn = document.getElementById('confirm-btn');
    this.popupLayer = document.getElementById('popup-layer');
    this.floatBalls = document.getElementById('float-balls');
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    // this.setupAudio();
  }
  
  bindEvents() {
    // 确认按钮点击事件
    this.confirmBtn.addEventListener('click', () => {
      this.startExperience();
    });
    
    // 键盘事件 - 回车键确认
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !this.isPlaying) {
        this.startExperience();
      }
    });
    
    // 窗口大小变化时重新布局
    window.addEventListener('resize', Utils.debounce(() => {
      this.repositionPopups();
    }, 250));
  }
  
  setupAudio() {
    // 设置音频属性
    this.audio.volume = 0.8;
    this.audio.loop = true;
    
    // 音频加载完成事件
    this.audio.addEventListener('canplaythrough', () => {
      console.log('音频加载完成');
    });
    
    // 音频错误处理
    this.audio.addEventListener('error', (e) => {
      console.error('音频加载错误:', e);
    });
    
    // 音频结束事件
    this.audio.addEventListener('ended', () => {
      this.showCompletionMessage();
    });
  }
  
  startExperience() {
    this.isPlaying = true;
    
    // 隐藏开始模态框
    this.startBackdrop.style.display = 'none';
    this.startBackdrop.setAttribute('aria-hidden', 'true');
    
    // 显示浮动小球
    this.floatBalls.style.display = 'flex';
    
    // 开始播放音乐
    // this.playMusic();
    
    // 开始弹窗
    this.startPopups();
  }
  
  playMusic() {
    const playPromise = this.audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('自动播放被阻止，需要用户交互');
        
        // 用户交互后播放
        const startOnInteraction = () => {
          this.audio.play().catch(e => {
            console.error('播放失败:', e);
          });
          document.removeEventListener('click', startOnInteraction);
          document.removeEventListener('keydown', startOnInteraction);
        };
        
        document.addEventListener('click', startOnInteraction, { once: true });
        document.addEventListener('keydown', startOnInteraction, { once: true });
      });
    }
  }
  
  startPopups() {
    // 立即创建第一个弹窗
    this.createPopup();
    
    // 设置定时器持续创建弹窗
    this.popupInterval = setInterval(() => {
      if (this.popupCount < this.maxPopups && this.isPlaying) {
        this.createPopup();
      } else {
        this.stopPopups();
        if (this.popupCount >= this.maxPopups) {
          this.showCompletionMessage();
        }
      }
    }, 300);
  }
  
  createPopup() {
    if (this.popupCount >= this.maxPopups) return;
    
    const popup = document.createElement('div');
    popup.className = 'popup';
    
    // 随机位置
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const popupWidth = 200;
    const popupHeight = 80;
    
    // 允许叠加，直接随机位置
    const x = Utils.random(0, screenWidth - popupWidth);
    const y = Utils.random(0, screenHeight - popupHeight);
    
    // 随机内容和颜色
    const tip = Utils.randomTip();
    const bgColor = Utils.randomColor();
    
    popup.style.left = x + 'px';
    popup.style.top = y + 'px';
    popup.style.backgroundColor = bgColor;
    
    popup.innerHTML = `
      <div class="popup-content">${tip}</div>
    `;
    
    // 点击移除
    popup.addEventListener('click', () => {
      this.removePopup(popup);
    });
    
    this.popupLayer.appendChild(popup);
    this.popupCount++;
    
    // 移除自动消失的定时器，弹窗将永久显示
  }
  
  removePopup(popup) {
    popup.style.animation = 'popupFadeOut 0.5s ease-out forwards';
    setTimeout(() => {
      if (popup.parentNode) {
        popup.parentNode.removeChild(popup);
        this.popupCount--;
      }
    }, 500);
  }
  
  // 不再需要重叠检测，允许弹窗叠加显示
  
  repositionPopups() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      const rect = popup.getBoundingClientRect();
      if (rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
        // 重新定位超出边界的弹窗
        popup.style.left = Utils.random(0, window.innerWidth - rect.width) + 'px';
        popup.style.top = Utils.random(0, window.innerHeight - rect.height) + 'px';
      }
    });
  }
  
  stopPopups() {
    if (this.popupInterval) {
      clearInterval(this.popupInterval);
      this.popupInterval = null;
    }
  }
  
  showCompletionMessage() {
    const message = document.createElement('div');
    message.className = 'popup completion-message';
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      font-size: 2rem;
      z-index: 1002;
      max-width: 80%;
    `;
    
    message.innerHTML = `
      <div>神秘礼物体验完成！</div>
      <div style="font-size: 1rem; margin-top: 20px;">感谢您的参与</div>
    `;
    
    document.body.appendChild(message);
    
    // 点击关闭
    message.addEventListener('click', () => {
      message.style.animation = 'popupFadeOut 0.5s ease-out forwards';
      setTimeout(() => {
        if (message.parentNode) {
          message.parentNode.removeChild(message);
        }
      }, 500);
    });
  }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  new MysteryGiftApp();
});

// 添加弹窗淡出动画
const style = document.createElement('style');
style.textContent = `
  @keyframes popupFadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;
document.head.appendChild(style);