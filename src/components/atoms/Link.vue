<template>
  <a href="" @click="onClick">
    {{ props.text }}
  </a>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["text", "route"]);

const router = useRouter();

const onClick = () => {
  router.push(props.route);
};
</script>
