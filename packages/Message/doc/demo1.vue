<template>
  <v-space inline>
    <v-button @click="messageOpen">消息提示</v-button>
    <v-button @click="messageOpen">VNode</v-button>
  </v-space>
</template>
<script setup>
import Message from '../index.js'
// import { Message } from 'relaxing-ui'

const messageOpen = () => {
  Message({
    message: 'this is a message.',
    type: 'success'
  })
}
</script>

<style lang="less" scoped></style>
