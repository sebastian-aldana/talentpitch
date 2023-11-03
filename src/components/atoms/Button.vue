<template>
  <el-button
    :class="
      type === 'secondary'
        ? 'bg-gray-50 !text-primary'
        : 'bg-primary !text-white'
    "
    >{{ text }}</el-button
  >
</template>

<script setup>
const { text, type } = defineProps(["text", "type"]);
</script>
