<template>
	<v-layout style="height: 50px">
		<v-system-bar color="primary">
			<v-icon class="ms-2" icon="mdi-wifi-strength-4"></v-icon>
			<v-icon class="ms-2" icon="mdi-signal-cellular-outline"></v-icon>
			<v-icon class="ms-2" icon="mdi-battery"></v-icon>
			<span class="ms-2"
				>{{ fullTime.getHours() }}:{{ fullTime.getMinutes() }}</span
			>
		</v-system-bar>
	</v-layout>
</template>
<script lang="ts">
export default {
	name: "SystemBar",
	data() {
		let fullTime = new Date(Date.now());
		return { fullTime };
	},
};
</script>
