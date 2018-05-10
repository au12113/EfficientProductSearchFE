<template>
  <div id="app">
    <div class="container-fluid">
      <Header />
      <div id="body" class="row justify-content-md-center">
        <div class="col-md-3 col-xl-2">
          <Sidebar />
        </div>
        <div id="main" class="col-md-8 col-xl-10">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue'
import Sidebar from './components/Layout/Sidebar.vue'

export default {
  name: 'App',
  components: { Header, Sidebar }
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
  border: 2px solid black
}
</style>
