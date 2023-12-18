<template>
  <v-skeleton style="width: 240px">
    <template #template>
      <v-skeleton-item variant="image">
        <i class="m-icon-picture" style="font-size: 50px; color: #dcdfe6"></i>
      </v-skeleton-item>
      <v-skeleton-item variant="p" style="width: 50%" />
      <div style="display: flex; align-items: center; justify-items: space-between">
        <v-skeleton-item variant="text" style="margin-right: 16px"></v-skeleton-item>
        <v-skeleton-item variant="text" style="width: 30%"></v-skeleton-item>
      </div>
    </template>
  </v-skeleton>
</template>
<script setup></script>

<style lang="less" scoped></style>
