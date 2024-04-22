<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import About from "./components/About.vue";
import { ref, onMounted, watch } from "vue";
// import { useStore } from "vuex";
import { useStore } from "./store/pinia-store";
import { storeToRefs } from "pinia";
import VmodelTest from "./components/VmodelTest.vue";
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";

const store = useStore();
const { toggle } = storeToRefs(store);
</script>

<template>
  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <Navbar />
  <div v-if="!toggle">
    <MainComp />
    <!-- <VmodelTest /> -->
  </div>
  <div v-else>
    <About />
  </div>
</template>
