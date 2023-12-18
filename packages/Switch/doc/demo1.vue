<template>
  <v-space inline>
    <v-switch v-model="value1"></v-switch>
    <v-switch v-model="value2" onColor="#13ce66" closeColor="#ff4949"></v-switch>
  </v-space>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(false)
</script>

<style lang="less" scoped></style>
