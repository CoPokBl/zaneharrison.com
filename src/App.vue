<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>

  <div id="nav-bar-div">
    <NavBar/>
  </div>

  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#nav-bar-div {
  margin-bottom: 80px;
}

#navbar {
  background-color: #0c1a1f;
}

body {
  background-color: #1B2D32;
  margin-left: 30px;
  font-family: sans-serif;
}

@media all and (max-width: 99999px) {
  .desktop {
    display:block;
    position: relative;
    left: 0;
  }
  .mobile {
    display:none;
    position: absolute;
    left: -9999px;
  }
}

@media all and (max-width: 760px) {
  .desktop {
    display:none;
    position: absolute;
    left: -9999px;
  }
  .mobile {
    display:block;
    position: relative;
    left: 0;
  }
}
</style>