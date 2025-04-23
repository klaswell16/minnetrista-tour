<script setup>
import { store } from '../store/store'
console.log(store)
</script>

<template>
  <div class="container">
    <header class="title">Level Of Complexity</header>
    <div class="button-grid">
      <router-link to="/ballex">
        <button class="mode-button easy" @click="store.easyMode()">Low</button>
      </router-link>
      <router-link to="/ballex">
        <button class="mode-button medium" @click="store.mediumMode()">Average</button>
      </router-link>
      <router-link to="/ballex">
        <button class="mode-button hard" @click="store.hardMode()">High</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding: 2rem;
  background-color: #526d82;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #333;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 300px;
}

.mode-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: block;
}

.mode-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.mode-button:active {
  transform: translateY(1px);
}

.easy {
  color: black;
}

.medium {
  color: black;
}

.hard {
  color: black;
}
</style>
