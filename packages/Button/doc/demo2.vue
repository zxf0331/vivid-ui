<template>
  <!-- 禁用按钮 -->
  <div class="box">
    <v-space inline>
      <v-button disabled>Default</v-button>
      <v-button type="success" disabled>Success</v-button>
      <v-button type="warn" disabled>Warn</v-button>
      <v-button type="primary" disabled>Primary</v-button>
      <v-button type="danger" disabled>Danger</v-button>
    </v-space>

    <v-space inline>
      <v-button plain disabled>Default</v-button>
      <v-button type="success" plain disabled>Success</v-button>
      <v-button type="warn" plain disabled>Warn</v-button>
      <v-button type="primary" plain disabled>Primary</v-button>
      <v-button type="danger" plain disabled>Danger</v-button>
    </v-space>
  </div>
</template>
