<template>
  <v-space inline>
    <v-button text @click="table = true">Open Drawer with nested table</v-button>
    <!-- <v-button text @click="dialog = true">Open Drawer with nested form</v-button> -->
  </v-space>

  <v-drawer v-model="table" title="I have a nested table inside!" size="50%">
    <r-table :data="tableData"></r-table>
  </v-drawer>
</template>

<script setup>
import { ref } from 'vue'

const table = ref(false)
const tableData = [
  {
    Date: '2016-05-03',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  },
  {
    Date: '2016-05-02',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  },
  {
    Date: '2016-05-04',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  },
  {
    Date: '2016-05-01',
    Name: 'Tom',
    Address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
