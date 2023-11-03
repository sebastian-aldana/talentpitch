<template>
  <el-col>
    <el-card shadow="always">
      <div class="flex">
        <el-icon :size="25" class="text-blue">
          <Message />
        </el-icon>
        <p class="text-blue text-xl ml-3">{{ data.title }}</p>
      </div>
      <div class="flex gap-2 mt-4">
        <el-tag round v-for="tag in data.tags">
          {{ tag }}
        </el-tag>
      </div>
    </el-card>
  </el-col>
</template>

<script setup>
import { Message } from "@element-plus/icons-vue";

const { data } = defineProps(["data"]);
</script>
