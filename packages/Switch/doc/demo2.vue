<template>
  <v-switch v-model="value1" disabled></v-switch>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref(false)
</script>

<style lang="less" scoped></style>
