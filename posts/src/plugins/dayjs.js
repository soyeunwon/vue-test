import dayjs from 'dayjs';

export default {
	install(app) {
		app.config.globalProperties.$dayjs = dayjs;
		app.provide('dayjs', dayjs); //셋업함수에서 접근되도록 주입.
	},
};
