<template>
	<h2>Home view</h2>
	<button @click="goAbout" class="btn btn-primary my-4">어바웃으로 이동</button>
	<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const items = ref([1, 2, 3, 4]);

const goAbout = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
