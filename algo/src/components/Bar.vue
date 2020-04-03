<template>
  <div :style="{backgroundColor: color}" class="div">
    <p :style="{height: value + 'px'}">{{value}}</p>
  </div>
</template>

<script>
export default {
  props: {
    color: String, //temporary
    value: Number
    //height: number
  }
};
</script>

<style lang="scss">
.div {
  background-color: red;
  text-align: center;
}
</style>