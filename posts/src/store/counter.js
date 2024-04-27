import { defineStore } from 'pinia';

//arrow function this 스코프 주의

export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 1,
	}),
	getters: {
		doubleCount: state => state.counter * 2,
	},
	actions: {
		increment() {
			this.counter++;
		},
	},
});
