import { createApp } from "vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "./style.css";
import router from "./routes";
import App from "./App.vue";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: "dark",
	},
});
createApp(App).use(router).use(vuetify).mount("#app");
