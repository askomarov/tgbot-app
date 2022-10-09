<script setup>
import { ref, onMounted } from "vue";
const tg = window.Telegram.WebApp;
const name = ref("");
onMounted(() => {
  name.value = tg.initDataUnsafe?.user?.username;
  tg.ready();
  console.log(name);
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
</style>
