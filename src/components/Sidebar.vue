<template>
  <div class="sidebar">
    <p>This is a sidebar</p>

    <ul>
      <li v-for="fieldFilter in fieldFilters" :key="fieldFilter.id">
        <input
          type="radio"
          :id="fieldFilter.id"
          :name="fieldFilter.name"
          :value="fieldFilter.value"
          @change="setRadioValue(fieldFilter.value)"
        />
        <label :for="fieldFilter.value">{{fieldFilter.text}}</label>
      </li>
    </ul>

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
</template>

<script>
import orderFilter from "../data/orderFilter";
import fieldFilter from '../data/fieldFilter';

export default {
  name: "Sidebar",
  data: () => ({
    selectedFilter: "",
    selectedOrder: "",
    orderFilters: orderFilter,
    fieldFilters: fieldFilter,
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
