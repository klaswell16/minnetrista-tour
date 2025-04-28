<script setup>
import { ref } from 'vue'
import { store } from '../store/store.js'

const hotspots = ref([
  {
    id: 1,
    x: 30,
    y: 40,
    title: 'Symbolism in Design',
    content:
      "The fish motif represents the tribe's connection to the river and its life-giving properties.",
    show: false,
  },
  {
    id: 2,
    x: 65,
    y: 25,
    title: 'Glass Technique',
    content:
      "This piece uses the 'lost wax' casting method adapted from traditional metalworking techniques.",
    show: false,
  },
  {
    id: 3,
    x: 50,
    y: 70,
    title: 'Artist Signature',
    content:
      "The artist's mark here identifies this as a work by Maria Tallchief (Ojibwe, b. 1972).",
    show: false,
  },
])

const toggleHotspot = (id) => {
  const hotspot = hotspots.value.find((h) => h.id === id)
  if (hotspot) {
    hotspot.show = !hotspot.show
  }
}
</script>

<template>
  <div class="page">
    <div class="card">
      <header class="card-header">Indigenous Exhibit</header>

      <div class="image-container">
        <img class="exhibit-image" alt="Indigenous Vase" src="/fish.jpg" />

        <div
          v-for="hotspot in hotspots"
          :key="hotspot.id"
          class="hotspot-marker"
          :style="{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }"
          @mouseenter="toggleHotspot(hotspot.id)"
          @mouseleave="toggleHotspot(hotspot.id)"
        >
          <div class="marker-dot"></div>

          <div v-if="hotspot.show" class="hotspot-info">
            <h3>{{ hotspot.title }}</h3>
            <p>{{ hotspot.content }}</p>
          </div>
        </div>
      </div>

      <div class="text-body">
        Presented by the Art Alliance for Contemporary Glass, Clearly Indigenous: Native Visions
        Reimagined in Glass explores how Indigenous artists are pushing past traditional boundaries
        by blending cultural stories and symbols with the modern medium of glass. This unique
        exhibition highlights both the innovative ways Native artists are combining traditional
        influences with new techniques, and also traces the history of how glass art found its place
        in Indigenous communities. Featuring more than 100 stunning pieces, the show showcases the
        creativity of contemporary Native American and Indigenous artists from across the Pacific
        Rim.
      </div>

      <router-link to="/artshow">
        <button class="back-button"><</button>
      </router-link>
      <router-link to="/exhibits">
        <button class="next-button">></button>
      </router-link>
    </div>
  </div>
</template>

<style>
.image-container {
  position: relative;
  width: 100%;
  height: auto;
}

.exhibit-image {
  width: 100%;
  height: auto;
  display: block;
}

.hotspot-marker {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background-color: rgba(255, 215, 0, 0.8);
  border: 2px solid white;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.hotspot-marker:hover .marker-dot {
  transform: scale(1.3);
  background-color: rgba(255, 100, 0, 0.9);
}

.hotspot-info {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 20;
  animation: fadeIn 0.3s ease-out;
}

.hotspot-info h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.hotspot-info p {
  margin-bottom: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 768px) {
  .text-body {
    font-size: 1rem;
    padding: 1.5rem;
  }

  .hotspot-info {
    width: 200px;
  }
}
</style>
