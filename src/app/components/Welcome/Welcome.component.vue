<style scoped lang="scss" src="./Welcome.component.scss" />
<script setup lang="ts">

import Wrapper3D from "../Wrapper3D/Wrapper3D.component.vue";
/* import { PrimaryButton } from "./Buttons/PrimaryButton";
import { SecondaryButton } from "./Buttons/SecondaryButton";
 */
import logo from "../../../assets/svg/terminalcore-logo.svg";

</script>

<template>
  <div class="welcomeCont">
    <ul class="welcomeText">
      <div class="textAlign">
        <div>
          <h3>Llevamos el desarrollo de software</h3>
        </div>
        <div>
          <h1>Al siguiente nivel</h1>
        </div>
        <div>
          <h4>Soluciones innovadoras, abiertas y colaborativas que potencien a las personas en un mundo digital en
            constante cambio.</h4>
        </div>
        <div class="buttonContainer">
<!--           <PrimaryButton text="Conoce nuestros productos" />

          <SecondaryButton href="mailto:terminalcore.conhexa@gmail.com" text="Contactar" />
 -->        </div>
      </div>
      <div class="wrapper">
        <Wrapper3D :image="logo" :alt="'Logo Terminal Core'" />
      </div>
    </ul>
  </div>
</template>
