<template>
  <!-- <b-row align-v="center"> -->
  <b-container h-100>
    <b-card-group deck>
      <UseCase
        v-for="usecase in usecases"
        :key="usecase.id"
        :usecase="usecase"
      />
    </b-card-group>
  </b-container>
  <!-- </b-row> -->
</template>

<script lang="ts">
import Vue from "vue";
import UseCase from "@/components/UseCase.vue";
export default Vue.extend({
  components: { UseCase },
  props: ["usecases", "id"],
  mounted() {
    // console.log(this.deck);
  },
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