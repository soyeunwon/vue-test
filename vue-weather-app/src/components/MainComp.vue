<template>
  <div class="container">
    <SearchBar @onSearchCity="onSearchCity" />
    <WeatherInfo :weatherData="props.weatherData" />
  </div>
</template>

<script setup>
import WeatherInfo from "./WeatherInfo.vue";
import SearchBar from "./SearchBar.vue";

const props = defineProps({
  weatherData: Object,
});

const emits = defineEmits(["onSearchCity"]);

const onSearchCity = (city) => {
  emits("onSearchCity", city);
};
</script>

<style scoped lang="scss"></style>
