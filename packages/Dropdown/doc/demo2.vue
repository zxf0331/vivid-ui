<template>
  <v-dropdown :options="options"></v-dropdown>
</template>
<script setup>
const options = [
  {
    label: '菜单1',
    icon: 'm-icon-file'
  },
  {
    label: '菜单2',
    icon: 'm-icon-keyboard-9'
  },
  {
    label: '菜单3',
    icon: 'm-icon-link'
  },
  {
    label: '菜单4',
    icon: 'm-icon-file'
  },
  {
    label: '菜单5',
    icon: 'm-icon-good'
  }
]
</script>
