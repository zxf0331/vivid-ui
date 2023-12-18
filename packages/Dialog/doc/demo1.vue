<template>
  <v-button type="primary" @click="moduleShow = true"> 打开对话框</v-button>
  <v-Dialog v-model="moduleShow" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span>
        <v-button style="margin-right: 10px" @click="moduleShow = false">Cancel</v-button>
        <v-button type="primary" @click="moduleShow = false">Confirm</v-button>
      </span>
    </template>
  </v-Dialog>
</template>
<script setup>
import { ref } from 'vue'
import Confirm from '../../confirm/index'

const moduleShow = ref(false)

const handleClose = () => {
  Confirm({
    text: 'Are you sure to close this dialog?'
  })
    .then(() => {
      moduleShow.value = false
    })
    .catch()
}
</script>

<style lang="less" scoped></style>
