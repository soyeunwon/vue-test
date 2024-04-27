<template>
	<h2>About view</h2>
	<p>{{ route }}</p>
	<button @click="$router.push('/')">Home 으로 이동</button>
	<h2>Store</h2>
	<p>카운터: {{ counter }}</p>
	<p>더블카운트: {{ doubleCount }}</p>
	<button @click="increment()">클릭</button>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();

const store = useCounterStore(); //reative로 래핑된 객체임

const { counter, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>

<style lang="scss" scoped></style>
import { storeToRefs } from 'pinia';
