<script lang="ts">
export default {
	name: "Box",
	props: {
		disabled: {
			type: Boolean,
		},
		finish: {
			type: Boolean,
		},
		value: {
			type: String,
		},
	},
};
</script>

<template>
	<button class="box" :disabled="disabled || finish">
		{{ value }}
	</button>
</template>

<style scoped>
.box {
	width: 50px;
	height: 50px;
	background: transparent;
	border-radius: 0px;
	border: 2px solid black;
	font-weight: bold;
	color: black;
}
</style>
