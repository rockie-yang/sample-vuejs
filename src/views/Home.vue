<template>
  <div>
    <Header />
    <b-container>
      <b-row align-v="center">
        <JobCard v-for="job in jobs" :key="job.id" :job="job" />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JobCard from "@/components/JobCard.vue";
export default Vue.extend({
  components: { JobCard },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      jobs: []
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("jobs.json");
      const val = await res.json();
      this.jobs = val;

      console.log(val);
    }
  }
});
// export default class Home extends Vue {}
</script>
