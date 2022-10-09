<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
const tg = window.Telegram.WebApp;
const isFormEmpty = ref(true);
const name = ref(null);
const country = ref(null);
const data = ref({});

const onSendData = () => {
  data.value = {
    name,
    country,
  };
  console.log(JSON.stringify(data.value));
  Telegram.WebApp.sendData(JSON.stringify(data.value));
  return;
};

onMounted(() => {
  Telegram.WebApp.ready();
  Telegram.WebApp.MainButton.setParams({
    text: "Отправить данные",
  });
  Telegram.WebApp.onEvent("MainButtonClicked", onSendData);
});
onUnmounted(() => {
  tg.offEvent("MainButtonClicked", onSendData);
});
const onFormChange = () => {
  if (name.value && country.value) {
    isFormEmpty.value = false;
    tg.MainButton.show();
  } else {
    isFormEmpty.value = true;
    tg.MainButton.hide();
  }
};
</script>
<template>
  <div>
    <h1>Form page</h1>
    <form @change="onFormChange">
      <label for="name">
        Введите имя:
        <input type="text" name="name" id="name" v-model="name" />
      </label>
      <select name="country" id="country" v-model="country">
        <option value="serbia">Сербия</option>
        <option value="russia">Россия</option>
      </select>
    </form>
    <HelloWorld msg="Tg bot" />
    <p>Form empty: {{ isFormEmpty }}</p>
    <p>{{ name || "null" }}</p>
    <p>{{ country || "null" }}</p>
  </div>
</template>
<style>
</style>
