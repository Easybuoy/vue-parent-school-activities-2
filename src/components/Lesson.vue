<template>
  <div class="">
    <img :src="lesson.image" alt="" />
    <p>Subject: {{ lesson.price }}</p>
    <p>Location: {{ lesson.location }}</p>
    <p>Price: {{ lesson.price }}</p>
    <p>Location: {{ lesson.spaces }}</p>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "Lesson",
  props: {
    lesson: Object,
  },
  mounted() {
    console.log(this.lessons, "this.lessons");
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

button {
    width: 70%;
    margin-bottom: 16px;
    padding: 10px;
    cursor: pointer;
    background: #CC2936;
    border: none;
    border-radius: 5px;
    color: white;
}
</style>
