<template>
  <h2>Publicadas Recientemente</h2>
  <el-carousel
    type="card"
    arrow="always"
    height="auto"
    class="carrousel-container"
  >
    <el-carousel-item v-for="item in 6" :key="item">
      <VacanciesCard />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import VacanciesCard from "./suborganism/VacanciesCard.vue";
</script>

<style>
.carrousel-container .el-carousel__container {
  height: 600px !important ;
}
</style>
