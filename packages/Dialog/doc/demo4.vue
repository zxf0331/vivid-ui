<template>
  <v-button @click="moduleShow = true">Open Dialog with customized header</v-button>
  <v-Dialog v-model="moduleShow" :show-close="false">
    <template #header="{ close, titleClass }">
      <div class="my-header">
        <h4 :id="titleClass">This is a custom header!</h4>
        <v-button type="danger" @click="close" leftIcon="m-icon-close"> Close </v-button>
      </div>
    </template>
    This is dialog content.
  </v-Dialog>
</template>
<script setup>
import { ref } from 'vue'

const moduleShow = ref(false)
</script>

<style lang="less" scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
