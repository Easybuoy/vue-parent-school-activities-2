<template>
  <div>
    <img :src="lesson.image" alt="" />
    <p>Subject: {{ lesson.subject }}</p>
    <p>Location: {{ lesson.location }}</p>
    <p>Price: ${{ lesson.price }}</p>
    <p>Spaces: {{ lesson.spaces }}</p>

    <button v-show="lesson.availability" :disabled="lesson.spaces === 0" @click="addToCart(lesson.id)">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "Lesson",
  props: {
    lesson: Object,
    addToCart: Function,
  },
};
</script>

<style scoped>




p {
  margin: 0;
}
</style>
