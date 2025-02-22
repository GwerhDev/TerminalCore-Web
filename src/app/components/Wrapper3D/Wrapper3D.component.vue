<style scoped lang="scss" src="./Wrapper3D.component.scss" />
<script setup lang="ts">
defineProps<{
  image: string
  alt?: string
}>();

</script>

<template>
  <div class="container">
    <img class="image" :src="image" :alt="alt || ''" />
  </div>
</template>
