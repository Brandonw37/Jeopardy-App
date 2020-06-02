<template>
  <div id="modalOut">
    <div class="modalOut">
      <header class="modal-header">
        <slot name="header">
          Jeopardy Question
        </slot>
      </header>

      <section class="modal-boddy">
        <slot name="body">
          <div class="question1" v-if="q1 == true">{{results.question1}}</div>
          <div class="question2" v-if="q2 == true">{{results.question2}}</div>
          <div class="question3" v-if="q3 == true">{{results.question3}}</div>
          <div class="question4" v-if="q4 == true">{{results.question4}}</div>
          <div class="question5" v-if="q5 == true">{{results.question5}}</div>
          <div class="question6" v-if="q6 == true">{{results.question6}}</div>
          <div class="question7" v-if="q7 == true">{{results.question7}}</div>
          <div class="question8" v-if="q8 == true">{{results.question8}}</div>
          <div class="question9" v-if="q9 == true">{{results.question9}}</div>
          </slot>
          {{countDown}}
      </section>

      <footer class="modal-footer">
        <slot name="footer">
          <button type="button" class="btn-green" @click="close">Close</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import {serverBus} from '../main'

export default {
  name: "modalOut",

    data() {
        return{
            results: {},
            q1: {},
            q2: {},
            q3: {},
            q4: {},
            q5: {},
            q6: {},
            q7: {},
            q8: {},
            q9: {},
            countDown: 30
        }
    },

  created() {
    serverBus.$on('submit', (results) => {
      this.results = results;
    });
    serverBus.$on('showModalOut1', (q1)=>{
      this.q1 = q1;
      console.log(q1);
    });
    serverBus.$on('showModalOut2', (q2)=>{
      this.q2 = q2;
      console.log(q2);
    });
    serverBus.$on('showModalOut3', (q3)=>{
      this.q3 = q3;
      console.log(q3);
    });
    serverBus.$on('showModalOut4', (q4)=>{
      this.q4 = q4;
      console.log(q4);
    });
    serverBus.$on('showModalOut5', (q5)=>{
      this.q5 = q5;
      console.log(q5);
    });
    serverBus.$on('showModalOut6', (q6)=>{
      this.q6 = q6;
      console.log(q6);
    });
    serverBus.$on('showModalOut7', (q7)=>{
      this.q7 = q7;
      console.log(q7);
    });
    serverBus.$on('showModalOut8', (q8)=>{
      this.q8 = q8;
      console.log(q8);
    });
    serverBus.$on('showModalOut9', (q9)=>{
      this.q9 = q9;
      console.log(q9);
    });
    this.countDownTimer()
  },

  methods: {
    countDownTimer() {
      if(this.countDown > 0) {
        setTimeout(()=> {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000)
      } else if (this.countDown === 0) {
        return
      }
    },

    close() {
      this.$emit("close");
      this.q1 = '';
      this.q2 = '';
      this.q3 = '';
      this.q4 = '';
      this.q5 = '';
      this.q6 = '';
      this.q7 = '';
      this.q8 = '';
      this.q9 = '';
      this.countDown = 30;
      this.reset.countDownTimer();
    }
}    
}
</script>

<style scoped>
@import  '../assets/css/modalOut.css'

</style>