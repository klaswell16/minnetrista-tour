<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/exhibits"> Exhibits</router-link>
    </nav>
    <router-view />
  </div>
</template>
