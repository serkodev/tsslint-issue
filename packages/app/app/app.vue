<script setup lang="ts">
useFoo((e) => {
  if (e) {
    // expected tsslint error here
    console.log(e.dataTransfer)
  }
})
</script>

<template>
  <div>
    app
  </div>
</template>
