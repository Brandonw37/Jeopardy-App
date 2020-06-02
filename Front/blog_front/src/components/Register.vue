<template>
  <div class="Register">
      <h1>Jeopardy Game</h1>
      <h2>
        <router-link class="LoginTab" tag="button" to="/Login">Login</router-link>
        <router-link class="HomeTab" tag="button" to="/">Home</router-link>
      </h2>
      <body class="RegInputs">
        <div class="emailReg" @keypress = "Register" v-on:submit.prevent= "login">
            <input 
            type = "text"
            class = "email_inputReg"
            v-model ="email"
            placeholder = "Input Email.." />
        <div class="passwordReg">
            <input 
            type = "text"
            class = "password_inputReg"
            v-model ="password"
            placeholder = "Input password.." />
        <div class="re-enter">  
            <input 
            type="text" 
            class="re-enter"
            v-model ="reenter"
            placeholder="Re-enter password..">
          <div class="resultsReg">Message: {{ results.message }}
            </div>
          </div>
        </div>
      </div>
      </body>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
    email: "",
    password: "",
    reenter: "",
    results: {}
    };
  },
methods: {
Register: function(e){
  if (e.key == 'Enter') {
    if (this.password == this.reenter) {
axios.post('http://localhost:3000/api/v1/register', {
  email: this.email,
  password: this.password
}) 
.then (response => { 
    this.results = response.data
    alert(this.email + ' successfully registered!')
    this.$router.push('/Dashboard')
})
.catch(err => {
    console.log(err)
})
 } else {
  alert('Password did not match. Please re-enter')
 }
}
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/register.css'

</style>
