<template>
  <b-col md="3">
    <b-card
      :title="job.name"
      :img-src="'https://picsum.photos/600/300/?image=' + job.id"
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
  props: ["job", "id"],
  computed: {
    img() {
      // console.log(this.job);
      // const id = this.job.id;
      return "https://picsum.photos/600/300/?image=25";
    }
  }
});
</script>

<style lang="scss" scoped>
</style>