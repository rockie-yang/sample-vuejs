<template>
  <div class="col-xl-8 col-lg-7">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div
        class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
      >
        <h6 class="m-0 font-weight-bold text-primary">Live Models</h6>
        <!-- <b-dropdown
          id="dropdown-buttons"
          text=""
          class="m-2 shadow"
          variant="transparent"
        >
          <b-dropdown-item-button>I'm a button</b-dropdown-item-button>
          <b-dropdown-item-button active
            >I'm a active button</b-dropdown-item-button
          >
        </b-dropdown> -->
      </div>
      <div class="card-body">
        <line-chart :data="chartData"></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ["data", "options"],
  data() {
    return {
      chartData: {
        "2020-10-10": 11,
        "2020-10-11": 6,
        "2020-10-12": 9,
        "2020-10-13": 11,
        "2020-10-14": 8,
        "2020-10-15": 3,
        "2020-10-16": 9,
        "2020-10-17": 15
      }
    };
  }
};
</script>