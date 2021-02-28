<template>
  <div class="sidebar">
    <p>This is a sidebar</p>

    <ul>
      <li>
        <input
          type="radio"
          id="subject"
          name="filter"
          value="subject"
          @change="setRadioValue('subject')"
        />
        <label for="subject">Subject</label>
      </li>

      <li>
        <input
          type="radio"
          id="location"
          name="filter"
          value="location"
          @change="setRadioValue('location')"
        />
        <label for="location">Location</label>
      </li>
    </ul>

    <ul>
      <li v-for="orderFilter in orderFilters" :key="orderFilter.id">
        <input
          type="radio"
          :id="orderFilter.id"
          name="order"
          :value="orderFilter.value"
          @change="setOrderValue(orderFilter.value)"
        />
        <label for="subject">{{ orderFilter.text }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import orderFilter from "../data/orderFilter";

export default {
  name: "Sidebar",
  data: () => ({
    selectedFilter: "",
    selectedOrder: "",
    orderFilters: orderFilter,
  }),
  methods: {
    setRadioValue: function (value) {
      this.selectedFilter = value;
    },
    setOrderValue: function (value) {
      this.selectedOrder = value;
    },
  },
  mounted() {
    //   this.selectedFilter
  },
};
</script>

<style scoped>
.sidebar {
  width: 25%;
  height: 100vh;
}
</style>
