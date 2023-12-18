<template>
  <v-space inline :size="[0, 60]">
    <v-dropdown :options="options" title="hover唤醒" trigger="hover"></v-dropdown>
    <v-dropdown :options="options" title="click唤醒" trigger="click"></v-dropdown>
  </v-space>
</template>
<script setup>
const options = [
  {
    label: '菜单1'
  },
  {
    label: '菜单2'
  },
  {
    label: '菜单3'
  },
  {
    label: '菜单4'
  },
  {
    label: '菜单5'
  }
]
</script>
