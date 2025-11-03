<template>
  <div class="gift-component full-screen">
    <h1>{{ giftTips }}</h1>
    <div class="gift-image-area">
      <img :src="giftImageUrl" alt="" class="gift-image">
    </div>
    <h3>{{ giftName }}</h3>
    <div v-if="isShowRestart" class="replay-button" @click="replay">重新体验</div>
    <div>下次尝试的时间是：{{ nextDate }}</div>
  </div>
</template>

<script>
import { store } from 'xijs';
import { GLOBAL_KEYS, gifts, IS_SHOW_RESTART } from '../gift.setting.js';
export default {
  name: 'Gift',
  data() {
    return {
      giftTips: '恭喜你抽中了',
      giftName: '',
      giftImageUrl: '',
      isShowRestart: false,
      nextDate: new Date().toLocaleString(),
    }
  },
  methods: {
    getLocalGift() {
   
      const giftName = store.get(GLOBAL_KEYS.NAME_KEY).value;
      const giftImageUrl = store.get(GLOBAL_KEYS.IMAGE_KEY).value;
      const nextDate = Number(store.get(GLOBAL_KEYS.NEXT_DATE).value);
      this.nextDate = new Date(nextDate).toLocaleString();
      this.giftName = giftName;
      this.giftImageUrl = giftImageUrl;
      this.isShowRestart = IS_SHOW_RESTART;
      if (giftName == gifts[7].name) {
        this.giftTips = gifts[7].description;
      }
    },
    replay() {
      store.remove(GLOBAL_KEYS.EXIST_KEY);
      location.replace('/');
    },
  },
  mounted() {
    this.getLocalGift();
  },
}
</script>

<style scoped>
.gift-component {
  background-color: #fad3e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gift-image-area {
  margin: 30px 0 15px 0;
  width: 240px;
  height: 240px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gift-image {
  display: block;
  width: 220px;
  height: 220px;
}
.replay-button {
  text-align: center;
  position: fixed;
  bottom: 20px;
  width: 100%;
}
</style>