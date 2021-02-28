<template>
  <div class="lessons-container">
    <div v-for="lesson in lessons" :key="lesson.id" class="lesson">
      <Lesson :lesson="lesson" />
    </div>
  </div>
</template>

<script>
import Lesson from "./Lesson";

export default {
  name: "Lessons",
  props: {
    lessons: Array,
  },
  components: {
    Lesson,
  },
  mounted() {
    console.log(this.lessons, "this.lessons");
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

.lesson {
  background: #F1DEDE;
  width: 22%;
  margin: 16px;
  border-radius: 5px;
  text-align: center;
}
</style>
