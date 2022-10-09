<script setup>
import { ref, onMounted, computed } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
const tg = window.Telegram.WebApp;
const isFormEmpty = ref(true);
const name = ref("");
const country = ref("");
const form = ref(null);

onMounted(() => {
  tg.ready();
  tg.MainButton.setParams({
    text: "Отправить данные",
  });
});
computed(() => {});
const onFormChange = () => {
  if (name || country) {
    isFormEmpty.value = false;
    tg.MainButton.show();
  } else {
    tg.MainButton.hide();
  }
};
</script>
<template>
  <div>
    <h1>Form page</h1>
    <HelloWorld msg="Tg bot" />
    <form @change="onFormChange" ref="form">
      <label for="name">
        Введите имя:
        <input type="text" name="name" id="name" v-model="name" />
      </label>
      <select name="country" id="country" v-model="country">
        <option value="serbia">Сербия</option>
        <option value="russia">Россия</option>
      </select>
    </form>
  </div>
</template>
<style>
</style>
