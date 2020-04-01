<template>
  <div class="main">
    <div class="menu-bar">
      <button v-on:click="bubbleSort">Sort</button>
      <button v-on:click="arrayPopulate">Reset</button>
    </div>
    <div class="elements">
      <Bar v-for="elem in array" :key="elem.n" :color="elem.color" :value="elem.n" class="elem" />
    </div>
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
      color: "",
      current: "blue",
      comparing: "green"
    };
  },
  methods: {
    arrayPopulate() {
      this.array = [];
      for (let i = 0; i <= 30; i++) {
        let n = Math.floor(Math.random() * 100 + 10);
        if (!this.array.includes(n)) {
          this.array.push({ n, color: "red" });
        }
      }
    },
    async bubbleSort() {
      //let elements = document.getElementsByTagName("Bar");
      let len = this.array.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
          if (this.array[j].n > this.array[j + 1].n) {
            this.array[j].color = this.current;
            this.array[j + 1].color = this.comparing;
            HF.arraySwap(this.array, j + 1, j);
            await HF.sleep();
            this.array[j].color = "red";
            this.array[j + 1].color = "red";
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
.main {
  display: flex;
  flex-direction: column;

  .elements {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 20%;

    .elem {
      width: 25px;
      margin-left: 2px;
    }
  }
}
</style>