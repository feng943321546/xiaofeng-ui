
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Editqwqwewqewqewqe1111
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
