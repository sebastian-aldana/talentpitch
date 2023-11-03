<template>
  <h2>Publicadas Recientemente</h2>
  <el-carousel
    type="card"
    arrow="always"
    height="auto"
    class="carrousel-container"
  >
    <el-carousel-item v-for="vacancie in state.vacancies" :key="item">
      <VacanciesCard v-bind:data="vacancie" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import VacanciesCard from "./suborganism/VacanciesCard.vue";
import { useStore } from "vuex";

const { state } = useStore();
</script>

<style>
.carrousel-container .el-carousel__container {
  height: 600px !important ;
}
</style>
