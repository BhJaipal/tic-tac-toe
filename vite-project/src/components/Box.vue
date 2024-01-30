<script setup lang="ts">
  defineProps<{
    disabled: boolean,
    finish: boolean,
    value: string 
  }>();
</script>

<template>
  <button class="box" :disabled="disabled || finish">
    {{ value }}
  </button>
</template>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 0px;
  border: 2px solid black;
  font-weight: bold;
  color: black;
}
</style>
