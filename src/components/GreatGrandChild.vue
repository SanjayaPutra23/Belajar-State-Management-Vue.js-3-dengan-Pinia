<script setup>
import { useNumbers } from '../stores/numbers';
const { numbers, addNumber, doubleNumber, filterNumber } = useNumbers();
</script>

<template>
	<div>
		<h1>Great Grand Child</h1>
		<p>{{ numbers }}</p>
		<p>{{ doubleNumber }}</p>
		<p>{{ filterNumber(5) }}</p>
		<div class="line"></div>

		<button @click="addNumber">Add Number</button>
	</div>
</template>
