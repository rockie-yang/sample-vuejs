<template>
  <div>
    <Header />
    <UseCaseDecks />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UseCaseDecks from "@/components/UseCaseDecks.vue";
export default Vue.extend({
  components: { UseCaseDecks },
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
