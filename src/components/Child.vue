<script setup>
import GrandChild from './GrandChild.vue';
import useNumbers from '../composables/useNumbers';
const { numbers, addNumber } = useNumbers();
</script>

<template>
	<div>
		<h1>Child</h1>
		<button @click="addNumber">Add Number</button>
		<div class="line"></div>
		{{ numbers }}
		<GrandChild />
	</div>
</template>
