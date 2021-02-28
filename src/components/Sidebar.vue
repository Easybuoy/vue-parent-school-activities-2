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
          @change="setFieldValue(fieldFilter.value)"
        />
        <label :for="fieldFilter.value">{{ fieldFilter.text }}</label>
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
import fieldFilter from "../data/fieldFilter";
import { FILTER_ORDER } from '../constants';

export default {
  name: "Sidebar",
  props: {
    filter: Function,
  },
  data: () => ({
    selectedFilter: 'subject',
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
