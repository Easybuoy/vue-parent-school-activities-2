<template>
  <div class="sidebar-container">
    <div class="checkout" v-show="cartCount > 0">
      <button @click="toggleView">Cart ({{cartCount}})</button>
    </div>
    <div class="sidebar">
      <p>Sort by Fields</p>

      <ul>
        <li v-for="fieldFilter in fieldFilters" :key="fieldFilter.id">
          <input
            type="radio"
            :id="fieldFilter.id"
            :name="fieldFilter.name"
            :value="fieldFilter.value"
            @change="setFieldValue(fieldFilter.value)"
          />
          <label :for="fieldFilter.value">{{ fieldFilter.text }}</label>
        </li>
      </ul>

      <p>Sort by Order</p>
      <ul>
        <li v-for="orderFilter in orderFilters" :key="orderFilter.id">
          <input
            type="radio"
            :id="orderFilter.id"
            :name="orderFilter.name"
            :value="orderFilter.value"
            @change="setOrderValue(orderFilter.value)"
          />
          <label :for="orderFilter.value">{{ orderFilter.text }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import orderFilter from "../data/orderFilter";
import fieldFilter from "../data/fieldFilter";
import { FILTER_ORDER } from "../constants";

export default {
  name: "Sidebar",
  props: {
    filter: Function,
    toggleView: Function,
    cartCount: Number,
  },
  data: () => ({
    selectedFilter: "subject",
    selectedOrder: FILTER_ORDER.ASC,
    orderFilters: orderFilter,
    fieldFilters: fieldFilter,
  }),
  methods: {
    setFieldValue: function (value) {
      this.selectedFilter = value;
      this.filter(this.selectedFilter, this.selectedOrder);
    },
    setOrderValue: function (value) {
      this.selectedOrder = value;
      this.filter(this.selectedFilter, this.selectedOrder);
    },
  },
};
</script>

<style scoped>
.sidebar-container {
  width: 25%;
  height: 100vh;
}

.checkout {
  margin-top: 16px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  padding-left: 40px;
}

.sidebar p {
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 20px;
}

.sidebar ul {
  padding: 0;
}

.sidebar ul li {
  list-style: none;
}
</style>
