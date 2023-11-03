<template>
  <el-card class="box-card" shadow="always">
    <div class="mb-4 grid col-span-1 justify-center company-info">
      <div class="flex">
        <el-avatar :size="80" :src="circleUrl" />
      </div>
      <p class="text-blue text-2xl">A.C. Telecom</p>
      <p class="text-xs">@ac-telecom</p>
      <p class="text-purplelight text-xs">Startup - tecnología</p>
      <p class="text-green text-xs">• Empresa activa</p>
      <div class="flex text-xs">
        <el-icon :size="15" class="mr-2">
          <Position />
        </el-icon>
        <p>Floridablanca - Colombia</p>
      </div>
      <div class="flex text-xs items-center">
        <el-rate v-model="starScore" disabled text-color="#ff9900" />
        <p>(10 reviews)</p>
      </div>
      <div class="text-xm">
        <el-icon :size="20" class="mr-2 text-primary">
          <Link />
        </el-icon>
        <a class="text-primary" href="https://www.actelecom.net/telecom">
          https://www.actelecom.net/telecom
        </a>
      </div>
    </div>
    <el-card class="box-card flex justify-center p-0" shadow="always">
      <img src="../../images/pitch.png" alt="company profile" />
    </el-card>
    <el-card class="box-card flex justify-center my-2" shadow="always">
      <img src="../../images/qr-code.png" alt="company profile" />
    </el-card>
    <div class="w-max">
      <Button text="Compartir Perfil" />
    </div>
    <el-card class="box-card DownloadResumeButton rounded my-4" shadow="always">
      <Button />
      <p class="text-xs ml-3 text-gray">Descargar Resumen</p>
    </el-card>
    <div class="grid grid-cols-1 divide-y-[0.5px] divide-x-reverse">
      <div v-for="data in profileData" class="flex justify-between py-4">
        <div class="flex">
          <el-icon :size="20" class="mr-2">
            <!-- {{ `<${data.icon}/> ` }} -->
          </el-icon>
          <p>{{ data.text }}</p>
        </div>
        <p>{{ data.data }}</p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
const starScore = ref(4);
import Button from "../atoms/Button.vue";
import {
  UserFilled,
  View,
  VideoCamera,
  Document,
  PictureFilled,
  Histogram,
  Position,
  Link,
  Download,
} from "@element-plus/icons-vue";

const profileData = ref([
  { text: "Talentos", icon: UserFilled, data: 20 },
  { text: "Vistas de perfil", icon: View, data: 15 },
  { text: "Pitches Recibidos", icon: VideoCamera, data: 40 },
  { text: "Exhibiciones", icon: Histogram, data: 50 },
  { text: "Vacantes", icon: Document, data: 30 },
  { text: "Contenido", icon: PictureFilled, data: 50 },
]);
</script>

<style>
.company-info * {
  display: flex;
  justify-content: center;
  margin: 2px 0;
}

.DownloadResumeButton .el-card__body {
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
