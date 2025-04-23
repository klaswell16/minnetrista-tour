<script setup>
const exhibits = [
  {
    id: 1,
    name: 'Bob Ross Experience',
    description: 'Immerse yourself in the world of happy little trees and joyful painting.',
    image: '/bobross.jpeg',
  },
  {
    id: 2,
    name: 'Indigenous Art',
    description: 'Celebrating the rich cultural heritage of Native American communities.',
    image: '/fish.jpg',
  },
  {
    id: 3,
    name: 'Contemporary Art Show',
    description: 'Cutting-edge works from emerging and established artists.',
    image: '/strings.webp',
  },
  {
    id: 4,
    name: 'Ball Family Legacy',
    description: 'Exploring the history and impact of the Ball family in our community.',
    image: '/BallStateFlyOver.jpg',
  },
]
</script>

<template>
  <div class="exhibits-container">
    <header class="page-header">
      <h1>Current Exhibits at Minnetrista</h1>
      <p class="subtitle">Explore our featured collections and experiences</p>
    </header>

    <div class="exhibits-grid">
      <div class="exhibit-card" v-for="exhibit in exhibits" :key="exhibit.id">
        <h3 class="exhibit-title">{{ exhibit.name }}</h3>
        <p class="exhibit-description">{{ exhibit.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exhibit-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.exhibits-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  font-weight: 300;
}

.exhibits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.exhibit-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.exhibit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.exhibit-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #eee;
}

.exhibit-title {
  font-size: 1.4rem;
  color: #2c3e50;
  padding: 1rem 1.5rem 0;
  margin: 0;
}

.exhibit-description {
  color: #7f8c8d;
  padding: 0 1.5rem 1.5rem;
  margin: 0.5rem 0 0;
  line-height: 1.5;
}

.learn-more-btn {
  display: block;
  width: calc(100% - 3rem);
  margin: 0 1.5rem 1.5rem;
  padding: 0.8rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #2980b9;
}
</style>
