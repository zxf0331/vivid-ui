<template>
  <Teleport to="body">
    <transition name="fade">
      <div class="v-Dialog-default" v-if="modelValue">
        <div :class="['v-Dialog-contentBox', { center: center }]" :style="DialogStyle">
          <div class="header">
            <slot name="header" :close="closeDialog" :titleClass="'el-dialog__title '"></slot>
            <span class="el-dialog__title">{{ title }}</span>
            <v-button
              v-if="showClose"
              class="close-btn"
              leftIcon="m-icon-close"
              @click="closeDialog"
            ></v-button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
<script setup>
import { computed } from 'vue'
defineOptions({
  name: 'vDialog'
})

const props = defineProps({
  modelValue: Boolean,
  beforeClose: {
    type: Function,
    default: null
  },
  title: String,
  width: String,
  center: Boolean,
  showClose: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits(['update:modleValue'])
const DialogStyle = computed(() => {
  return {
    width: props.width ? `${props.width}` : '50%'
  }
})

// 关闭
const closeDialog = () => {
  if (props.beforeClose) {
    props.beforeClose()

    return
  }
  emits('update:modelValue', false)
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.v-Dialog-default {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99999;

  .v-Dialog-contentBox {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 60px 0 50px 0;
    border-radius: 5px;
    background-color: #fff;

    .header {
      padding: 20px 20px 10px 20px;
      margin-right: 16px;
      .title {
        line-height: 1.5;
        font-size: 18px;
      }

      .el-dialog__title {
        line-height: 24px;
        font-size: 18px;
      }

      .close-btn {
        position: absolute;
        top: 6px;
        right: 0;
        padding: 0;
        width: 54px;
        height: 54px;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
    .body {
      padding: 30px 20px;
      font-size: 14px;
      color: #606266;
    }
    .footer {
      padding: 10px 20px 20px 20px;
      text-align: right;
    }

    &.center {
      text-align: center;
      .title,
      .footer {
        text-align: center;
      }
    }
  }
}
</style>
