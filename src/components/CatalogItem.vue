<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="relative">
    <input type="radio" :id="item.id" name="cars" class="sr-only peer" />
    <label
      @click="$emit('onAddBtnClick', item)"
      :for="item.id"
      class="cursor-pointer shadow-lg rounded-md p-3 peer-checked:bg-black peer-checked:text-white flex flex-col items-center gap-2"
    >
      <img class="catalog-item__img" :src="item.img" width="60" height="60" />
      <h3 class="catalog-item__title font-semibold">{{ item.name }}</h3>
      <div class="catalog-item__price">
        <span
          >Price: <b>{{ item.price }}</b>
        </span>
      </div>
      <div class="px-2 py-1 border rounded-md font-semibold">Выбрать</div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
// asd
</style>
