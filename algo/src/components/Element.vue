<template>
  <div class="main">
    <div class="menu-bar">
      <button v-on:click="bubbleSort">Sort</button>
      <button v-on:click="insertionSort">Insertion Sort</button>
      <button v-on:click="selectionSort">selectionSort</button>
      <button v-on:click="arrayPopulate" id="reset">Reset</button>
    </div>
    <div class="elements">
      <p v-for="i in array" :key="i" :style="'height:'+i+'px'" class="elem">{{i}}</p>
    </div>
  </div>
</template>

<script>
import * as HF from "../algorithms/helperfunctions";
// import Bar from "./Bar.vue";

export default {
  name: "Element",
  components: {},
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
          this.array.push(n);
        }
      }
    },
    async bubbleSort() {
      let len = this.array.length;
      let element = this.$el.getElementsByTagName("p");
      let btn = this.$el.querySelector("#reset");
      for (let i = 0; i < len; i++) {
        btn.disabled = true;
        for (let j = 0; j < len - 1; j++) {
          if (this.array[j] > this.array[j + 1]) {
            element[j].style.backgroundColor = "green";
            element[j + 1].style.backgroundColor = "blue";
            HF.arraySwap(this.array, j + 1, j);
            await HF.sleep();
            element[j].style.backgroundColor = "red";
            element[j + 1].style.backgroundColor = "red";
          }
        }
      }
      btn.disabled = false;
    },
    async insertionSort() {
      let i,
        len = this.array.length,
        a = this.array,
        el,
        j;
      let btn = this.$el.querySelector("#reset");
      btn.disabled = true;
      for (i = 1; i < len; i++) {
        el = a[i];
        j = i;
        while (j > 0 && a[j - 1] > el) {
          a[j] = a[j - 1];
          j--;
        }

        HF.arraySetWithoutIndexes(a, j, el);
        await HF.sleep();
        btn.disabled = false;
      }
    },
    async selectionSort() {
      var minIdx,
        // temp,
        len = this.array.length,
        a = this.array;

      let btn = this.$el.querySelector("#reset");
      btn.disabled = true;
      for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
          if (a[j] < a[minIdx]) {
            minIdx = j;
          }
        }

        HF.arraySwap(a, i, minIdx);
        await HF.sleep();
      }
      btn.disabled = false;
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
      width: 30px;
      margin-left: 2px;
      background-color: red;
    }
  }
}
</style>