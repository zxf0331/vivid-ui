<template>
  <v-button type="primary" style="margin-left: 16px" @click="drawer = true"> open </v-button>

  <v-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </v-drawer>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>
