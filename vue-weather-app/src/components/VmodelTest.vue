<script setup>
import { ref } from "vue";
import VmodelChildComp from "./VmodelChildComp.vue";

const count = ref(1);
const isChecked = ref(true);
</script>

<template>
  <div>{{ count }}</div>
  <div :style="{ background: isChecked ? 'red' : 'yellow' }">
    count update {{ !!isChecked ? "true" : "false" }}
  </div>
  <VmodelChildComp v-model:isChecked="isChecked" count="count" />
</template>

<style></style>
