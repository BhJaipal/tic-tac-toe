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
	],
	history: createWebHistory(),
});
export default router;
