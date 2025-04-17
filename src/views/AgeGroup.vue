<script setup>
import { store } from '../store/store'
console.log(store)
</script>

<template>
  <div>
    <header>What Age Group Are You?</header>
    <div class="page">
      <div>
        <router-link to="/ballex"
          ><Button class="mode-buttons" @click="store.easyMode()">Easy</Button></router-link
        >
      </div>
      <div>
        <router-link to="/ballex">
          <Button class="mode-buttons" @click="store.mediumMode()">Medium</Button></router-link
        >
      </div>
      <div>
        <router-link to="/ballex">
          <Button class="mode-buttons" @click="store.hardMode()">Hard</Button></router-link
        >
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
