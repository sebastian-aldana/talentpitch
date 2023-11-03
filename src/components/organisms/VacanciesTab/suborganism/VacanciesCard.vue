<template>
  <el-col>
    <el-card shadow="always">
      <div>
        <img
          class="object-cover object-bottom w-full h-13 my-6"
          src="../../../../images/vacancie-image.png"
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
          <h3 class="text-blue text-lg">Lider Ux/Ui</h3>
          <el-tag class="mb-3">Creada por organización: Nombre</el-tag>
          <p class="text-gray">
            ¿Cómo podrías crear un plan de ejecución a seis meses desde tu área
            de conocimiento para generar valor en una organización?
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

const vacanciesData = ref([
  {
    name: "vistas",
    data: 60,
  },
  {
    name: "comentarios",
    data: 60,
  },
  {
    name: "pitches",
    data: 60,
  },
]);

console.log(vacanciesData);
</script>
