<template>
  <div>
    <div v-for="elem in array" v-bind:key="elem">{{elem}}</div>
    <button v-on:click="bubbleSort">Sort</button>
    <button v-on:click="spliceTest">Splice</button>
  </div>
</template>

<script>
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
    bubbleSort() {
      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array.length; j++) {
          if (this.array[j] > this.array[j + 1]) {
            let temp = this.array[j];
            this.array[j] = this.array[j + 1];
            this.array[j + 1] = temp;
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