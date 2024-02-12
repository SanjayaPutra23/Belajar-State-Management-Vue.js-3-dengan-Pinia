<script setup>
import { reactive, ref } from 'vue';

// const red = ref(0);
// const green = ref(0);
// const blue = ref(0);

// const color = ref({
// 	red: 0,
// 	green: 0,
// 	blue: 0,
// });

const color = reactive({
	red: 0,
	green: 0,
	blue: 0,
});
</script>

<template>
	<main
		:style="{
			backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
		}"
	>
		<div>
			<input
				type="number"
				name="red"
				id=""
				placeholder="red"
				v-model="color.red"
			/>
			<input
				type="number"
				name="green"
				id=""
				placeholder="green"
				v-model="color.green"
			/>
			<input
				type="number"
				name="blue"
				id=""
				placeholder="blue"
				v-model="color.blue"
			/>
		</div>
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
