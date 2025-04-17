<script setup>
//Ages 16 - 21 info
import { store } from '../store/store.js'

console.log(store)
</script>

<template>
  <div class="page">
    <header>Ball Exhibit</header>
    <img
      alt="Fly over of Ball State University "
      src="/BallStateFlyOver.jpg"
      max-width="100%"
      height="400em"
    />
    <div class="text-body">
      <div v-if="store.mode === 'easy'">
        Ball State University was founded in 1918 by the 5 Ball brothers, The same Ball brothers
        that owned the company that makes the Ball mason jars. When they founded it the school was
        actually called The Indiana State Normal School Eastern Division. The Indiana General
        Assembly renamed the school to Ball Teachers College in 1922. The school reached university
        status in 1965 where it got the name we know today, Ball State University.
      </div>
      <div v-if="store.mode === 'medium'">medium mode baby</div>
      <div v-if="store.mode === 'hard'">Hard mode yo</div>
    </div>
    <div>
      <router-link to="/bobross"><Button class="next-button" @click="">></Button></router-link>
    </div>
  </div>
</template>

<style>
.next-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
}
.next-button:hover {
  transform: scale(1.1);
  transition: all 0.3s ease;
}
.text-body {
  font-size: 25px;
}
</style>
