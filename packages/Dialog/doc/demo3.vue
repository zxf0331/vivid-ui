<template>
  <v-button @click="moduleShow = true">Click to open the Dialog</v-button>
  <v-Dialog v-model="moduleShow" title="Warning" width="30%" center>
    <template #footer>
      <span class="dialog-footer">
        <v-button @click="moduleShow = false">Cancel</v-button>
        <v-button type="primary" @click="moduleShow = false"> Confirm </v-button>
      </span>
    </template>
  </v-Dialog>
</template>
<script setup>
import { ref } from 'vue'

const moduleShow = ref(false)
</script>

<style lang="less" scoped>
.dialog-footer button:first-child {
  margin-right: 20px;
}
</style>
