<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />

	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>id: {{ props.id }} isOdd: {{ isOdd }}</p>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY.MM.DD HH:mm:ss') }}
		</p>
		<hr class="my-4" />
		<AppError v-if="removeError" :message="removeError.message" />
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
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>

			<div class="col-auto">
				<button
					class="btn btn-outline-danger"
					:disabled="removeLoading"
					@click="remove"
				>
					<template v-if="removeLoading">
						<span
							class="spinner-grow spinner-grow-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else>삭제</template>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, toRef } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';
import { useAlert } from '@/composables/alert';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';
import { useNumber } from '@/composables/number';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();

const props = defineProps({
	id: [String, Number],
});

const { isOdd } = useNumber(toRef(props, 'id'));

const url = computed(() => `/posts/${props.id}`);

const { data: post, error, loading } = useAxios(url, { method: 'get' });

const {
	error: removeError,
	loading: removeLoading,
	execute,
} = useAxios(
	`/posts/${props.id}`,
	{ method: 'delete' },
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' });
			vSuccess('삭제 성공');
		},
		onError: err => {
			console.error(err);
			removeError.value = err;
			vAlert('삭제 실패');
		},
	},
);

const remove = async () => {
	if (confirm('삭제 하시겠습니까?') === false) return;
	execute();
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });

onBeforeRouteUpdate(() => {
	console.log('onBeforeRouteUpdate');
});

onBeforeRouteLeave(() => {
	console.log('onBeforeRouteLeave');
});
</script>

<style lang="scss" scoped></style>
