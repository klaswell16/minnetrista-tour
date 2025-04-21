<script>
//Ages 9 - 15 info
</script>

<template>
  <div>
    <header>Ross Exhibit</header>

    <div class="page">
      <img alt="Bob Ross " src="/bobross.jpeg" />
      <div class="text-body">
        Bob Ross was a super chill painter with a giant poofy afro and the calmest voice ever. He
        had a TV show called The Joy of Painting, where he showed people how to paint cool nature
        scenes like snowy mountains, peaceful lakes, and his favorite—“happy little trees”! What
        made Bob awesome wasnt just his art—it was how he made everyone feel like they could be
        artists too. Hed say stuff like, “There are no mistakes, just happy accidents,” and “Lets
        give this tree a friend.” He made painting fun, relaxing, and a little bit silly. Even
        though Bob passed away in 1995, kids and adults still love his videos today. So grab a
        brush, smile big, and remember—theres a little artist in you, too!
      </div>
    </div>
    <div>
      <router-link to="/artshow"><Button class="next-button" @click="">></Button></router-link>
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
