<template>
	<v-row justify="center" align="center">
		<v-card width="1200">
			<v-card-title class="text-center">
				<h1>Settings</h1>
			</v-card-title>
			<v-card-text>
				<v-row>
					<v-col cols="12" sm="3"><h2>Notifications</h2></v-col>
					<v-col cols="12" sm="3"></v-col>
					<v-col cols="12" sm="3"></v-col>
					<v-col cols="12" sm="3">
						<v-switch
							color="blue-darken-4"
							density="compact"
							inline
							inset
						></v-switch>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="3"><h2>Risky</h2></v-col>
					<v-col cols="12" sm="3"></v-col>
					<v-col cols="12" sm="3"></v-col>
					<v-col cols="12" sm="3">
						<v-dialog v-model="Offer.show">
							<template v-slot:activator="{ props }">
								<v-switch
									v-bind="props"
									color="warning"
									density="compact"
									v-model="risky"
									inline
									inset
								></v-switch>
							</template>
							<v-row justify="center">
								<v-card width="500">
									<v-card-title>
										It's a risky change
									</v-card-title>
									<template v-slot:actions>
										<v-spacer></v-spacer>
										<v-btn
											@click="
												() => {
													console.log(
														'Settings changed'
													);
													Offer.accept = false;
													Offer.show = false;
													risky = !risky;
												}
											"
											>Reject
										</v-btn>
										<v-btn
											@click="
												() => {
													console.log(
														'Settings changed'
													);
													Offer.accept = true;
													Offer.show = false;
												}
											"
											>Accept</v-btn
										>
									</template>
								</v-card>
							</v-row>
						</v-dialog>
					</v-col>
				</v-row>
				<v-row>
					<v-expansion-panels>
						<v-expansion-panel>
							<v-expansion-panel-title
								collapse-icon="mdi-minus"
								expand-icon="mdi-plus"
							>
								<h2>Item</h2>
							</v-expansion-panel-title>
							<v-expansion-panel-text>
								<v-row>
									<v-col cols="12" sm="3">
										<h3 class="mt-5">Unknown</h3>
									</v-col>
									<v-col cols="12" sm="3"></v-col>
									<v-col cols="12" sm="3"></v-col>
									<v-col cols="12" sm="3">
										<v-switch
											color="blue-darken-4"
											density="compact"
											inline
											inset
										></v-switch>
									</v-col>
								</v-row>
							</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
				</v-row>
			</v-card-text>
		</v-card>
	</v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
let risky = ref(false);
let Offer = ref({ show: false, accept: false });
</script>
