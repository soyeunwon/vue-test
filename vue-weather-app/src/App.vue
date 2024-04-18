<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import { ref, onMounted } from "vue";

const weatherData = ref({
  icon: "",
  temp: 0,
  text: "",
  location: "",
  city: "Seoul",
});

const getWeather = () => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=b736d08cae77c92b39322746d23c2c10`;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
    })
    .catch((err) => {
      console.error(err);
    });
};

onMounted(() => {
  getWeather();
});

const onSearchCity = (city) => {
  weatherData.value.city = city;
  getWeather();
};
</script>

<template>
  <Navbar />
  <MainComp :weatherData="weatherData" @onSearchCity="onSearchCity" />
</template>
