<script></script>
<template>
  <div id="app">
    <div class="parent-container">
      <ButtonGroup>
        <nav>
          <Button asChild v-slot="Exhibit">
            <router-link to="/exhibits" class="Exhibit"> Exhibits</router-link></Button
          >
          <Button asChild v-slot="Tour">
            <router-link to="/schedule" class="Tour"> Your Tour Schedule</router-link></Button
          >
          <Button asChild v-slot="Age">
            <router-link to="/age" class="Age">Complexity</router-link></Button
          >
          <Button asChild v-slot="BallEX">
            <router-link to="/ballex" class="BallEx">Ball Exhibit</router-link></Button
          >
          <Button asChild v-slot="Bob">
            <router-link to="/bobross" class="Bob">Bob Ross Exhibit</router-link></Button
          >
          <Button asChild v-slot="Art">
            <router-link to="/artshow" class="Art">Art Show</router-link></Button
          >
          <Button asChild v-slot="Indigenous">
            <router-link to="/indigenous" class="Indigenous">Indigenous</router-link></Button
          >
        </nav>
      </ButtonGroup>
    </div>
    <router-view />
  </div>
</template>

<style>
@import './assets/style.css';
</style>
