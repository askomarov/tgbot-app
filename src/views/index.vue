<script setup>
import { ref, onMounted, watch, reactive, onUnmounted } from "vue";
import CatalogItem from "../components/CatalogItem.vue";
const tg = window.Telegram.WebApp;
const name = ref("");
const cart = reactive([]);
const totalCartPrice = ref(0);
// больше нет heroku бесплатного - он теперь платный
const url = "https://tgbotapp.netlify.app/"
// const url = "https://aesbottest.herokuapp.com";
const data = ref({});
const queryId = ref(null);

const onSendData = () => {
  data.value = {
    products: catalog.value,
    totalCartPrice,
    queryId: queryId.value,
  };
  tg.showAlert('done!')
  tg.sendData(data.value)
  tg.showAlert('done!')
  // fetch(`${url}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type:": "application/json",
  //   },
  //   body: JSON.stringify(data.value),
  // });
  // console.log(JSON.stringify(data.value));
  // tg.sendData(JSON.stringify(data.value));
  // return;
};

onMounted(() => {
  name.value = tg.initDataUnsafe?.user?.username;
  queryId.value = tg.initDataUnsafe?.query_id;
  tg.ready();
  tg.MainButton.onClick(onSendData);
});
onUnmounted(() => {
  tg.MainButton.offClick(onSendData);
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
const catalog = reactive([
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    exprience: 100,
    count: 0,
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    exprience: 68,
    count: 0,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    exprience: 33,
    count: 0,
  },
]);
const onAddBtnClick = (payload) => {
  let alredyAdded = catalog.find((item) => item.id === payload.id);
  if (alredyAdded) {
    return (alredyAdded.count += 1);
    // return cart;
  } else {
    return (payload.count = 1);
    // return cart.push(payload);
  }
};
watch(catalog, (newValue) => {
  totalCartPrice.value = catalog.reduce((acc, item) => {
    return (acc += item.exprience * item.count);
  }, 0);
  if (totalCartPrice.value > 0) {
    console.log("show main btn");
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: `Купить ${totalCartPrice.value}`,
    });
  } else {
    console.log("hide main btn");
    tg.MainButton.hide();
  }
});
</script>

<template>
  <div>
    <button @click="onSendData">send data test</button>
    <h1>hello!</h1>
    <p>Cart price: {{ totalCartPrice }}</p>
    <button @click="onClose">close</button>
    <p>Username: {{ name || "default" }}</p>
    <button @click="showMainButton">ShowMainBtn</button>
    <div class="catalog">
      <CatalogItem
        v-for="item in catalog"
        :key="item.id"
        :item="item"
        @onAddBtnClick="onAddBtnClick"
      ></CatalogItem>
    </div>
  </div>
</template>

<style scoped>
</style>
