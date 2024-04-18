<template>
  <div class="container">
    <SearchBar />
    <WeatherInfo />
  </div>
</template>

<script setup>
import WeatherInfo from "./WeatherInfo.vue";
import SearchBar from "./SearchBar.vue";

//vuex 전역 관리로 바꿈
// const emits = defineEmits(["onSearchCity"]);

// const onSearchCity = (city) => {
//   emits("onSearchCity", city);
// };
</script>

<style scoped lang="scss"></style>
