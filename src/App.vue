<template>
  <div id="app">
    <top></top>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import top from './components/index/top'
  export default {
    components:{top},
    name: 'App'
  }
</script>

<style>
html body {
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
