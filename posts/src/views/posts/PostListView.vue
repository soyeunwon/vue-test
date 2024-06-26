<template>
	<h2>게시글 목록</h2>
	<hr class="my-4" />
	<PostFilter
		v-model:title="params.title_like"
		:limit="params._limit"
		@update:limit="changeLimit"
	/>
	<hr class="my-4" />

	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />

	<template v-else-if="!isExist">
		<p class="text-center py-5 text-muted">No Results</p>
	</template>

	<template v-else>
		<AppGrid
			:items="posts"
			v-slot="{ item }"
			col-class="col-12 col-sm-5 col-md-4 col-lg-3"
		>
			<PostItem
				:title="item.title"
				:content="item.content"
				:created-at="item.createdAt"
				@click="goPage(item.id)"
				@modal="openModal(item)"
				@preview="selectPreview(item.id)"
			/>
		</AppGrid>

		<AppPagination
			:current-page="params._page"
			:page-count="pageCount"
			@page="page => (params._page = page)"
		/>
	</template>

	<hr class="my-5" />

	<Teleport to="#modal">
		<PostModal
			v-model="show"
			:title="modalTitle"
			:content="modalContent"
			:created-at="modalCreatedAt"
		/>
	</Teleport>

	{{ params }}

	<template v-if="previewId">
		<AppCard>
			<PostDetailView :id="previewId"></PostDetailView>
		</AppCard>
	</template>
</template>

<script setup>
import { ref, computed } from 'vue';
import PostItem from '@/components/posts/PostItem.vue';
import { useRouter } from 'vue-router';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import AppCard from '@/components/app/AppCard.vue';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();

const previewId = ref(null);
const selectPreview = id => (previewId.value = id);

const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});

const changeLimit = value => {
	params.value._limit = value;
	params.value._page = 1;
};

const {
	response,
	data: posts,
	error,
	loading,
} = useAxios('/posts', { params });

const isExist = computed(() => posts.value && posts.value.length > 0);

//pagination
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

//modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};

const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};
</script>

<style lang="scss" scoped></style>
