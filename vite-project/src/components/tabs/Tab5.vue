<template>
	<v-card class="mx-auto mt-6" width="auto">
		<v-progress-linear
			:active="loading"
			:indeterminate="loading"
			color="deep-purple-accent-4"
			absolute
			bottom
		></v-progress-linear>

		<v-spacer></v-spacer>

		<v-container style="height: 100px">
			<v-row align="center" class="fill-height" justify="center">
				<v-scale-transition>
					<div v-if="!loading" class="text-center">
						<v-btn color="primary" @click="loading = true">
							Start loading
						</v-btn>
					</div>
				</v-scale-transition>
			</v-row>
		</v-container>
	</v-card>
	<div class="py-4 d-flex justify-space-around align-center">
		<v-btn
			icon="mdi-minus"
			variant="text"
			@click="
				showcase.model =
					showcase.model == 0 ? 4 : Math.max(showcase.model - 1, 0)
			"
		></v-btn>
		{{ showcase.model + 1 }}
		<v-btn
			icon="mdi-plus"
			variant="text"
			@click="
				showcase.model =
					showcase.model == 4 ? 0 : Math.min(showcase.model + 1, 4)
			"
		></v-btn>
	</div>
	<v-carousel
		v-model="showcase.model"
		height="400"
		show-arrows="hover"
		cycle
		progress="primary"
		hide-delimiters
		hide-delimiter-background
	>
		<v-carousel-item v-for="(slide, i) in showcase.slides" :key="i">
			<v-sheet :color="showcase.colors[i]" height="100%">
				<div class="justify-center d-flex fill-height align-center">
					<div class="text-h2">{{ slide }} Slide</div>
				</div>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
	<v-card class="mx-auto my-5" max-width="400">
		<v-container class="pa-1">
			<v-item-group v-model="itemGroup.selection" multiple>
				<v-row>
					<v-col
						v-for="(item, i) in itemGroup.items"
						:key="i"
						cols="12"
						md="6"
					>
						<v-item v-slot="{ isSelected, toggle }">
							<v-img
								:src="`https://cdn.vuetifyjs.com/images/${item.src}`"
								class="text-right pa-2"
								height="200"
								cover
								@click="toggle"
							>
								<v-btn
									:elevation="0"
									density="comfortable"
									:color="isSelected ? 'red' : 'transparent'"
									icon="mdi-heart"
								>
								</v-btn>
							</v-img>
						</v-item>
					</v-col>
				</v-row>
			</v-item-group>
		</v-container>
	</v-card>
	<v-row>
		<v-card width="750" class="mx-auto my-10">
			<v-stepper
				alt-labels
				editable
				:items="['Step 1', 'Step 2', 'Step 3']"
			>
				<template v-slot:item.1>
					<v-card title="Step One" flat
						>Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.</v-card
					>
				</template>

				<template v-slot:item.2>
					<v-card title="Step Two" flat>
						Praesentium eum consequuntur eos,
					</v-card>
				</template>

				<template v-slot:item.3>
					<v-card title="Step Three" flat>
						laudantium ipsa nihil esse commodi nam pariatur incidunt
						aspernatur corporis quaerat quo in nobis odit iure, fuga
						dignissimos!
					</v-card>
				</template>
			</v-stepper>
		</v-card>
	</v-row>
	<v-alert
		text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
		title="Alert title"
		type="info"
		variant="tonal"
	></v-alert>
	<div>
		<v-alert
			v-model="alert"
			border="start"
			close-label="Close Alert"
			color="deep-purple-accent-4"
			title="Closable Alert"
			variant="tonal"
			closable
		>
			Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut
			neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed
			mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
			adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus,
			mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
			Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt
			non, euismod vitae, posuere imperdiet, leo.
		</v-alert>

		<div v-if="!alert" class="my-5 text-center">
			<v-btn @click="alert = true"> Reset </v-btn>
		</div>
		<v-alert
			closable
			icon="$vuetify"
			color="info"
			title="Alert title"
			text="lorem ipsum dolor sit amet"
		></v-alert>
	</div>
	<div class="my-10">
		<v-hover v-slot="{ isHovering, props }">
			<v-card
				class="mx-auto"
				color="grey-lighten-4"
				max-width="600"
				v-bind="props"
			>
				<v-img
					:aspect-ratio="16 / 9"
					src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
					cover
				>
					<v-expand-transition>
						<div
							v-if="isHovering"
							class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
							style="height: 100%"
						>
							$14.99
						</div>
					</v-expand-transition>
				</v-img>

				<v-card-text class="pt-6">
					<div class="mb-2 font-weight-light text-grey text-h6">
						For the perfect meal
					</div>

					<h3 class="mb-2 text-h4 font-weight-light text-orange">
						QW cooking utensils
					</h3>

					<div class="mb-2 font-weight-light text-h6">
						Our Vintage kitchen utensils delight any chef.<br />
						Made of bamboo by hand
					</div>
				</v-card-text>
			</v-card>
		</v-hover>
	</div>
	<div class="text-center">
		<v-rating
			v-model="rating"
			empty-icon="mdi-star-outline"
			full-icon="mdi-star"
			half-icon="mdi-star-half"
			half-increments
			clearable
			active-color="blue"
			color="orange-lighten-1"
			:item-labels="['sad', '', '', '', 'happy']"
			hover
		></v-rating>
	</div>
	<div class="text-center">
		<v-btn color="orange-darken-2" @click="snackbar.snackbar = true">
			Open Snackbar
		</v-btn>

		<v-snackbar v-model="snackbar.snackbar" :timeout="snackbar.timeout">
			{{ snackbar.text }}

			<template v-slot:actions>
				<v-btn
					color="blue"
					variant="text"
					@click="snackbar.snackbar = false"
				>
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</div>
	<v-timeline side="end">
		<v-timeline-item
			v-for="item in timeline.items"
			:key="item.id"
			:dot-color="item.color"
			size="small"
		>
			<v-alert :color="item.color" :icon="item.icon" :value="true">
				Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
				scaevola imperdiet nec ut, sed euismod convenire principes at.
				Est et nobis iisque percipit, an vim zril disputando
				voluptatibus, vix an salutandi sententiae.
			</v-alert>
		</v-timeline-item>
	</v-timeline>
	<V-row>
		<v-col cols="12" sm="3"></v-col>
		<v-col cols="12" sm="3" class="px-20">
			<div class="px-auto">
				<v-img
					:width="344"
					:aspect-ratio="aspectRatio"
					cover
					class="my-10"
					src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
				></v-img>
			</div>
		</v-col>
		<v-col cols="12" sm="3">
			<v-section class="px-10 pt-20">
				<v-radio-group v-model="aspectRatio" class="px-10 pt-20">
					<v-radio label="16:9" :value="16 / 9"></v-radio>
					<v-radio label="4:3" :value="4 / 3"></v-radio>
					<v-radio label="1:1" :value="1 / 1"></v-radio>
				</v-radio-group>
			</v-section>
		</v-col>
		<v-col cols="12" sm="3"></v-col>
	</V-row>

	<v-progress-circular
		color="primary"
		indeterminate
		class="my-5"
		:size="50"
	></v-progress-circular>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
let aspectRatio = ref<number>(4 / 3);
let loading = ref(false);
let rating = ref(3);
let alert = ref(true);
let timeline = ref({
	items: [
		{
			id: 1,
			color: "info",
			icon: "mdi-information",
		},
		{
			id: 2,
			color: "error",
			icon: "mdi-alert-circle",
		},
	],
});
watch(loading, () => {
	if (loading.value) {
		setTimeout(() => (loading.value = false), 3000);
	}
});
let snackbar = reactive({
	snackbar: false,
	text: "My timeout is set to 2000.",
	timeout: 2000,
});
let itemGroup = reactive({
	items: [
		{
			src: "backgrounds/bg.jpg",
		},
		{
			src: "backgrounds/md.jpg",
		},
		{
			src: "backgrounds/bg-2.jpg",
		},
		{
			src: "backgrounds/md2.jpg",
		},
	],
	selection: [],
	slideModel: null,
});
let showcase = reactive({
	colors: [
		"indigo",
		"warning",
		"pink darken-2",
		"red lighten-1",
		"deep-purple accent-4",
	],
	slides: ["First", "Second", "Third", "Fourth", "Fifth"],
	model: 0,
});
</script>

<script lang="ts">
export default {
	name: "Tab5",
};
</script>

<style scoped>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: 0.9;
	position: absolute;
	width: 100%;
}
</style>