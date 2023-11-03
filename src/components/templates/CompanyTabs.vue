<template>
  <el-tabs tab-position="top" class="demo-tabs">
    <el-tab-pane label="Perfil">
      <ProfileTab />
    </el-tab-pane>
    <el-tab-pane label="Vacantes">
      <VacanciesTab />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ProfileTab from "../organisms/ProfileTab/index.vue";
import VacanciesTab from "../organisms/VacanciesTab/index.vue";
</script>
