<template>
	<v-container fluid>
		<v-col>
			<v-card elevation="2" color="#222" dark class="mt-2">
				<v-card-title>{{ data.title }}</v-card-title>
				<v-card-subtitle>{{ data.subtitle }}</v-card-subtitle>
				<v-card-text>{{ data.description }} </v-card-text>
			</v-card>
			<v-bottom-sheet inset>
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props">Open Bottom sheet</v-btn>
				</template>
				<v-card>
					<v-card-title class="text-h6">
						Privacy Policy
					</v-card-title>
					<v-card-text
						>Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nam quae, nulla sequi adipisci dicta, voluptate
						aperiam aut voluptatum inventore, blanditiis sunt
						quisquam fuga rerum esse quas labore facilis nostrum
						at.</v-card-text
					>
				</v-card>
			</v-bottom-sheet>
			<v-dialog persistent v-model="businessOffer">
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props">Open Offer</v-btn>
				</template>
				<v-card prepend-icon="mdi-briefcase">
					<v-card-title>Business Offer</v-card-title>
					<v-card-text>
						I recieve ... nothing <br />
						You receive ... nothing
					</v-card-text>
					<template v-slot:actions>
						<v-spacer></v-spacer>
						<v-btn
							@click="
								{
									businessOffer = false;
									console.log(businessOffer);
								}
							"
							>Reject</v-btn
						>
						<v-btn
							@click="
								{
									businessOffer = false;
									console.log(businessOffer);
								}
							"
							>Accept</v-btn
						>
					</template>
				</v-card>
			</v-dialog>
			<v-divider color="grey" thickness="10"></v-divider>
			<v-pagination :length="5" rounded="xl"></v-pagination>
			<v-sheet class="mx-auto" elevation="8" max-width="800">
				<v-slide-group
					v-model="itemGroup.slideModel"
					class="pa-4"
					selected-class="bg-primary"
					show-arrows
				>
					<v-slide-group-item
						v-for="n in 15"
						:key="n"
						v-slot="{ isSelected, toggle, selectedClass }"
					>
						<v-card
							:class="['ma-4', selectedClass]"
							color="grey-lighten-1"
							height="200"
							width="100"
							@click="toggle"
						>
							<div
								class="justify-center d-flex fill-height align-center"
							>
								<v-scale-transition>
									<v-icon
										v-if="isSelected"
										color="white"
										icon="mdi-close-circle-outline"
										size="48"
									></v-icon>
								</v-scale-transition>
							</div>
						</v-card>
					</v-slide-group-item>
				</v-slide-group>

				<v-expand-transition>
					<v-sheet v-if="itemGroup.slideModel != null" height="200">
						<div
							class="justify-center d-flex fill-height align-center"
						>
							<h3 class="text-h6">
								Selected
								{{ itemGroup.slideModel }}
							</h3>
						</div>
					</v-sheet>
				</v-expand-transition>
			</v-sheet>
		</v-col>
	</v-container>
	<v-col cols="12">
		<v-combobox
			v-model="selected"
			:items="comboboxItems"
			label="I use a scoped slot"
			multiple
		>
			<template v-slot:selection="data">
				<v-chip :key="JSON.stringify(data.item)" size="small">
					<template v-slot:prepend>
						<v-avatar class="bg-accent text-uppercase" start>{{
							data.item.title.slice(0, 1)
						}}</v-avatar>
					</template>
					{{ data.item.title }}
				</v-chip>
			</template>
		</v-combobox>
	</v-col>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
let businessOffer = ref<boolean>(true);
let comboboxItems = ["Programming", "Design", "Vue", "Vuetify"];
let selected = ref([comboboxItems[0], comboboxItems[2]]);
let data = {
	title: "About",
	subtitle: "This is an about page",
	description:
		"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
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
</script>
<script lang="ts">
export default {
	name: "Tab1",
};
</script>