<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> | <router-link to="/exhibits"> Exhibits</router-link> |
      <router-link to="/schedule"> Your Tour Schedule</router-link> |
      <router-link to="/age">Age Group</router-link> |
      <router-link to="/ballex">Ball Exhibit</router-link>
    </nav>
    <router-view />
  </div>
</template>
