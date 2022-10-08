<script setup>
import { ref, onMounted } from "vue";
const name = ref('')
onMounted(() => {
  const tg = ref(window.Telegram.WebApp);
  const name = tg.value.initDataUnsafe?.user?.username;
  tg.value.ready();
  console.log(tg.value);
});

const onClose = () => {
  tg.close();
};
const showMainButton = () => {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
  }
};
</script>

<template>
  <div>
    <h1>hello!</h1>
    <button @click="onClose">close</button>
    <p>Username: {{ name || "default" }}</p>
    <button @click="showMainButton">ShowMainBtn</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
