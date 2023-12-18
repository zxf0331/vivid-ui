<template>
  <v-space>
    <v-input v-model="value1" placeholder="Please input" leftIcon="m-icon-search"></v-input>
    <v-input
      v-model="value2"
      placeholder="Please input"
      rightIcon="m-icon-search"
      clearable
    ></v-input>
  </v-space>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
</script>

<style lang="less" scoped></style>
