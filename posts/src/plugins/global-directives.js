import focus from '@/directives/focus';

export default {
	install(app) {
		app.directive('focus', focus);
		//여러개
	},
};
