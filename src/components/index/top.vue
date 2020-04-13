<template>
  <div class="top">
    <router-link to="/my">to my</router-link>
    {{msg}}
    <router-link to="/i">to I</router-link>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to My'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
    width:100%;
    height:50px;
    line-height:50px;
    background-color:red;
    text-align:center;
  }
</style>