<template>
  <b-col md="3">
    <b-card
      :title="job.name"
      :img-src="img"
      img-top
      tag="article"
      style="max-width:20rem"
      class="mb-2"
      footer="Card footer"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
      <b-button variant="primary">Apply</b-button>
    </b-card>
  </b-col>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["job"],
  computed: {
    img() {
      return `https://picsum.photos/600/300/?image=${this.job.id}`;
    }
  }
});
</script>

<style lang="scss" scoped>
</style>