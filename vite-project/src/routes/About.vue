<template>
	<v-row align="center" justify="center">
		<v-card width="1404">
			<v-parallax
				src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
				width="auto"
				height="48"
			>
				<v-tabs
					v-model="tabs"
					align-tabs="end"
					color="deep-purple-accent-4"
					class="mb-10"
				>
					<v-tab :value="1">cards and tooltips</v-tab>
					<v-tab :value="2">Accordions</v-tab>
					<v-tab :value="3">Small size</v-tab>
					<v-tab :value="4">Forms</v-tab>
					<v-tab :value="5">Show case</v-tab>
				</v-tabs>
			</v-parallax>
			<v-window v-model="tabs">
				<v-window-item :value="1">
					<section id="cards">
						<Tab1 />
					</section>
				</v-window-item>
				<v-window-item :value="2">
					<section id="accordians">
						<Tab2 />
					</section>
				</v-window-item>
				<v-window-item :value="3">
					<section id="small">
						<Tab3 :route="route.path" />
					</section>
				</v-window-item>
				<v-window-item :value="4">
					<section id="forms">
						<Tab4 />
					</section>
				</v-window-item>
				<v-window-item :value="5">
					<section id="showcase">
						<Tab5 />
					</section>
				</v-window-item>
			</v-window>
		</v-card>
	</v-row>
	<v-bottom-navigation v-model="BtmNavValue" color="primary" elevation="10">
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
import Tab1 from "../components/tabs/Tab1.vue";
import Tab2 from "../components/tabs/Tab2.vue";
import Tab3 from "../components/tabs/Tab3.vue";
import Tab4 from "../components/tabs/Tab4.vue";
import Tab5 from "../components/tabs/Tab5.vue";
import { ref } from "vue";
import router from "../routes";
let route = router.currentRoute.value;

let BtmNavValue = ref(1);

let tabs = ref(null);
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
