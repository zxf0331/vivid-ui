<template>
  <v-space inline>
    <v-button @click="add">Add Item</v-button>
    <v-button @click="onDelete">Delete Item</v-button>
  </v-space>
  <v-scrollbar maxHeight="400">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </v-scrollbar>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style lang="less" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: var(--primary-color);
}
</style>
