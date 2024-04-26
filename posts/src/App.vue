<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
import AppAlert from './components/app/AppAlert.vue';
import { useAlert } from './composables/alert';

const { alerts } = useAlert();
</script>

<template>
	<TheHeader />
	<TheView />
	<AppAlert :items="alerts" />
</template>

<style scoped></style>
