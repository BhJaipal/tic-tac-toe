<script setup lang="ts">
import MenuIcon from "./components/MenuIcon.vue";
import { ref } from "vue";
let drawer = ref(false);
</script>

<template>
	<v-app>
		<v-app-bar :elevation="20" scroll-behavior="elevate">
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
		<div class="app">
			<a href="https://vitejs.dev" target="_blank">
				<img src="/vite.svg" class="logo" alt="Vite logo" />
			</a>
			<a href="https://vuejs.org/" target="_blank">
				<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
			</a>
		</div>
		<br />
		<router-view />
	</v-app>
</template>
<style scoped>
.app {
	margin-top: 10vh;
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
