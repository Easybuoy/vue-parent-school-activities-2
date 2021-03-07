<template>
  <div class="shopping-cart-container">
    <div class="container">
      <div v-for="lesson in cartItems" :key="lesson.id" class="lesson">
        <img :src="lesson.image" alt="" />
        <p>Subject: {{ lesson.subject }}</p>
        <p>Location: {{ lesson.location }}</p>
        <p>Price: {{ lesson.price }}</p>
        <p>Spaces: {{ 5 - lesson.spaces }}</p>

        <button @click="removeFromCart(lesson.id)">Remove</button>
      </div>
    </div>

    <div class="checkout-container">
      <p>Name <input type="text" v-model="name" /></p>
      <p>Phone <input type="number" v-model="phone" /></p>

      <div class="cta">
        <button @click="checkout" v-show="name && phone">Checkout</button>
        <button @click="toggleView">Back to Lessons</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    toggleView: Function,
    cartItems: Array,
    removeFromCart: Function,
  },
  data: () => ({
    name: "",
    phone: "",
  }),
  methods: {
    checkout() {
      alert("Order has been submitted");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}

.checkout-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cta {
  display: flex;
  justify-content: center;
  width: 100%;
}

.cta button {
  width: 45%;
  margin: 0 8px;
}

input {
  border: none;
  border-bottom: 2px solid black;
  outline-color: white;
}

.checkout-container p {
  width: 45%;
  margin-top: 24px;
}
</style>
