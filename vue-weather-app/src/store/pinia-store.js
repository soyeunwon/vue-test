import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    weatherData: {
      icon: "",
      temp: 0,
      text: "",
      location: "",
      city: "Seoul",
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
      this.weatherData.city = payload.name;
    },
    onSearchCity(payload) {
      this.weatherData.city = payload;
    },
    toggleButton() {
      this.toggle = !this.toggle;
    },
    async getWeather() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;

      await fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          this.updateWeather(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
