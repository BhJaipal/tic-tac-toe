<script setup lang="ts">
import "./style.css";
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
		<v-footer>
			<div id="footer" class="bg-teal d-flex w-100 align-center px-4">
				<div>
					<h3>Footer</h3>
				</div>
				<br />
				<strong
					>Lorem ipsum dolor sit amet consectetur adipisicing elit.
					<br />
					Inventore aperiam nihil consectetur autem totam eum <br />
					voluptatem modi eveniet eligendi, quibusdam deleniti <br />
					pariatur nisi quas et ab dolorum repudiandae? Enim, <br />
					minima.</strong
				>
				<v-spacer></v-spacer>
			</div>
			<div class="px-4 py-2 bg-black text-center w-100">
				{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
			</div>
		</v-footer>
	</v-app>
</template>
<style scoped>
@import url("./style.css");
#footer {
	width: 100%;
}
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
