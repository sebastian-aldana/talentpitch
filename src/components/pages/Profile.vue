<template>
  <Header />
  <div class="grid grid-cols-12">
    <CompanyProfile class="col-span-3" />
    <div class="col-span-9 m-6">
      <CultureMatch />
      <CompanyTabs />
    </div>
  </div>
</template>

<script setup>
import Header from "../organisms/Header.vue";
import CultureMatch from "../molecules/CultureMatch.vue";
import CompanyProfile from "../organisms/CompanyProfile.vue";
import CompanyTabs from "../templates/CompanyTabs.vue";
</script>
