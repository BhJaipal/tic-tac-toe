<script setup lang="ts">
import "./style.css";
import MenuIcon from "./components/MenuIcon.vue";
import { ref } from "vue";
let drawer = ref(false);
let links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
</script>

<template>
	<v-app>
		<v-app-bar>
			<template v-slot:prepend>
				<v-app-bar-nav-icon @click="drawer = !drawer">
					<menu-icon></menu-icon>
				</v-app-bar-nav-icon>
			</template>

			<v-app-bar-title>Application Bar</v-app-bar-title>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" location="left">
			<v-list>
				<v-list-item title="Home" to="/"></v-list-item>
				<v-list-item title="About" to="/about"></v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-main>
			<div class="flex justify-center">
				<div class="app">
					<a href="https://vitejs.dev" target="_blank">
						<img src="/vite.svg" class="logo" alt="Vite logo" />
					</a>
					<a href="https://vuejs.org/" target="_blank">
						<img
							src="./assets/vue.svg"
							class="logo vue"
							alt="Vue logo"
						/>
					</a>
				</div>
			</div>

			<br />
			<router-view />
		</v-main>
		<v-footer color="#212121">
			<v-row justify="center" no-gutters>
				<v-btn
					v-for="link in links"
					:key="link"
					class="mx-2 align-center"
					color="white"
					rounded="xl"
					variant="outlined"
				>
					{{ link }}
				</v-btn>
				<v-col class="text-center mt-10" cols="12">
					{{ new Date().getFullYear() }} —
					<strong>Vuetify</strong>
				</v-col>
			</v-row>
		</v-footer>
	</v-app>
</template>
<style scoped>
@import url("./style.css");
.app {
	width: 100%;
}
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
