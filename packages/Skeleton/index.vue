<template>
  <div class="v-skeleton" :class="{ 'is-animated': animated }">
    <slot name="template">
      <v-skeleton-item
        v-for="(item, index) in rows + 1"
        :key="index"
        :class="[{ 'is-first': index === 0 }, { 'is-last': index === rows }]"
        :variant="variant"
      />
    </slot>
  </div>
</template>
<script setup>
defineOptions({
  name: 'vSkeleton'
})

defineProps({
  variant: String,
  rows: {
    type: Number,
    default: 3
  },
  animated: Boolean
})
</script>

<style lang="less" scoped>
.v-skeleton {
  width: 100%;

  .is-first {
    width: 33%;
  }
  .is-last {
    width: 61%;
  }
}

.is-animated {
  .v-skeleton-item {
    animation: plus-bg 1.4s ease infinite;
  }

  @keyframes plus-bg {
    0% {
      background-color: #f0f2f5;
    }

    50% {
      background-color: #e6e8eb;
    }

    100% {
      background-color: #f0f2f5;
    }
  }
}
</style>
