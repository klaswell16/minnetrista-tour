<script>import Button from 'primevue/button';</script>
<template>
  <div id="app">
    <nav>
      <Button asChild v-slot="Home">
      <router-link to="/" class="Home">Home</router-link></Button>
      <Button asChild v-slot="Exhibit">
      <router-link to="/exhibits" class="Exhibit"> Exhibits</router-link></Button>
      <Button asChild v-slot="Tour">
      <router-link to="/schedule" class="Tour"> Your Tour Schedule</router-link></Button>
      <Button asChild v-slot="Age">
      <router-link to="/age" class="Age">Age Group</router-link></Button>
      <Button asChild v-slot ="BallEX">
      <router-link to="/ballex" class="BallEx">Ball Exhibit</router-link></Button>
      <Button asChild v-slot="Bob">
      <router-link to="/bobross" class="Bob">Bob Ross Exhibit</router-link></Button>
      <Button asChild v-slot="Art">
      <router-link to="/artshow" class="Art">Art Show</router-link></Button>
      <Button asChild v-slot="Indigenous">
      <router-link to="/indigenous" class="Indigenous">Indigenous</router-link></Button>

    </nav>
    <router-view />
  </div>
</template>

<style>@import './assets/style.css'</style>
