<template>
  <div class="Homepage">
      <h1>
        <router-link class="Login" tag="button" to="/Login">Login</router-link>
        <router-link class="Register" tag="button" to="/Register">Sign Up</router-link>
      </h1>
      <h2>Jeopardy Game</h2>
    <div>
      <body>
        <p>
        This is a 9 question jeapardy game created by Brandon Wong. Please feel free to sign up or login to play!
        </p>
      </body>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Homepage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/homepage.css'

</style>
