<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div>
    <h2>{{ msg }}</h2>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
