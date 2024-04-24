<template>
	<h2>게시글 목록</h2>
	<hr class="my-4" />
	<PostFilter v-model:title="params.title_like" v-model:limit="params.limit" />

	<hr class="my-4" />

	<AppGrid :items="posts" v-slot="{ item }">
		<!-- <template v-slot="{ item }"> -->
		<PostItem
			:title="item.title"
			:content="item.content"
			:created-at="item.createdAt"
			@click="goPage(item.id)"
		/>
		<!-- </template> -->
	</AppGrid>

	<AppPagination
		:current-page="params._page"
		:page-count="pageCount"
		@page="page => (params._page = page)"
	/>
	<hr class="my-5" />
	<!-- <AppCard>
		<PostDetailView :id="2" />
	</AppCard> -->
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue';
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import AppGrid from '@/components/posts/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';

const router = useRouter();
const posts = ref([]);

const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_limit: 3,
	_page: 1,
	title_like: '',
});

//pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
		// ({ data: posts.value } = await getPosts());
	} catch (error) {
		console.error(error);
	}
};

const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};

watchEffect(fetchPosts);
</script>

<style lang="scss" scoped></style>
