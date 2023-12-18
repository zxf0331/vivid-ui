<template>
  <v-button @click="moduleShow = true"> open a Table nested Dialog</v-button>
  <v-Dialog v-model="moduleShow" title="Shipping address">
    <v-table :data="tableData"></v-table>
  </v-Dialog>
</template>
<script setup>
import { ref } from 'vue'

const moduleShow = ref(false)

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

<style lang="less" scoped></style>
