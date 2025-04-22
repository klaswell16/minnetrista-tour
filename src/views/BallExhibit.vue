<script setup>
//Ages 16 - 21 info
import { store } from '../store/store.js'

console.log(store)
</script>

<template>
  <div class="page">
    <div class="card">
      <header class="card-header">Ball Exhibit</header>
      <img
        class="card-image"
        alt="Fly over of Ball State University "
        src="/BallStateFlyOver.jpg"
      />
      <div class="text-body">
        <div v-if="store.mode === 'easy'">
          Ball State University was founded in 1918 by the 5 Ball brothers, The same Ball brothers
          that owned the company that makes the Ball mason jars. When they founded it the school was
          actually called The Indiana State Normal School Eastern Division. The Indiana General
          Assembly renamed the school to Ball Teachers College in 1922. The school reached
          university status in 1965 where it got the name we know today, Ball State University.
        </div>
        <div v-if="store.mode === 'medium'">medium mode baby</div>
        <div v-if="store.mode === 'hard'">Hard mode yo</div>
      </div>
      <div>
        <router-link to="/bobross"><Button class="next-button" @click="">></Button></router-link>
      </div>
    </div>
  </div>
</template>

<style></style>
