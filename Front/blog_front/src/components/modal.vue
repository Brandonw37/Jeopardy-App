<template>
  <div id="modal">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Jeopardy Questions
        </slot>
      </header>

      <section class="modal-boddy">
        <slot name="body">
          <input type="text" class="q1" placeholder="Input question 1" v-model="question1"/>
          <input type="text" class="q2" placeholder="Input question 2" v-model="question2" />
          <input type="text" class="q3" placeholder="Input question 3" v-model="question3" />
          <input type="text" class="q4" placeholder="Input question 4" v-model="question4" />
          <input type="text" class="q5" placeholder="Input question 5" v-model="question5" />
          <input type="text" class="q6" placeholder="Input question 6" v-model="question6" />
          <input type="text" class="q7" placeholder="Input question 7" v-model="question7" />
          <input type="text" class="q8" placeholder="Input question 8" v-model="question8" />
          <input type="text" class="q9" placeholder="Input question 9" v-model="question9" />
          </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer">
          <button type="button" class="inputSubmit" @click="submit">Submit</button>
          <div>
          <button type="button" class="btn-green" @click="close">Close</button>
          </div>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { serverBus } from '../main.js';

export default {
  name: "modal",

  data() {
    return {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      results: {}
    };
  },

  methods: {
    submit () {
      axios.put('http://localhost:3000/api/v1/dashboard', {
    question1:this.question1,
    question2:this.question2,
    question3:this.question3,
    question4:this.question4,
    question5:this.question5,
    question6:this.question6,
    question7:this.question7,
    question8:this.question8,
    question9:this.question9
      })
      .then(response =>{
        this.results = response.data
        serverBus.$emit('submit', this.results);
        console.log(this.results)
      })
      .catch(error =>{
        console.log(error)
      })
    },
    close() {
      this.$emit("close");
      this.question1= '';
      this.question2= '';
      this.question3= '';
      this.question4= '';
      this.question5= '';
      this.question6= '';
      this.question7= '';
      this.question8= '';
      this.question9= '';
    }
  }
};
</script>

<style scoped>
@import  '../assets/css/modal.css'

</style>