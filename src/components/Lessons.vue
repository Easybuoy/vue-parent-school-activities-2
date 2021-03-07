<template>
  <div class="lessons-container">
    <div v-for="lesson in lessons" :key="lesson.id" class="lesson">
      <Lesson :lesson="lesson" :addToCart="addToCart" />
    </div>
  </div>
</template>

<script>
import Lesson from "./Lesson";

export default {
  name: "Lessons",
  props: {
    lessons: Array,
    addToCart: Function,
  },
  components: {
    Lesson,
  },
};
</script>

<style scoped>
.lessons-container {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  justify-content: space-around;
  overflow-y: scroll;
  height: 100vh;
}
</style>
