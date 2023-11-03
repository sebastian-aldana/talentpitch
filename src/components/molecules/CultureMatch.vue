<template>
  <div class="grid grid-cols-12 max-h-7 items-center h-7 mb-6">
    <div class="col-span-9 grid w-full grid-cols-8">
      <p class="text-purplelight col-span-2">match con la cultura</p>
      <el-progress :percentage="50" class="w-full col-span-6" color="#8BC34A" />
    </div>
    <div class="col-span-3 grid grid-cols-2">
      <Button text="Enviar Pitch" />
      <Button text="Seguir" type="secondary" />
    </div>
  </div>
</template>

<script setup>
import Button from "../atoms/Button.vue";
</script>
