<template>
  <!-- 加载状态 -->
  <v-space inline>
    <v-button Loading leftIcon="m-icon-loading1"></v-button>
    <v-button type="success" Loading leftIcon="m-icon-loading6">Success</v-button>
    <v-button type="warn" Loading leftIcon="m-icon-loading2">Warn</v-button>
    <v-button type="primary" Loading rightIcon="m-icon-loading3">Primary</v-button>
    <v-button type="danger" Loading rightIcon="m-icon-loading4">Danger</v-button>
  </v-space>
</template>
<script setup></script>
