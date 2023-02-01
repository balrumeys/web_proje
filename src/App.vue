<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <Header></Header>
  <RouterLink to="/"></RouterLink>

  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>

<style>
@import "./assets/style.css";
</style>

<style>
@import "./assets/main.css";
</style>
<style>
@import "./assets/home.css";
</style>

<style>
@import "./assets/custom.css";
</style>

<style>
@import "./assets/responsive.css";
</style>
