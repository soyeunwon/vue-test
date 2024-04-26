<template>
	<h2>Home view</h2>
	<button @click="goAbout" class="btn btn-primary my-4">어바웃으로 이동</button>
	<hr class="my-4" />
	<AppGrid :items="items" v-slot="{ item }">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>

	{{ position }}
	{{ x }} {{ y }}
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([1, 2, 3, 4]);

const position = reactive({
	x: 100,
	y: 1000,
});

// const x = toRef(position, 'x');
const { x, y } = toRefs(position);

const goAbout = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
