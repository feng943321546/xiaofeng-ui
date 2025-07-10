```vue
<template>
  <yf-button type="primary" @click="handleClick('主要按钮')">主要按钮</yf-button>
  <yf-button type="danger" @click="handleClick('危险按钮')">危险按钮</yf-button>
  <yf-button type="default" @click="handleClick('默认按钮')">默认按钮333</yf-button>
</template>
```

<script setup lang="ts">
import { ref } from 'vue'

const handleClick = (nameType: string) => {
  console.log(`${nameType} 被点击了`)
}
</script>
<style scoped>  </style>