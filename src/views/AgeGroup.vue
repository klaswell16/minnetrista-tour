<script setup>
import { store } from '../store/store'
console.log(store)
</script>

<template>
  <div>
    <header>What Age Group Are You?</header>
    <div class="page">
      <div>
        <Button class="mode-buttons" @click="store.easyMode()">Easy</Button>
      </div>
      <div>
        <Button class="mode-buttons" @click="store.mediumMode()">Medium</Button>
      </div>
      <div>
        <Button class="mode-buttons" @click="store.hardMode()">Hard</Button>
      </div>
    </div>
  </div>
</template>

<style>
.mode-buttons {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 2rem;
}
</style>
