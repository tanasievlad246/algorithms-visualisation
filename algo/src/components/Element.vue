<template>
  <div class="main">
    <div class="menu-bar">
      <button v-on:click="bubbleSort(time)" class="button-main">Bubble Sort</button>
      <button v-on:click="insertionSort(time)" class="button-main">Insertion Sort</button>
      <button v-on:click="selectionSort(time)" class="button-main">Selection Sort</button>
      <button v-on:click="arrayPopulate(bars)" id="reset" class="button-main">Reset</button>
      <input
        type="range"
        min="5"
        max="40"
        value="20npm"
        class="slider"
        @change="barNums($event); arrayPopulate(bars)"
      />
      <select name="speed" id="speed" class="select" @change="timeSelect($event)">
        <option value="100">100ms</option>
        <option value="500">500ms</option>
        <option value="1000">1s</option>
        <option value="1500">1.5s</option>
      </select>
    </div>
    <div class="elements">
      <p v-for="i in array" :key="i" :style="'height:'+i+'px'" class="elem">{{i}}</p>
    </div>
    <a href="http://www.freepik.com">Designed by vectorpouch / Freepik</a>
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
      time: 50,
      bars: 20
    };
  },
  methods: {
    barNums(event) {
      this.bars = event.target.value;
    },
    timeSelect(event) {
      this.time = event.target.value;
    },
    arrayPopulate(barsN) {
      this.array = [];
      for (let i = 0; i <= barsN; i++) {
        let n = Math.floor(Math.random() * 120 + 20);
        if (!this.array.includes(n)) {
          this.array.push(n);
        }
      }
    },
    async bubbleSort(sleepTime) {
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
            await HF.sleep(sleepTime);
            element[j].style.backgroundColor = "red";
            element[j + 1].style.backgroundColor = "red";
          }
        }
      }
      btn.disabled = false;
    },
    async insertionSort(sleepTime) {
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
        await HF.sleep(sleepTime);
        btn.disabled = false;
      }
    },
    async selectionSort(sleepTime) {
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
        await HF.sleep(sleepTime);
      }
      btn.disabled = false;
    }
  },
  created() {
    this.arrayPopulate(this.bars);
  }
};
</script>

<style lang="scss">
@import "../styles/Element.scss";
</style>