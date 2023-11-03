<template>
  <div class="w-full h-16 bg-blue grid grid-cols-12">
    <a
      href="/"
      class="col-span-3 flex-auto flex justify-center items-center header-links"
    >
      <p>TalentPitch</p>
    </a>
    <ul class="col-span-5 flex-auto grid grid-cols-4 items-center">
      <li class="header-links">
        <Link text="Conectate" route="connect" />
      </li>
      <li class="header-links">
        <Link text="Mi muros" route="wall" />
      </li>
      <li class="header-links">
        <Link text="Mi Lista" route="list" />
      </li>
      <li class="header-links">
        <Link text="Aprende" route="learn" />
      </li>
    </ul>
    <div class="col-span-3 flex justify-between items-center">
      <Button text="Comenzar" @click="onBeginButton" />
      <el-icon :size="25" class="text-graylight">
        <Message />
      </el-icon>
      <el-icon :size="25" class="text-graylight">
        <Notification />
      </el-icon>
      <el-icon :size="25" class="text-graylight">
        <User />
      </el-icon>
    </div>
  </div>
  <img class="hero-img" src="../../images/hero.png" />
</template>

<script setup>
import { Message, Notification, User } from "@element-plus/icons-vue";
import Button from "../atoms/Button.vue";
import Link from "../atoms/Link.vue";

const onBeginButton = () => {
  window.location.replace("https://www.talentpitch.co/login");
};
</script>

<style>
.hero-img {
  width: 100vw;
}
</style>
