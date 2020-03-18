<template>
  <div>
    <div v-for="elem in array" v-bind:key="elem" class="elem">{{ elem }}</div>
    <button v-on:click="bubbleSort">Sort</button>
    <button v-on:click="arrayPopulate">Reset</button>
    <Bar :name="name" :value="prop" />
  </div>
</template>

<script>
import * as HF from "../algorithms/helperfunctions";
import Bar from "./Bar.vue";

export default {
  name: "Element",
  components: {
    Bar
  },
  data() {
    return {
      array: [],
      name: "red",
      prop: 20
    };
  },
  methods: {
    arrayPopulate() {
      this.array = [];
      for (let i = 0; i < 40; i++) {
        let n = Math.floor(Math.random() * 100 + 5);
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
    }
  },
  created() {
    this.arrayPopulate();
  }
};
</script>

<style lang="scss">
</style>
