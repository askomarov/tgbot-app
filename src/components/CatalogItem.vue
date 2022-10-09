<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="catalog-item">
    <!-- <img class="catalog-item__img" :src="item.img" width="60" height="60" /> -->
    <h3 class="catalog-item__title">{{ item.name }}</h3>
    <p class="catalog-item__descr">
      Name: {{ item.username }}, email: {{ item.email }}
      <span>Count: {{ item.count }}</span>
    </p>
    <div class="catalog-item__price">
      <span
        >Exprience: <b>{{ item.exprience }}</b>
      </span>
    </div>
    <button @click="$emit('onAddBtnClick', item)">Добавить в корзину</button>
  </div>
</template>


<style>
</style>
