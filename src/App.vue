<script setup>
import { onMounted } from "vue";
const tg = window.Telegram.WebApp;
onMounted(() => {
  tg.ready();
});

const onClose = () => {
  tg.close();
};
</script>

<template>
  <div>
    <h1>hello!</h1>
    <button @close="onClose">close</button>
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
