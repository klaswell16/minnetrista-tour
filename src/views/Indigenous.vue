<script></script>
<template>
  <header>Indigenous Exhibit</header>

  <div class="page">
    <img alt="Indigenous Vase" src="/fish.jpg" />
    <div>
      Presented by the Art Alliance for Contemporary Glass, Clearly Indigenous: Native Visions
      Reimagined in Glass explores how Indigenous artists are pushing past traditional boundaries by
      blending cultural stories and symbols with the modern medium of glass. This unique exhibition
      highlights both the innovative ways Native artists are combining traditional influences with
      new techniques, and also traces the history of how glass art found its place in Indigenous
      communities. Featuring more than 100 stunning pieces, the show showcases the creativity of
      contemporary Native American and Indigenous artists from across the Pacific Rim.
    </div>
    <div>
      <router-link to="/exhibits"><Button class="next-button" @click="">></Button></router-link>
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
