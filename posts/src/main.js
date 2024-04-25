import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import globalComponents from './plugins/global-components';

const app = createApp(App);

app.use(globalComponents).use(router).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
