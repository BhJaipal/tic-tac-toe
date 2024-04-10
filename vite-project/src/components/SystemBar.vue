<template>
	<v-layout style="height: 50px">
		<v-system-bar color="primary">
			<v-icon class="ms-2" icon="mdi-wifi-strength-4"></v-icon>
			<v-icon class="ms-2" icon="mdi-signal-cellular-outline"></v-icon>
			<v-icon class="ms-2" icon="mdi-battery"></v-icon>
			<span class="ms-2">{{ formattedTime }}</span>
		</v-system-bar>
	</v-layout>
</template>
<script lang="ts">
import { ref, watch } from "vue";
export default {
	name: "SystemBar",
	data() {
		const fullTime = ref(new Date(Date.now()));
		setInterval(() => {
			fullTime.value = new Date(Date.now());
		}, 1000);
		const minChange = ref(fullTime.value.getMinutes());
		watch(minChange, () => {
			fullTime.value = new Date(Date.now());
		});
		const formattedTime = ref("");
		const cycle = fullTime.value.getHours() > 12 ? "PM" : "AM";
		const hours = String(
			fullTime.value.getHours() > 12
				? fullTime.value.getHours() - 12
				: fullTime.value.getHours()
		).padStart(2, "0");
		const minutes = String(fullTime.value.getMinutes()).padStart(2, "0");
		formattedTime.value = `${hours}:${minutes} ${cycle}`;
		watch(fullTime, () => {
			const cycle = fullTime.value.getHours() > 12 ? "PM" : "AM";
			const hours = String(
				fullTime.value.getHours() > 12
					? fullTime.value.getHours() - 12
					: fullTime.value.getHours()
			).padStart(2, "0");
			const minutes = String(fullTime.value.getMinutes()).padStart(
				2,
				"0"
			);
			formattedTime.value = `${hours}:${minutes} ${cycle}`;
		});
		return { formattedTime, fullTime };
	},
};
</script>
