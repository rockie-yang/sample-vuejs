<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <!-- <h1 class="h3 mb-0 text-light">Data Lake Dashboard</h1> -->
      <div></div>
      <!-- <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-light shadow-sm"
        ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a -->
      .
    </div>

    <!-- Content Row -->
    <div class="row">
      <StatusCard title="Storage / Percentage" status="300 TB / 40%" />
      <StatusCard title="Models Running / Total" status="15 / 20" />

      <ProgressCard title="System Load" progress="70" />
      <!-- Earnings (Monthly) Card Example -->

      <StatusCard title="Monthly Cost" status="860 K SEK" />
    </div>

    <!-- Content Row -->

    <div class="row">
      <!-- Area Chart -->
      <LineCard :data="data" :options="options" />
      <PieCard />
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Content Column -->
      <TopLoadCard />
      <ScattCard />
    </div>
    <StatusCards />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import StatusCard from "@/components/StatusCard.vue";
import ProgressCard from "@/components/ProgressCard.vue";
import LineCard from "@/components/LineCard.vue";
import PieCard from "@/components/PieCard.vue";
import TopLoadCard from "@/components/TopLoadCard.vue";
import StatusCards from "@/components/StatusCards.vue";
import ScattCard from "@/components/ScattCard.vue";
export default Vue.extend({
  // components: { UseCaseDecks },
  components: {
    StatusCard,
    ProgressCard,
    LineCard,
    PieCard,
    TopLoadCard,
    StatusCards,
    ScattCard
  },
  data() {
    return {
      data: [1, 2, 3, 2, 1],
      options: {}
    };
  }
});
</script>