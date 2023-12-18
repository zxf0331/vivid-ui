<template>
  <div :class="['v-skeleton-item', `v-skeleton-${variant}`]">
    <slot></slot>
  </div>
</template>
<script setup>
defineOptions({
  name: 'vSkeletonItem'
})

defineProps({
  variant: {
    type: String,
    default: 'p'
  }
})
</script>

<style lang="less" scoped>
.v-skeleton-item {
  display: inline-block;
  width: 100%;
  height: 16px;
  margin-top: 16px;
  background-color: #f0f2f5;
  border-radius: 4px;
}

.v-skeleton-circle {
  width: var(--v-skeleton-circle-size);
  height: var(--v-skeleton-circle-size);
  line-height: var(--v-skeleton-circle-size);
  border-radius: 50%;
}

.v-skeleton-image {
  display: flex;
  width: 240px;
  height: 240px;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.v-skeleton-text {
  width: 100%;
  height: 13px;
}
</style>
