import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	routes: [
		{
			name: "Home",
			path: "/",
			component: () => import("./routes/Home.vue"),
		},
		{
			name: "About",
			path: "/about",
			component: () => import("./routes/About.vue"),
		},
		{
			name: "Settings",
			path: "/settings",
			component: () => import("./routes/Settings.vue"),
		},
	],
	history: createWebHistory(),
});
export default router;
