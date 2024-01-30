<script setup lang="ts">
import Box from './components/Box.vue'
import { ref } from 'vue'
const boxes = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]);
const modification = ref([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]);

const finished = ref(false);
const player = ref("O");
const lastPlayer = ref("X");
const show = ref("Starting with player O");

function calculateWin() {
  let lines = [
    [[1, 1], [1, 2], [1, 3]],
    [[2, 1], [2, 2], [2, 3]],
    [[3, 1], [3, 2], [3, 3]],
    [[1, 1], [2, 1], [3, 1]],
    [[1, 2], [2, 2], [3, 2]],
    [[1, 3], [2, 3], [3, 3]],
    [[1, 1], [2, 2], [3, 3]],
    [[1, 3], [2, 2], [3, 1]]
  ];
  for (let index in lines) {
    let [a, b, c] = lines[index];
    let first = boxes.value[a[0] - 1][a[1] - 1];
    let sec = boxes.value[b[0] - 1][b[1] - 1];
    let third = boxes.value[c[0] - 1][c[1] - 1];
    if (first && sec && third) {
      if (first == sec && sec == third) {
        finished.value = true;
        return `Winner is ${lastPlayer.value}`
      }
    }
  }
  return "";
}

function switchPlayer() {
  lastPlayer.value = player.value;
  player.value = ((player.value == "O") ? "X" : "O");
  show.value = calculateWin() ? calculateWin() : `Player ${player.value}'s turn`;
}

function restart() {
  boxes.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  modification.value = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  finished.value = false;
  player.value = "X";
  lastPlayer.value = "O";
  show.value = 'Starting with player X';
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div style="display: block;">
    <h1>{{ show }}</h1>
  </div>
  <br />
  <div class="game">
    <template v-for="(outer, i) in boxes" :key="i">
      <div class="row">
        <template v-for="(inner, j) in outer" :key="j">
          <Box @click="() => {
            boxes[i][j] = player;
            modification[i][j] = 1;
            switchPlayer();
          }" :disabled="!!modification[i][j]" :finish="finished" :value="boxes[i][j]" />
        </template>
      </div>
    </template>
  </div>
  <button class="restart" @click="restart"> ⭮ Reload</button>
</template>
<style scoped>
.restart {
  margin-top: 3rem;
  margin-left: 3rem;
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

.row {
  display: grid;
  height: 50px;
  width: fit;
  grid-template-columns: auto auto auto;
}

.game {
  margin-left: 35%;
  height: 150px;
  width: 150px;
  background-color: transparent;
  background-image: linear-gradient(to bottom right, gray, white, #333);
}
</style>
