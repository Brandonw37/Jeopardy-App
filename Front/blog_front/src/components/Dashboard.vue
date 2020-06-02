<template>
<div class="Dashboard">
  <router-link class="goHome" tag="button" to="/">Home</router-link>
  <h1>Jeopardy Game</h1>
  <body>
    <div class="points1">
      <button class="ques1" @click ="showModalOut1">10</button>
      <button class="ques2" @click ="showModalOut2">10</button>
      <button class="ques3" @click ="showModalOut3">10</button>
    </div>
    <div class="points2">
      <button class="ques4" @click ="showModalOut4">20</button>
      <button class="ques5" @click ="showModalOut5">20</button>
      <button class="ques6" @click ="showModalOut6">20</button>
    </div>
    <div class="points3">
      <button class="ques7" @click ="showModalOut7">30</button>
      <button class="ques8" @click ="showModalOut8">30</button>
      <button class="ques9" @click ="showModalOut9">30</button>
    <modalOut v-show="isModalOutVisible" @close="closeModal"/>
    </div>
    <button type="button" class="btn" @click="showModal">Input Questions</button>
    <modal v-show="isModalVisible" @close="closeModal" />
  </body>
</div>
</template>

<script>
import modal from "./modal.vue";
import modalOut from "./modalOut.vue";
import {serverBus} from "../main";

export default {
  name: "Dashboard",
  components: {
    modalOut,
    modal,
  },

  data() {
    return {
      isModalVisible: false,
      isModalOutVisible: false,
      q1: true,
      q2: true,
      q3: true,
      q4: true,
      q5: true,
      q6: true,
      q7: true,
      q8: true,
      q9: true,
    };
  },

  methods: {
    showModalOut1() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut1', this.q1);
      console.log(this.q1)
    },
        showModalOut2() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut2', this.q2);
      console.log(this.q2)
    },
        showModalOut3() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut3', this.q3);
      console.log(this.q3)
    },
        showModalOut4() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut4', this.q4);
      console.log(this.q4)
    },
        showModalOut5() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut5', this.q5);
      console.log(this.q5)
    },
        showModalOut6() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut6', this.q6);
      console.log(this.q6)
    },
        showModalOut7() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut7', this.q7);
      console.log(this.q7)
    },
        showModalOut8() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut8', this.q8);
      console.log(this.q8)
    },
        showModalOut9() {
      this.isModalOutVisible = true;
      serverBus.$emit('showModalOut9', this.q9);
      console.log(this.q9)
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.isModalOutVisible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/dashboard.css";
</style>
