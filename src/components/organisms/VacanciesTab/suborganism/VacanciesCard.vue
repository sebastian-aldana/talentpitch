<template>
  <el-col>
    <el-card shadow="always">
      <div>
        <img
          class="object-cover w-full h-12 my-6"
          v-bind:src="data.image"
          alt=""
        />
      </div>
      <div class="grid grid-cols-6">
        <div class="col-span-4 grid grid-cols-5 gap-3">
          <p class="col-span-3">Experticia</p>
          <p class="col-span-2">rating</p>
        </div>
        <div class="col-span-2">
          <el-icon :size="25" class="text-blue">
            <Share />
          </el-icon>
        </div>
      </div>
      <div>
        <div class="mb-5">
          <h3 class="text-blue text-lg">{{ data.name }}</h3>
          <el-tag class="mb-3">Creada por organización: Nombre</el-tag>
          <p class="text-gray truncate h-8">
            {{ data.description }}
          </p>
        </div>
        <div
          class="flex justify-around mb-3 border-solid border-0 border-b border-graylight pb-4"
        >
          <div
            v-for="vacancie in vacanciesData"
            class="flex flex-col items-center"
          >
            <p class="bg-pinklight text-white w-10 text-center rounded-md">
              {{ vacancie.data }}
            </p>
            <p>{{ vacancie.name }}</p>
          </div>
        </div>
      </div>
      <Button text="Aplicar a vacante" />
    </el-card>
  </el-col>
</template>

<script setup>
import { Share } from "@element-plus/icons-vue";
import Button from "../../../atoms/Button.vue";
import { ref } from "vue";

const { data } = defineProps(["data"]);

const vacanciesData = ref([
  {
    name: "vistas",
    data: data.views_count,
  },
  {
    name: "comentarios",
    data: Math.floor(Math.random() * 10),
  },
  {
    name: "pitches",
    data: Math.floor(Math.random() * 10),
  },
]);
</script>
