<template>
  <div id="app">
    <div v-if="showShoppingCart === false" class="main">
      <Sidebar
        :filter="filter"
        :toggleView="toggleView"
        :cartCount="cartCount"
      />
      <Lessons :lessons="lessons" :addToCart="addToCart" />
    </div>

    <div v-else class="cart">
      <ShoppingCart
        :toggleView="toggleView"
        :cartItems="cartItems"
        :removeFromCart="removeFromCart"
        :checkout="checkout"
      />
    </div>
  </div>
</template>

<script>
import Lessons from "./components/Lessons";
import Sidebar from "./components/Sidebar";
import ShoppingCart from "./components/ShoppingCart";
import lessonsData from "./data/lessons";
import { sortPrices, sortFields, sortAvailability } from "./utils";

export default {
  name: "App",
  components: {
    Lessons,
    Sidebar,
    ShoppingCart,
  },
  data: () => ({
    lessons: lessonsData,
    showShoppingCart: false,
    cartCount: 0,
    cartItems: [],
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

      const sortedLessons = sortFields(lessonsData, field, order);
      this.lessons = sortedLessons;
      return;
    },
    toggleView() {
      this.showShoppingCart = !this.showShoppingCart;
    },
    addToCart(id) {
      const existingLesson = this.lessons.find((lesson) => lesson.id === id);
      if (existingLesson) {
        this.lessons.map((lesson) => {
          if (lesson.id === id) {
            lesson.spaces--;
          }
          return lesson;
        });

        const existingLessonInCart = this.cartItems.find(
          (lesson) => lesson.id === id
        );
        if (!existingLessonInCart) {
          this.cartCount = this.cartCount + 1;
          this.cartItems.push(existingLesson);
        }
      }
    },
    removeFromCart(id) {
      const existingLesson = this.lessons.find((lesson) => lesson.id === id);
      if (existingLesson) {
        this.lessons.map((lesson) => {
          if (lesson.id === id) {
            lesson.spaces++;
          }
          return lesson;
        });

        const existingLessonInCart = this.cartItems.find(
          (lesson) => lesson.id === id
        );
        if (existingLessonInCart) {
          if (existingLessonInCart.spaces === 5) {
            this.cartCount = this.cartCount - 1;
            this.cartItems = this.cartItems.filter((item) => item.id !== id);

            if (this.cartItems.length === 0) {
              alert("Cart is now empty");
              this.toggleView();
            }
          }
        }
      }
    },
    checkout() {
      alert("Order has been submitted");
      this.cartCount = 0;
      this.cartItems = [];
      this.toggleView();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

#app {
  display: flex;
  flex-wrap: wrap;
  font-family: "Baloo 2", cursive;
}

.main {
  display: flex;
}

.cart {
  width: 100%;
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
  border: 1px solid #cc2936;
}

button:disabled,
button[disabled] {
  background-color: #cc2936;
  filter: brightness(70%);
  color: white;
  cursor: default;
}

img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.lessons-container {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  justify-content: space-around;
  overflow-y: scroll;
  height: 100vh;
}

.lesson {
  background: #f1dede;
  width: 22%;
  margin: 16px;
  border-radius: 5px;
  text-align: center;
}
</style>
