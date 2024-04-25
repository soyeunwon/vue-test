<template>
	<AppModal v-model="show" title="게시글">
		<template #default>
			<div class="row g-3">
				<div class="col-3 text-muted">제목</div>
				<div class="col-9">{{ title }}</div>
				<div class="col-3 text-muted">내용</div>
				<div class="col-9">{{ content }}</div>
				<div class="col-3 text-muted">등록일</div>
				<div class="col-9">{{ createdAt }}</div>
			</div>
		</template>
		<template v-slot:actions>
			<button type="button" class="btn btn-secondary" @click="closeModal">
				닫기
			</button>
		</template>
	</AppModal>
</template>

<script setup>
import { computed } from 'vue';
import AppModal from '../app/AppModal.vue';

const props = defineProps({
	modelValue: Boolean,
	title: String,
	content: String,
	createdAt: [String, Number],
});
const emit = defineEmits(['update:modelValue']);

const show = computed({
	//computed 그냥 선언 시 읽기전용, getter setter사용 -> 쓰기 가능
	get() {
		//값을 읽어갈때
		return props.modelValue;
	},
	set(value) {
		// show에서 변경 읽어났을때
		emit('update:modelValue', value);
	},
});

const closeModal = () => {
	show.value = false;
};
</script>

<style lang="scss" scoped></style>
