<template>
	<div class="contain-all">
		<div class="div">
			<v-btn variant="tonal"> Button </v-btn>
			<v-card elevation="2" color="#222" dark class="mt-2">
				<v-card-title>{{ data.title }}</v-card-title>
				<v-card-subtitle>{{ data.subtitle }}</v-card-subtitle>
				<v-card-text>{{ data.description }} </v-card-text>
			</v-card>
			<div class="chip-div">
				<v-chip
					prepend-icon="$vuetify"
					variant="elevated"
					elevation="10"
				>
					Chip
				</v-chip>
				<v-chip append-avatar="/vite.svg" variant="outlined">
					Chip
				</v-chip>
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
			</div>
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
		</div>
		<div class="div">
			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-title
						collapse-icon="mdi-minus"
						expand-icon="mdi-plus"
					>
						Item
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title>
						Item
						<template v-slot:actions="{ expanded }">
							<v-icon
								:color="!expanded ? 'teal' : ''"
								:icon="expanded ? 'mdi-pencil' : 'mdi-check'"
							></v-icon>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title disable-icon-rotate>
						Item
						<template v-slot:actions>
							<v-icon color="error" icon="mdi-alert-circle">
							</v-icon>
						</template>
					</v-expansion-panel-title>
					<v-expansion-panel-text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
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

					<v-list-item-title :v-text="item.text"></v-list-item-title>
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
let businessOffer = ref<boolean>(true);
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
.div > .chip-div {
	display: flex;
	flex-direction: row;
	margin: 0px;
	padding: 0%;
	width: 100%;
	row-gap: 20px;
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
