<template>
  <el-tabs
    :model-value="activeTab"
    tab-position="top"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="Perfil" name="profile">
      <ProfileTab />
    </el-tab-pane>
    <el-tab-pane label="Vacantes" name="vacancies">
      <VacanciesTab />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import ProfileTab from "../organisms/ProfileTab/index.vue";
import VacanciesTab from "../organisms/VacanciesTab/index.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeTab = ref(router.currentRoute.value.name);

const handleClick = (pane, ev) => {
  router.push(pane.paneName);
};
</script>
