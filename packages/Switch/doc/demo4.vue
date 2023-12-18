<template>
  <v-space inline>
    <v-switch v-model="value1" closeText="关闭" onText="开启" textAlign="left"></v-switch>
    <v-switch v-model="value2" textAlign="right"></v-switch>
  </v-space>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
</script>

<style lang="less" scoped></style>
