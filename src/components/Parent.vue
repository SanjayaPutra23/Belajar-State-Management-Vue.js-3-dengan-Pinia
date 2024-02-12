<script setup>
import Child from './Child.vue';
const { numbers } = defineProps(['numbers']);
</script>

<template>
	<div>
		<h1>Parent</h1>
		<div class="line"></div>
		<Child :numbers="numbers" />
	</div>
</template>
