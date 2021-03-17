<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo-aerial-conseil.png">
    <SuperMarket msg="Welcome to Your Super Aerial Market"/>
  </div>
</template>

<script>
import SuperMarket from './components/SuperMarket.vue'

export default {
  name: 'App',
  components: {
    SuperMarket
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
