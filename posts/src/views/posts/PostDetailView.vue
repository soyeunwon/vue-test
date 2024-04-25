<template>
	<h2>{{ post.title }}</h2>
	<p>{{ post.content }}</p>
	<p class="text-muted">
		{{ $dayjs(post.createdAt).format('YYYY.MM.DD HH:mm:ss') }}
	</p>
	<hr class="my-4" />
	<div class="row g-2">
		<div class="col-auto">
			<button class="btn btn-outline-dark">이전글</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-dark">다음글</button>
		</div>
		<div class="col-auto me-auto"></div>
		<div class="col-auto">
			<button class="btn btn-outline-dark" @click="goListPage">목록</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-primary" @click="goEditPage">수정</button>
		</div>
		<div class="col-auto">
			<button class="btn btn-outline-danger" @click="remove">삭제</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';

const router = useRouter();
// const route = useRoute();

const props = defineProps({
	id: String,
});

// const id = route.params.id;

const post = ref({ title: null, content: null, createdAt: null });

const fetchPost = async () => {
	try {
		const { data } = await getPostById(props.id);
		post.value.title = data.title;
		post.value.content = data.content;
		post.value.createdAt = data.createdAt;
	} catch (error) {
		console.error(error);
	}
};

fetchPost();

const remove = async () => {
	try {
		await deletePost(props.id);
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
