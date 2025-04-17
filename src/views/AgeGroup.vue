<script setup>
import { store } from '../store/store'
console.log(store)
</script>

<template>
  <div>
    <header>What Age Group Are You?</header>
    <div class="page">
      <div><button style="width: 70px; height: 50px" @click="store.easyMode()">Easy</button></div>
      <div><button @click="store.mediumMode()">Medium</button></div>
      <div><button @click="store.hardMode()">Hard</button></div>
    </div>
  </div>
</template>

<style></style>
