<template>
  <div id="app">
    <Lessons :lessons="lessons" />
  </div>
</template>

<script>
import Lessons from "./components/Lessons";
import lessonsData from './data/lessons'
export default {
  name: "App",
  components: {
    Lessons,
  },
  data() {
    return {
      lessons: lessonsData
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
