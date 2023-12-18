<template>
  <v-space inline>
    <v-button @click="messageOpen1">success</v-button>
    <v-button @click="messageOpen2">warn</v-button>
    <v-button @click="messageOpen3">error</v-button>
    <v-button @click="messageOpen4">info</v-button>
  </v-space>
</template>
<script setup>
import Message from '../index'

const messageOpen1 = () => {
  Message({
    message: 'this is a success message.',
    type: 'success'
  })
}
const messageOpen2 = () => {
  Message({
    message: 'this is a warn message.',
    type: 'warn'
  })
}
const messageOpen3 = () => {
  Message({
    message: 'this is a error message.',
    type: 'error'
  })
}
const messageOpen4 = () => {
  Message({
    message: 'this is a message.',
    type: 'info'
  })
}
</script>
