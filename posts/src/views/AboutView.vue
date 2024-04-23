<template>
	<h2>About view</h2>
	<p>{{ route }}</p>
	<button @click="$router.push('/')">Home 으로 이동</button>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route);
</script>

<style lang="scss" scoped></style>
