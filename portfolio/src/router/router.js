import { createWebHistory, createRouter } from "vue-router";
import AboutVue from "../components/About.vue";
import PortfolioVue from "../components/Portfolio.vue";
import TitleVue from "../components/Title.vue";
import DetailVue from "../components/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TitleVue },
    { path: "/about", component: AboutVue },
    { path: "/portfolio", component: PortfolioVue },
    { path: "/detail/:id", component: DetailVue },
  ],
});

export default router;
