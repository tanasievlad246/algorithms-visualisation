<template>
  <div>
    <p :style="{color: name, fontSize: value + 'px'}">TEST</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String, //temporary
    value: Number
    //height: number
  }
};
</script>

<style lang="scss">
</style>