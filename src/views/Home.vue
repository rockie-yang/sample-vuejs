<template>
  <div>
    <Header />
    <!-- <UseCaseDecks /> -->
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import UseCaseDecks from "@/components/UseCaseDecks.vue";
import Dashboard from "@/components/Dashboard.vue";

export default Vue.extend({
  // components: { UseCaseDecks },
  components: { Dashboard },
  mounted() {
    // this.fetchData();
  },
  data() {
    return {};
  },
  methods: {}
});
// export default class Home extends Vue {}
</script>
