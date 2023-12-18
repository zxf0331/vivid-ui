<template>
  <v-tabs v-model="activeName">
    <v-tab-pane label="User" name="first">User</v-tab-pane>
    <v-tab-pane label="Config" name="second">Config</v-tab-pane>
    <v-tab-pane label="Role" name="third">Role</v-tab-pane>
    <v-tab-pane label="Task" name="fourth">Task</v-tab-pane>
  </v-tabs>
</template>
<script setup>
import { ref } from 'vue'

const activeName = ref('first')
</script>

<style lang="less" scoped></style>
