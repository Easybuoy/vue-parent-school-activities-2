<template>
  <div class="shopping-cart-container">
    <div class="checkout">
      <button @click="toggleView">Back to Lessons</button>
    </div>
    <div class="sidebar">
      <p>Sort by Fields</p>

    
    </div>
  </div>
</template>

<script>


export default {
  name: "ShoppingCart",
  props: {
    toggleView: Function,
  },
  data: () => ({
   
  }),
  methods: {
    
  },
};
</script>

<style scoped>

</style>
