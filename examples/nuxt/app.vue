<script lang="ts" setup>
const store = useCountStore()
</script>

<template>
  <div>
    {{ store.count }}
    <button @click="store.add">
      Add
    </button>
  </div>
</template>
