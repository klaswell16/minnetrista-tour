<script>
//Ages 8 and under info
</script>

<template>
  <div class="page">
    <div class="card">
      <header class="card-header">Art Show Exhibit</header>
      <img alt="String Art " src="/strings.webp" />
      <div class="text-body">
        <div>How many different colors do you see?</div>
        <img alt="Square Art " src="/squareart.webp" />
        <div>Can you see all the squares?</div>
        <img alt="Dog Art " src="/dogs.webp" />
        <div>What are the dogs doing?</div>
      </div>
      <div>
        <router-link to="/indigenous"><Button class="next-button" @click="">></Button></router-link>
        <router-link to="/bobross"><Button class="back-button" @click=""><</Button></router-link>
      </div>
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
