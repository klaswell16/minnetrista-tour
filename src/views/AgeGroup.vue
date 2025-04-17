<script setup>
import { store } from '../store/store'
console.log(store)
</script>

<template>
  <div>
    <header>What Age Group Are You?</header>
    <div class="page">
      <div><button @click="store.easyMode()">Easy</button></div>
    </div>
  </div>
</template>

<style></style>
