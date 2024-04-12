<script lang="ts">
export default {
	name: "MultipleProps",
};
</script>

<script lang="ts" setup>
type Props = {
	name?: string;
	age?: number;
	course?: string;
	subject?: string;
	class?: string;
};
let prop = defineProps<Props>();
console.log(prop);
</script>

<template>
	<v-row justify="center" align="center">
		<v-card
			:class="$props.class ? $props.class : ''"
			width="700"
			:title="name ? name : course"
			:subtitle="age ? age : subject"
		></v-card>
	</v-row>
</template>