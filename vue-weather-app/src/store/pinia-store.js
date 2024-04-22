import { defineStore } from "pinia";
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";

export const useStore = defineStore("main", {
  state: () => ({
    weatherData: {
      icon: "",
      temp: 0,
      text: "",
      location: "",
      city: "seoul",
    },
    toggle: false,
  }),
  actions: {
    updateWeather(payload) {
      this.weatherData = payload;
      this.weatherData.icon = payload.weather[0].icon;
      this.weatherData.temp = payload.main.temp;
      this.weatherData.text = payload.weather[0].description;
      this.weatherData.location = payload.sys.country;
      this.weatherData.city = payload.name.toLowerCase();
    },
    onSearchCity(payload) {
      this.weatherData.city = payload.toLowerCase();
    },
    toggleButton() {
      this.toggle = !this.toggle;
    },
    async fetchWeather() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;

      await fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          this.updateWeather(data);
          return;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
