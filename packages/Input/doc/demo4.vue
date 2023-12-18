<template>
  <v-input v-model="value1" placeholder="Please input" show-password></v-input>
</template>
<script setup>
import { ref } from 'vue'

const value1 = ref('')
</script>

<style lang="less" scoped></style>
