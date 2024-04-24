<template>
	<h2>게시글 등록</h2>
	<hr class="my-4" />
	<PostForm
		@submit.prevent="save"
		v-model:title="form.title"
		v-model:content="form.content"
	>
		<template #actions>
			<button
				type="button"
				class="btn btn-outline-dark me-2"
				@click="goListPage"
			>
				목록
			</button>
			<button class="btn btn-primary">저장</button>
		</template>
	</PostForm>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const route = useRoute();

const id = route.params.id;

const form = ref({ title: null, content: null });

const save = () => {
	console.log('저장! form.value.....', form.value);
	try {
		const data = { ...form.value, createdAt: Date.now() };
		createPost(data);

		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};

const goListPage = () => router.push({ name: 'PostList', params: { id } });
</script>

<style lang="scss" scoped></style>
