<template>
	<v-parallax
		src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
		height="740"
	>
		<v-form @submit="submitForm">
			<v-row justify="center" align="center" class="mt-10">
				<v-card width="500" color="transparent opacity-5" class="mt-10">
					<v-text-field
						v-model="formData.name"
						counter="10"
						label="Name"
						required
						:rules="[(v) => !!v || 'Name is required']"
					></v-text-field>
					<v-text-field
						v-model="formData.email"
						label="Email"
						required
						:rules="[
							(v) => !!v || 'Email is required',
							(v) =>
								/.+@.+\..+/.test(v) || 'E-mail must be valid',
						]"
					></v-text-field>
					<v-select
						required
						:items="['Item 1', 'Item 2', 'Item 3']"
						label="Item"
						v-model="formData.select"
						:rules="[(v) => !!v || 'Item is required']"
					></v-select>
					<v-dialog width="auto">
						<template v-slot:activator="{ props: activatorProps }">
							<v-btn
								class="mt-5 mb-10"
								text="Date of Birth"
								variant="outlined"
								v-bind="activatorProps"
							></v-btn>
						</template>

						<template v-slot:default="{ isActive }">
							<v-date-picker
								v-model="formData.date"
								color="primary"
							></v-date-picker>
							<v-card-actions>
								<v-btn
									text="Close"
									@click="isActive.value = false"
								></v-btn
							></v-card-actions>
						</template>
					</v-dialog>
					<v-radio-group v-model="formData.gender" required>
						<v-row class="px-10">
							<v-radio label="Male" value="male"></v-radio>
							<v-radio label="Female" value="female"></v-radio>
						</v-row>
					</v-radio-group>
					<v-row align="center" justify="center">
						<v-checkbox required v-model="formData.checkbox">
							<template v-slot:label>
								<v-tooltip>
									<template v-slot:activator="{ props }">
										<v-btn
											v-bind="props"
											color="transparent"
											>Terms and conditions</v-btn
										>
									</template>
									<v-card
										width="500"
										title="Terms and conditions"
									>
										<template v-slot:text>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Autem
											consequuntur, alias corrupti,
											expedita, omnis doloremque ad animi
											deserunt ex a accusamus veritatis
											voluptate dicta. Dolore nulla illo
											molestias quibusdam saepe!
										</template>
									</v-card>
								</v-tooltip>
							</template>
						</v-checkbox>
					</v-row>
				</v-card>
			</v-row>
			<v-btn
				color="transparent"
				type="submit"
				style="backdrop-filter: blur(4px)"
				opacity="0.2"
				class="mt-10 mb-4 opacity-20 backdrop-blur-sm"
				:disabled="!isDataValid"
				>Submit</v-btn
			>
		</v-form>
		<v-divider color="grey" thickness="10"></v-divider>
		<template v-if="formData.submition">
			<v-otp-input v-model="formData.otp"></v-otp-input>
			<v-btn
				@click="validateOtp"
				class="mb-2.5"
				:color="
					formData.out == 'Correct otp'
						? 'success'
						: formData.out == 'Wrong otp'
						? 'error'
						: 'tertiary'
				"
				>Validate OTP
			</v-btn>
			<v-dialog v-model="formData.otpDialog" width="auto">
				<v-card
					max-width="400"
					:prepend-icon="
						!!formData.jsonOut ? 'mdi-check' : 'mdi-close'
					"
					:text="formData.jsonOut"
					:title="formData.out"
				>
					<template v-slot:prepend>
						<v-icon
							:icon="
								!!formData.jsonOut ? 'mdi-check' : 'mdi-close'
							"
							:color="
								formData.out === 'Correct otp'
									? 'success'
									: 'error'
							"
						></v-icon>
					</template>
					<template v-slot:actions>
						<v-btn
							class="ms-auto"
							text="close"
							@click="formData.otpDialog = false"
						></v-btn>
					</template>
				</v-card>
			</v-dialog>
		</template>
	</v-parallax>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
let formData = ref({
	date: null,
	name: "",
	email: "",
	gender: null,
	otp: 0,
	checkbox: false,
	select: null,
	submition: false,
	correctOtp: "777777",
	out: "",
	otpDialog: false,
	jsonOut: "",
});
function validateOtp() {
	formData.value.otpDialog = true;
	if (formData.value.otp.toString() == formData.value.correctOtp) {
		formData.value.out = "Correct otp";
		formData.value.jsonOut = JSON.stringify(
			{
				name: formData.value.name,
				email: formData.value.email,
				select: formData.value.select,
				dob: formData.value.date,
			},
			null,
			4
		);
	} else {
		formData.value.out = "Wrong otp";
		formData.value.jsonOut = "";
	}
}
function submitForm(e: any) {
	e.preventDefault();
	formData.value.submition = true;
	let otp: number | string = "";
	for (let i = 0; i < 6; i++) {
		otp += Math.floor(Math.random() * 10);
	}
	formData.value.correctOtp = otp;
	window.Notification.requestPermission(() => {
		if (Notification.permission == "granted") {
			new Notification("OTP", {
				body: `Your OTP is ${otp}`,
			});
		}
	});
}

let isDataValid = computed(
	() =>
		!!formData.value.name &&
		!!formData.value.email &&
		formData.value.checkbox &&
		formData.value.select != null
);
</script>
<script lang="ts">
export default {
	name: "Tab4",
};
</script>