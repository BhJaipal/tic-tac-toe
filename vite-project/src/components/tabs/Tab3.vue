<template>
	<v-container :fluid="true">
		<v-col>
			<v-btn variant="tonal"> Button </v-btn>
			<v-row class="mt-10" no-gutters>
				<v-col cols="12" sm="3">
					<v-chip
						prepend-icon="$vuetify"
						variant="elevated"
						elevation="10"
					>
						Chip
					</v-chip>
				</v-col>
				<v-col cols="12" sm="3">
					<v-chip append-avatar="/vite.svg" variant="outlined">
						Chip
					</v-chip></v-col
				>
				<v-col cols="12" sm="3">
					<v-chip
						prepend-avatar="/vue.svg"
						closable
						:model-value="chip"
						close-icon="mdi-delete"
						@click:close="chip = false"
						variant="tonal"
					>
						Chip
					</v-chip>

					<v-btn
						v-if="!chip"
						color="primary"
						close
						dark
						@click="chip = true"
						>Reset Chip
					</v-btn>
				</v-col>
				<v-col cols="12" sm="3">
					<v-badge :content="5">
						<v-icon icon="$vuetify" size="x-large"></v-icon>
					</v-badge>
				</v-col>
			</v-row>
			<v-row class="mt-10" no-gutters>
				<v-col cols="12" sm="3">
					<v-icon
						color="error"
						icon="mdi-access-point"
						size="small"
					></v-icon>
					Access point
				</v-col>
				<v-col cols="12" sm="3">
					<v-icon
						color="success"
						icon="mdi-check-circle"
						size="x-large"
					></v-icon>
					Check circle
				</v-col>
				<v-col cols="12" sm="3">
					<v-icon color="warning" icon="mdi-alert"></v-icon>
					Alert
				</v-col>
				<v-col cols="12" sm="3">
					<v-icon
						color="info"
						icon="mdi-antenna"
						size="large"
					></v-icon>
					Antenna
				</v-col>
			</v-row>

			<v-row class="flex justify-center mt-5">
				<v-btn @click="tooltipShow = !tooltipShow"> Button </v-btn>
				<v-tooltip v-model="tooltipShow" location="top">
					<template v-slot:activator="{ props }">
						<v-btn icon v-bind="props">
							<v-icon color="grey-lighten-1"> mdi-cart </v-icon>
						</v-btn>
					</template>
					<span>Programmatic tooltip</span>
				</v-tooltip>
			</v-row>
			<v-row>
				<v-breadcrumbs :items="breadcrumbeRoute">
					<template v-slot:divider>
						<v-icon icon="mdi-chevron-right"></v-icon>
					</template>
				</v-breadcrumbs>
			</v-row>
			<div class="div">
				<v-toolbar title="Toolbar" :elevation="10" density="compact">
					<v-toolbar-items>
						<v-btn variant="outlined" icon="mdi-menu"></v-btn>
					</v-toolbar-items>
				</v-toolbar>
			</div>
			<v-file-input
				:rules="[
					(value) => {
						return (
							!value ||
							!value.length ||
							value[0].size < 2000000 ||
							'Avatar size should be less than 2 MB!'
						);
					},
				]"
				:show-size="1024"
				:counter="true"
				accept="image/png, image/jpeg, image/bmp"
				label="Avatar"
				placeholder="Pick an avatar"
				prepend-icon="mdi-camera"
			>
				<template v-slot:selection="{ fileNames }">
					<template v-for="fileName in fileNames" :key="fileName">
						<v-chip class="me-2" color="primary" size="small" label>
							{{ fileName }}
						</v-chip>
					</template></template
				>
			</v-file-input>
		</v-col>
	</v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
let { route } = defineProps<{ route: string }>();
let tooltipShow = ref(false);
let chip = ref(true);

let breadcrumbeRoute = route.split("/").map((it) => {
	return { title: it, disabled: "/" + it == route, href: "/" + it };
});
breadcrumbeRoute[0].title = "/";
</script>

<script lang="ts">
export default {
	name: "Tab3",
};
</script>