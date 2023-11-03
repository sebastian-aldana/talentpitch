<template>
  <el-button
    :class="
      props.type === 'secondary'
        ? 'bg-gray-50 !text-primary'
        : 'bg-primary !text-white'
    "
    @click="onClickButton"
    >{{ props.text }}</el-button
  >
</template>

<script setup>
const props = defineProps(["text", "type", "action"]);
const emit = defineEmits(["click"]);
const onClickButton = () => {
  emit("click");
};
</script>
