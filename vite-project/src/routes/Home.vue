<script lang="ts" setup>
import Box from "./../components/Box.vue";
import { ref } from "vue";

/// Box values
const boxes = ref([
	["", "", ""],
	["", "", ""],
	["", "", ""],
]);

const modification = ref([
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
]);

const finished = ref(false);
const player = ref("O");
const lastPlayer = ref("X");
const show = ref("Starting with player O");

/**
 * @returns calculate Winner
 */
function calculateWin() {
	let lines = [
		[
			[1, 1],
			[1, 2],
			[1, 3],
		],
		[
			[2, 1],
			[2, 2],
			[2, 3],
		],
		[
			[3, 1],
			[3, 2],
			[3, 3],
		],
		[
			[1, 1],
			[2, 1],
			[3, 1],
		],
		[
			[1, 2],
			[2, 2],
			[3, 2],
		],
		[
			[1, 3],
			[2, 3],
			[3, 3],
		],
		[
			[1, 1],
			[2, 2],
			[3, 3],
		],
		[
			[1, 3],
			[2, 2],
			[3, 1],
		],
	];
	for (let index in lines) {
		let [a, b, c] = lines[index];
		let first = boxes.value[a[0] - 1][a[1] - 1];
		let sec = boxes.value[b[0] - 1][b[1] - 1];
		let third = boxes.value[c[0] - 1][c[1] - 1];
		if (first && sec && third) {
			if (first == sec && sec == third) {
				finished.value = true;
				return `Winner is ${lastPlayer.value}`;
			}
		}
	}
	return "";
}
/**
 * @return Switch Player
 */
function switchPlayer() {
	lastPlayer.value = player.value;
	player.value = player.value == "O" ? "X" : "O";
	show.value = calculateWin()
		? calculateWin()
		: `Player ${player.value}'s turn`;
}

/**
 * @returns Restart the game
 */
function restart() {
	boxes.value = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];
	modification.value = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	finished.value = false;
	player.value = "X";
	lastPlayer.value = "O";
	show.value = "Starting with player X";
}
</script>
<style scoped>
.restart {
	margin-top: 3rem;
	margin-left: 40%;
	margin-right: 40%;
}

.row {
	display: grid;
	height: 50px;
	width: fit;
	grid-template-columns: auto auto auto;
}

.game {
	margin-top: 3rem;
	margin-left: 46%;
	height: 150px;
	width: 150px;
	background-color: transparent;
	background-image: linear-gradient(to bottom right, gray, white, #333);
}
</style>

<template>
	<div>
		<h1>
			{{ show }}
		</h1>
	</div>
	<div class="game">
		<template v-for="(outer, i) in boxes" :key="i">
			<div class="row">
				<template v-for="(_, j) in outer" :key="i + 1 + '.' + (j + 1)">
					<Box
						@click="
							() => {
								boxes[i][j] = player;
								modification[i][j] = 1;
								switchPlayer();
							}
						"
						:disabled="!!modification[i][j]"
						:finish="finished"
						:value="boxes[i][j]"
					/>
				</template>
			</div>
		</template>
	</div>
	<div>
		<button class="restart" @click="restart">⭮ Reload</button>
	</div>
</template>
