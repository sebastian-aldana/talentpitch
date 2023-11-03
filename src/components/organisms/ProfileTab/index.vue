<template>
  <div class="grid gap-4">
    <CompanyOverview />
    <div class="grid gap-3 grid-cols-2">
      <div v-for="interes in state.companyInformation.companyIntereses">
        <Categories v-bind:data="interes" />
      </div>
    </div>
    <div>
      <h2>Lo que buscamos</h2>
      <div></div>
    </div>
    <div class="grid gap-3 grid-cols-2">
      <div v-for="requirement in state.companyInformation.companyRequirements">
        <Categories v-bind:data="requirement" />
      </div>
      <Languajes
        v-bind:languajes="state.companyInformation.companyLanguagesRequirements"
      />
    </div>
    <div>
      <h2>Lo que ofrecemos en la empresa</h2>
      <div></div>
    </div>
    <div class="grid gap-3 grid-cols-2">
      <div v-for="offer in state.companyInformation.companyOffers">
        <Categories v-bind:data="offer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CompanyOverview from "./Suborganism/CompanyOverview.vue";
import Categories from "./Suborganism/Categories.vue";
import Languajes from "./Suborganism/Languajes.vue";
import { useStore } from "vuex";

const { state } = useStore();
</script>
