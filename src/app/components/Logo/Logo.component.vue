<style scoped lang="scss" src="./Logo.component.scss" />
<script setup lang="ts">
import { closeMenu } from '../../../helpers/menu';

defineProps({
  width: String
});

</script>

<template>
  <router-link class="d-flex align-cent logotype" to='/'>
    <img src="../../../assets/svg/terminalcore-logo.svg" @click="closeMenu()" :width="width || '50'" alt="">
    <p class="type">La Ruina</p>
  </router-link>
</template>