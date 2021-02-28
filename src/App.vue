<template>
  <div id="app">
    <Sidebar />
    <Lessons :lessons="lessons" />
  </div>
</template>

<script>
import Lessons from "./components/Lessons";
import Sidebar from "./components/Sidebar";
import lessonsData from "./data/lessons";

export default {
  name: "App",
  components: {
    Lessons,
    Sidebar,
  },
  data: () => ({
    lessons: lessonsData,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

#app {
  /* max-width: 1060px;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px; */
  display: flex;
  flex-wrap: wrap;
  font-family: "Baloo 2", cursive;
}
</style>
