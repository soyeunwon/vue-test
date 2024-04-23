<template>
	<h2>Home view</h2>
	<p>{{ $route.path }}</p>
	<button @click="goAbout">어바웃으로 이동</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goAbout = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
