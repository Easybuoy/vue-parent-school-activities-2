<template>
  <div class="lesson">
    
  </div>
</template>

<script>
export default {
  name: 'Lesson',
  props: {
    lessons: Array
  },
  mounted() {
      console.log(this.lessons, 'this.lessons')
  }
}
</script>

<style scoped>

</style>
