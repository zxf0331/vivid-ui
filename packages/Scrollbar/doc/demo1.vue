<template>
  <v-scrollbar height="400">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </v-scrollbar>
</template>
<script setup></script>

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
