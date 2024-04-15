<script lang="ts">
export default {
	name: "MultipleProps",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

type Props = {
	name?: string;
	age?: number;
	color?: string;
	course?: string;
	subject?: string;
	class?: string;
};
let prop = defineProps<Props>();
let improperProps = computed(() => {
	return (
		(prop.name == undefined || prop.age == undefined) &&
		(prop.course == undefined || prop.subject == undefined)
	);
});
</script>

<template>
	<v-row justify="center" align="center">
		<v-card
			:class="$props.class ? $props.class : ''"
			width="700"
			:color="improperProps ? 'error' : color ?? 'surface-light'"
			:title="name ? name : course"
			:subtitle="age ? age : subject"
		></v-card>
	</v-row>
</template>