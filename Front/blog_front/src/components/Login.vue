<template>
  <div class="LoginPage">
    <h1>Jeopardy Game</h1>
    <h2>
      <router-link class = "home" to="/">Home</router-link>
    </h2>
    <div class="LoginFull" @keypress="login" v-on:submit.prevent="login">
      <input type="text" class="email_input" v-model="email" placeholder="Input Email.." />
      <div class="password">
        <input type="text" class="password_input" v-model="password" placeholder="Input password.." />
        <div class="results" v-if=false>Message: {{ results.success }} </div>
        <div>
        <router-link class="SignUp" to="/Register" tag="button">Sign Up Here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      results: {},
      Auth: {}
    };
  },
  methods: {
    login: function(e) {
      if (e.key == "Enter") {
        axios
          .post("http://localhost:3000/api/v1/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            this.results = response.data;
            const token = this.results.token;
            while (this.results.success == true) {
              axios
                .get("http://localhost:3000/api/v1/dashboard", {
                  headers: { Authorization: token }
                })
                .then(response => {
                  this.Auth = response.data;
                  console.log(this.Auth.success);
                  if (this.Auth.success == true) {
                    this.$router.push("/Dashboard");
                    alert(this.email + " successfully logged in!");
                  } else {
                    console.log("error dashboard");
                    console.log(this.Auth.success);
                  }
                });
              break;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/login.css";
</style>
