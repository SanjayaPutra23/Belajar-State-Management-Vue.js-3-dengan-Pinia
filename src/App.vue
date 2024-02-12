<script setup>
import { ref } from 'vue';
import Parent from './components/Parent.vue';

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>

<template>
	<main>
		<Parent :numbers="numbers" />
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
