import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import Nested1View from '@/views/nested/Nested1View.vue';
import Nested2View from '@/views/nested/Nested2View.vue';
import MyPage from '@/views/MyPage.vue';

const routes = [
	{ path: '/', name: 'Home', component: HomeView },
	{ path: '/about', name: 'About', component: AboutView },
	{ path: '/posts', name: 'PostList', component: PostListView },
	{ path: '/posts/create', name: 'PostCreate', component: PostCreateView },
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		props: true,
		// props: route => ({ id: parseInt(route.params.id) }),
	},
	{ path: '/posts/:id/edit', name: 'PostEdit', component: PostEditView },
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{ path: 'one', name: 'Nested1', component: Nested1View },
			{ path: 'two', name: 'Nested2', component: Nested2View },
		],
	},
	{
		path: '/my',
		name: 'MyPage',
		component: MyPage,
		beforeEnter: (to, from) => {
			console.log('to:', to);
			console.log('이동전from:', from);
			// return false;
			// return { name: 'Home' };
			removeQueryString(to);
		},
	},
];

function removeQueryString(to) {
	if (Object.keys(to.query).length > 0) {
		return { path: to.path, query: {} };
	}
}

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

// router.beforeEach((to, from) => {
// 	console.log('to:', to);
// 	console.log('이동전from:', from);
// });

export default router;
