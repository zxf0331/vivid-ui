<template>
  <v-space :size="[0, 60]" inline>
    <v-badge value="90" type="primary">
      <v-button>默认</v-button>
    </v-badge>
    <v-badge value="100" type="success">
      <v-button>成功</v-button>
    </v-badge>
    <v-badge value="99+" type="warn">
      <v-button>危险</v-button>
    </v-badge>
    <v-badge value="3">
      <v-button>警告</v-button>
    </v-badge>
    <v-badge dot>
      <v-button>小红点</v-button>
    </v-badge>
  </v-space>
</template>
<script setup></script>
