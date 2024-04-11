<template>
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
					:title="item.text"
					:tile="false"
				>
					<template v-slot:prepend>
						<v-icon :icon="item.icon"></v-icon>
					</template>
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
</template>

<script setup lang="ts">
let items = [
	{ text: "Real-Time", icon: "mdi-clock" },
	{ text: "Audience", icon: "mdi-account" },
	{ text: "Conversions", icon: "mdi-flag" },
];
</script>
<script lang="ts">
export default {
	name: "Tab2",
};
</script>