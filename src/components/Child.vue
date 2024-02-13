<script setup>
import GrandChild from './GrandChild.vue';

import { inject } from 'vue';
const numbers = inject('numbers');

const addNumbers = () => {
	numbers.value = [...numbers.value, numbers.value.length + 1];
};
</script>

<template>
	<div>
		<h1>Child</h1>
		<button @click="addNumbers">Add Number</button>
		<div class="line"></div>
		{{ numbers }}
		<GrandChild />
	</div>
</template>
