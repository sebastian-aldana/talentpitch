<script setup>
import { watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

watchEffect(() => {
  router.push("/profile");
});
</script>
