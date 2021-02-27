<template>
  <div class="hello">
    
  </div>
</template>

<script>
export default {
  name: 'Lessons',
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
