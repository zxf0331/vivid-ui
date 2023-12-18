<template>
  <v-space inline>
    <v-button type="primary" @click="moduleShow = true">Open</v-button>
    <v-button type="primary" @click="moduleShow2 = true"> with footer</v-button>
  </v-space>

  <v-drawer v-model="moduleShow" :before-close="handleClose" title="I am the title">
    <span>Hi, there!</span>
  </v-drawer>

  <v-drawer v-model="moduleShow2">
    <template #header>
      <h4>set title by slot</h4>
    </template>

    <template #default>
      <span>Hi, there!</span>
    </template>

    <template #footer>
      <div style="flex: auto">
        <v-button @click="cancelClick" style="margin-right: 10px">Cancel</v-button>
        <v-button @click="confirmClick" type="primary">Confirm</v-button>
      </div>
    </template>
  </v-drawer>
</template>
<script setup>
import { ref } from 'vue'
import Confirm from '../../confirm/index'

const moduleShow = ref(false)
const moduleShow2 = ref(false)

const handleClose = () => {
  Confirm({
    text: 'Are you sure to close this dialog?'
  })
    .then(() => {
      moduleShow.value = false
    })
    .catch()
}

const cancelClick = () => {
  moduleShow2.value = false
}

const confirmClick = () => {
  Confirm({
    text: 'Are you sure to close this drawer?'
  })
    .then(() => {
      moduleShow2.value = false
    })
    .catch()
}
</script>
