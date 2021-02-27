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
#app {
  max-width: 1060px;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
