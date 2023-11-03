<template>
  <el-col>
    <el-card shadow="always">
      <div class="flex mb-4">
        <el-icon :size="25" class="text-blue">
          <ChatDotSquare />
        </el-icon>
        <p class="text-blue text-xl ml-3">Idiomas</p>
      </div>
      <div class="grid gap-3 grid-cols-3">
        <div class="flex flex-col items-center" v-for="languaje in languajes">
          <p>{{ languaje.name }}</p>
          <p class="text-xs text-gray">{{ languaje.level }}</p>
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script setup>
import { ChatDotSquare } from "@element-plus/icons-vue";
const { languajes } = defineProps(["languajes"]);
</script>
