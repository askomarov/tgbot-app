<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
const tg = window.Telegram.WebApp;
const isFormEmpty = ref(true);
const name = ref(null);
const country = ref(null);
const data = ref({});
const date = ref()

const onSendData = () => {
  data.value = {
    name : name.value,
    country: country.value,
    date: date.value
  };
  console.log(JSON.stringify(data.value));
  tg.sendData(JSON.stringify(data.value));
  return;
};

onMounted(() => {
  tg.ready();
  tg.MainButton.setParams({
    text: "Отправить данные",
  });
  tg.MainButton.hide();
  tg.MainButton.onClick(onSendData);
});
onUnmounted(() => {
  tg.MainButton.offClick(onSendData);
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
      <label>
        Введите имя:
        <input type="text" name="name" id="name" v-model="name" />
      </label>
      <select name="country" id="country" v-model="country">
        <option value="serbia">Сербия</option>
        <option value="russia">Россия</option>
      </select>
      <input v-model="date" type="date" name="date" id="date">
    </form>
    <!-- <HelloWorld msg="Tg bot" /> -->
    <p>Form empty: {{ isFormEmpty }}</p>
    <p>{{ name || "null" }}</p>
    <p>{{ country || "null" }}</p>
    <p>{{ date || "null" }}</p>
  </div>
</template>
<style>
</style>
