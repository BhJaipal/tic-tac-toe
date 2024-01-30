<script setup lang="ts">
  import Box from './components/Box.vue'
  import { ref } from 'vue'
  let boxes = ref([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  let modification = ref([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  let finished = ref(false);
  let player = ref("O");
  let show = ref("Starting with: player O");
  function switchPlayer() {
    player.value = (player.value == "O") ? "X" : "O";
    show.value = `Player ${player.value}'s turn`;
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
  <div>
    <h1>{{ show }}</h1>
    <div class="game">
      <template v-for="(outer, i) in boxes" :key="i">
        <div class="row">
          <template v-for="(inner, j) in outer" :key="j">
            <Box 
              @click="() => {
                boxes[i][j] = player;
                modification[i][j] = 1;
                switchPlayer();
              }"
              :disabled="modification[i][j]"
              :finish="finished"
              :value="boxes[i][j]" />
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
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

.game{
  height: 150px;
  width: 150px;
  background-color: transparent;
  background-image: linear-gradient(to bottom right, gray, white, #333);
}
</style>
