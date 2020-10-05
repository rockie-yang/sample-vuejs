<template>
  <!-- <b-col md="3" class="h-100"> -->
  <b-card
    :title="usecase.name"
    img-top
    tag="article"
    style="max-width:20rem max-height=10rem height=10rem"
    class="mb-2 text-center"
    footer-tag="footer"
  >
    <b-card-text>&nbsp;</b-card-text>
    <b-card-img :src="usecase.img" width="100px" height="120px" />
    <b-card-text>&nbsp;</b-card-text>
    <b-card-text>{{ usecase.description }}</b-card-text>
    <template v-slot:footer>
      <div class="center-block text-center" align="center">
        <router-link :to="usecase.url">
          <b-button variant="primary">Knock It</b-button>
        </router-link>
      </div>
    </template>
  </b-card>
  <!-- </b-col> -->
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["usecase", "id"],
  mounted() {
    // console.log(this.usecase);
    console.log();
  },
  computed: {
    img() {
      // console.log(this.job);
      // const id = this.job.id;
      return require(this.usecase.img);
    }
  }
});
</script>

<style lang="scss" scoped>
@media (min-width: 34em) {
  .card-deck > .card {
    width: 29%;
    flex-wrap: wrap;
    flex: initial;
  }
}
</style>