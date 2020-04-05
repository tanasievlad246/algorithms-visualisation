<template>
  <div id="app">
    <Element />
    <div class="footer">
      <p>&copy; Vlad-Cristian Tanasie</p>
      <div class="social">
        <a href="https://github.com/tanasievlad246" target="_">
          <font-awesome-icon :icon="['fab','github']" class="icon" />
        </a>
        <a href="https://www.linkedin.com/in/tanasie-vlad/" target="_">
          <font-awesome-icon :icon="['fab','linkedin']" class="icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Element from "./components/Element";
export default {
  name: "App",
  components: {
    Element
  }
};
</script>

<style lang='scss'>
body {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.footer {
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100vw;
  background-color: black;
  color: white;
  text-align: center;
  font-family: "Inria Sans", sans-serif;
  .social {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .icon {
    margin-right: 5px;
    font-size: 20px;
  }
}
</style>
