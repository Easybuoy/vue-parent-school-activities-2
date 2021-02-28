<template>
  <div class="">
    <img :src="lesson.image" alt="" />
    <p>Subject: {{ lesson.subject }}</p>
    <p>Location: {{ lesson.location }}</p>
    <p>Price: {{ lesson.price }}</p>
    <p>Location: {{ lesson.spaces }}</p>

    <button v-show="lesson.availability" :disabled="lesson.spaces === 0">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "Lesson",
  props: {
    lesson: Object,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

button {
  width: 70%;
  margin: 16px 0;
  padding: 10px;
  cursor: pointer;
  background: #cc2936;
  border: none;
  border-radius: 5px;
  color: white;
}

button:hover:enabled {
  color: #cc2936;
  background: white;
}

button:disabled,
button[disabled] {
  background-color: #cc2936;
  filter: brightness(70%);
  color: white;
  cursor: default;
}

p {
  margin: 0;
}
</style>
