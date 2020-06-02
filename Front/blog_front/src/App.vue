<template>
  <div id="app">
    <h1>
    <router-view></router-view>
    </h1>
    <body>
    <img src='./assets/images/ripple.jpg'>
    </body>
  </div>
</template>

<script>

export default {
  name: 'App', 
/*  components: {
    Homepage,
  } */
}
</script>

<style>
@import './assets/css/app.css'
</style>
