<template>
  <div>
    <div v-for="elem in array" v-bind:key="elem">{{elem}}</div>
    <button v-on:click="bubbleSort">Sort</button>
    <button v-on:click="spliceTest">Splice</button>
  </div>
</template>

<script>
import * as HF from "../algorithms/helperfunctions";

export default {
  name: "Element",
  props: {},
  data() {
    return {
      array: []
    };
  },
  methods: {
    arrayPopulate() {
      for (let i = 0; i < 40; i++) {
        let n = Math.floor(Math.random() * 100);
        if (!this.array.includes(n)) {
          this.array.push(n);
        }
      }
    },
    async bubbleSort() {
      let len = this.array.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (this.array[j] > this.array[j + 1]) {
            HF.arraySwap(this.array, j + 1, j);
            await HF.sleep();
          }
        }
      }
      return this.array;
    },
    spliceTest() {
      this.array.splice(1, 0, "99");
    }
  },
  created() {
    this.arrayPopulate();
  }
};
</script>

<style>
</style>