<script setup>
import { defineModel, defineProps } from "vue";

const isChecked = defineModel("isChecked");
// const count = defineModel("count");

const count = defineProps(["count"]);

const updateCound = () => {
  count++;
};
</script>

<template>
  <div>
    <input type="checkbox" v-model="isChecked" />
    <button @click="updateCound">버튼</button>
  </div>
</template>

<style lang=""></style>
