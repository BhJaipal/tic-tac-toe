<template>
	<v-row align="center" justify="center">
		<v-card width="1404">
			<v-tabs
				v-model="tabs"
				align-tabs="end"
				color="deep-purple-accent-4"
			>
				<v-tab :value="1">cards and tooltips</v-tab>
				<v-tab :value="2">Accordions</v-tab>
				<v-tab :value="3">Small size</v-tab>
				<v-tab :value="4">Forms</v-tab>
			</v-tabs>
			<v-window v-model="tabs">
				<v-window-item :value="1">
					<v-container fluid>
						<v-col>
							<v-card
								elevation="2"
								color="#222"
								dark
								class="mt-2"
							>
								<v-card-title>{{ data.title }}</v-card-title>
								<v-card-subtitle>{{
									data.subtitle
								}}</v-card-subtitle>
								<v-card-text
									>{{ data.description }}
								</v-card-text>
							</v-card>
							<v-bottom-sheet inset>
								<template v-slot:activator="{ props }">
									<v-btn v-bind="props"
										>Open Bottom sheet</v-btn
									>
								</template>
								<v-card>
									<v-card-title class="text-h6">
										Privacy Policy
									</v-card-title>
									<v-card-text
										>Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Nam quae, nulla sequi
										adipisci dicta, voluptate aperiam aut
										voluptatum inventore, blanditiis sunt
										quisquam fuga rerum esse quas labore
										facilis nostrum at.</v-card-text
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
							<v-pagination
								:length="5"
								rounded="xl"
							></v-pagination>
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
								<v-chip
									:key="JSON.stringify(data.item)"
									size="small"
								>
									<template v-slot:prepend>
										<v-avatar
											class="bg-accent text-uppercase"
											start
											>{{
												data.item.title.slice(0, 1)
											}}</v-avatar
										>
									</template>
									{{ data.item.title }}
								</v-chip>
							</template>
						</v-combobox>
					</v-col>
				</v-window-item>
				<v-window-item :value="2">
					<v-container fluid>
						<v-col>
							<v-expansion-panels>
								<v-expansion-panel>
									<v-expansion-panel-title
										collapse-icon="mdi-minus"
										expand-icon="mdi-plus"
									>
										Item
									</v-expansion-panel-title>
									<v-expansion-panel-text>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
									</v-expansion-panel-text>
								</v-expansion-panel>

								<v-expansion-panel>
									<v-expansion-panel-title>
										Item
										<template v-slot:actions="{ expanded }">
											<v-icon
												:color="!expanded ? 'teal' : ''"
												:icon="
													expanded
														? 'mdi-pencil'
														: 'mdi-check'
												"
											></v-icon>
										</template>
									</v-expansion-panel-title>
									<v-expansion-panel-text>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
									</v-expansion-panel-text>
								</v-expansion-panel>

								<v-expansion-panel>
									<v-expansion-panel-title
										disable-icon-rotate
									>
										Item
										<template v-slot:actions>
											<v-icon
												color="error"
												icon="mdi-alert-circle"
											>
											</v-icon>
										</template>
									</v-expansion-panel-title>
									<v-expansion-panel-text>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
									</v-expansion-panel-text>
								</v-expansion-panel>
							</v-expansion-panels>
							<v-list density="compact">
								<v-list-subheader>REPORTS</v-list-subheader>

								<v-list-item
									v-for="(item, i) in items"
									:key="i"
									:value="item"
									color="primary"
									rounded="xl"
								>
									<template v-slot:prepend>
										<v-icon :icon="item.icon"></v-icon>
									</template>

									<v-list-item-title
										:v-text="item.text"
									></v-list-item-title>
								</v-list-item>
							</v-list>
							<v-sheet
								:elevation="24"
								:height="100"
								:width="300"
								border
								color="success"
								rounded="xl"
							>
								<p class="mt-2">This is a sheet</p>
							</v-sheet></v-col
						>
					</v-container>
				</v-window-item>
				<v-window-item :value="3">
					<v-container :fluid="true">
						<v-col>
							<v-btn variant="tonal"> Button </v-btn>
							<v-row class="mt-10" no-gutters>
								<v-col cols="12" sm="4">
									<v-chip
										prepend-icon="$vuetify"
										variant="elevated"
										elevation="10"
									>
										Chip
									</v-chip>
								</v-col>
								<v-col cols="12" sm="4">
									<v-chip
										append-avatar="/vite.svg"
										variant="outlined"
									>
										Chip
									</v-chip></v-col
								>
								<v-col cols="12" sm="4">
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
									</v-btn></v-col
								>
							</v-row>

							<v-row class="flex justify-center mt-5">
								<v-btn @click="tooltipShow = !tooltipShow">
									Button
								</v-btn>
								<v-tooltip v-model="tooltipShow" location="top">
									<template v-slot:activator="{ props }">
										<v-btn icon v-bind="props">
											<v-icon color="grey-lighten-1">
												mdi-cart
											</v-icon>
										</v-btn>
									</template>
									<span>Programmatic tooltip</span>
								</v-tooltip>
							</v-row>
							<v-row>
								<v-breadcrumbs :items="breadcrumbeRoute">
									<template v-slot:divider>
										<v-icon
											icon="mdi-chevron-right"
										></v-icon>
									</template>
								</v-breadcrumbs>
							</v-row>
							<div class="div">
								<v-toolbar
									title="Toolbar"
									:elevation="10"
									density="compact"
								>
									<v-toolbar-items>
										<v-btn
											variant="outlined"
											icon="mdi-menu"
										></v-btn>
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
									<template
										v-for="fileName in fileNames"
										:key="fileName"
									>
										<v-chip
											class="me-2"
											color="primary"
											size="small"
											label
										>
											{{ fileName }}
										</v-chip>
									</template></template
								>
							</v-file-input>
						</v-col>
					</v-container>
				</v-window-item>
				<v-window-item :value="4">
					<v-form @submit="submitForm">
						<v-otp-input v-model="formData.otp"></v-otp-input>
						<v-btn type="submit" class="mb-4">Submit</v-btn>
					</v-form>
					<v-divider color="grey" thickness="10"></v-divider>
					<template v-if="formData.out != ''">
						<v-row justify="center" align="center" class="my-10">
							<template v-if="formData.out == 'correct otp'">
								<v-card color="success" width="300">
									<v-card-text>
										{{ formData.out }}
									</v-card-text>
								</v-card>
							</template>
							<template v-else>
								<v-card color="error" width="300">
									<v-card-text>
										{{ formData.out }}
									</v-card-text>
								</v-card>
							</template>
						</v-row>
					</template>
				</v-window-item>
			</v-window>
		</v-card>
	</v-row>
	<v-bottom-navigation v-model="BtmNavValue" color="primary" horizontal>
		<v-btn>
			<v-icon>mdi-history</v-icon>
			Recents
		</v-btn>
		<v-btn>
			<v-icon>mdi-heart</v-icon>
			Favorites
		</v-btn>
		<v-btn>
			<v-icon>mdi-map-marker</v-icon>
			Nearby
		</v-btn>
	</v-bottom-navigation>
</template>
<script setup lang="ts">
import { ref } from "vue";
import router from "../routes";
let BtmNavValue = ref(1);
let tooltipShow = ref(false);
let businessOffer = ref<boolean>(true);
let route = router.currentRoute.value;

let comboboxItems = ["Programming", "Design", "Vue", "Vuetify"];
let selected = ref([comboboxItems[0], comboboxItems[2]]);
let tabs = ref(null);
let breadcrumbeRoute = route.path.split("/").map((it) => {
	return { title: it, disabled: "/" + it == route.path, href: "/" + it };
});
breadcrumbeRoute[0].title = "/";

let formData = ref({
	name: "",
	email: "",
	message: "",
	otp: 0,
	correctOtp: 777777,
	out: "",
});

function submitForm(e: any) {
	e.preventDefault();
	if (formData.value.otp == formData.value.correctOtp) {
		formData.value.out = "correct otp";
	} else {
		formData.value.out = "wrong otp";
	}
}

let items = [
	{ text: "Real-Time", icon: "mdi-clock" },
	{ text: "Audience", icon: "mdi-account" },
	{ text: "Conversions", icon: "mdi-flag" },
];
let chip = ref(true);
let data = {
	title: "About",
	subtitle: "This is an about page",
	description:
		"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
</script>
<style scoped>
.mt-2 {
	margin-top: 2rem;
}
.div {
	height: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	margin-top: 3rem;
}
.contain-all {
	display: flex;
	flex-direction: row;
	column-gap: 50px;
	margin-left: 20%;
	margin-right: 20%;
}
</style>
