<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import About from "./components/About.vue";
import { ref, onMounted } from "vue";
// import { useStore } from "vuex";
import { useStore } from "./store/pinia-store";
import { storeToRefs } from "pinia";

const store = useStore();
const { toggle } = storeToRefs(store);

onMounted(() => {
  // store.dispatch("getWeather");
  store.getWeather();
});
</script>

<template>
  <!-- <button @click="$store.dispatch('getWeather')">getWeather</button> -->
  <Navbar />
  <div v-if="!toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>
