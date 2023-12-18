<template>
  <v-input v-model="value1" placeholder="Please input">
    <template #btn>
      <v-button type="primary" leftIcon="m-icon-search">搜索</v-button>
    </template>
  </v-input>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref('')
</script>

<style lang="less" scoped></style>
