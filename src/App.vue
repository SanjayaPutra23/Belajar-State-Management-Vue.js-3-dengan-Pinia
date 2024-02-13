<script setup>
import { ref, provide } from 'vue';
import Parent from './components/Parent.vue';

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

provide('numbers', numbers);
</script>

<template>
	<main>
		<Parent />
	</main>
</template>

<style scoped>
main {
	background-color: rgb(122, 50, 255);
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

div {
	display: flex;
	flex-direction: column;
}
</style>
