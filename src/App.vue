<template>
  <div id="app">
    <Sidebar :filter="filter" />
    <Lessons :lessons="lessons" />
  </div>
</template>

<script>
import Lessons from "./components/Lessons";
import Sidebar from "./components/Sidebar";
import lessonsData from "./data/lessons";
import { sortPrices, sortFields, sortAvailability } from "./utils";

export default {
  name: "App",
  components: {
    Lessons,
    Sidebar,
  },
  data: () => ({
    lessons: lessonsData,
  }),
  methods: {
    filter(field, order) {
      if (field === "price") {
        const sortedLessons = sortPrices(lessonsData, field, order);
        this.lessons = sortedLessons;
        return;
      } else if (field === "availability") {
        const sortedLessons = sortAvailability(lessonsData, field, order);
        this.lessons = sortedLessons;
        return;
      }

      console.log(field, order);
      const sortedLessons = sortFields(lessonsData, field, order);
      console.log(sortedLessons, "sss");
      this.lessons = sortedLessons;
      return;
    },
  },
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
