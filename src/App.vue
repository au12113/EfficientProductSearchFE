<template>
  <div id="app">
    <div class="container-fluid">
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100vw;
  /* margin-top: 60px; */
}
#body {
  min-height: 300px;
  height: 60vh;
}
#main {
  /* border: 2px solid black */
}
</style>
