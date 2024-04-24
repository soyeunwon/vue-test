<template>
	<h2>게시글 수정</h2>
	<hr class="my-4" />
	<PostForm
		@submit.prevent="edit"
		v-model:title="form.title"
		v-model:content="form.content"
	>
		<template #actions>
			<button
				type="button"
				class="btn btn-outline-danger me-2"
				@click="goDetailPage"
			>
				취소
			</button>
			<button class="btn btn-primary">수정</button>
		</template>
	</PostForm>
	<AppAlert :show="showAlert" :message="alertMessage" :type="alertTpye" />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const router = useRouter();
const route = useRoute();

const id = route.params.id;

const form = ref({ title: null, content: null });

const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		form.value.title = data.title;
		form.value.content = data.content;
	} catch (error) {
		vAlert('네트워크 오류');
		console.error(error);
	}
};

const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		// router.push({ name: 'PostDetail', params: { id } });
		vAlert('수정 완료!', 'success');
	} catch (error) {
		vAlert('네트워크 오류');
		console.error(error);
	}
};

fetchPost();

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });

//alert
const showAlert = ref(false);
const alertMessage = ref('');
const alertTpye = ref('');

const vAlert = (message, type = 'error') => {
	showAlert.value = true;
	alertMessage.value = message;
	alertTpye.value = type;

	setTimeout(() => {
		showAlert.value = false;
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
