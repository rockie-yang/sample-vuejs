<template>
  <div>
    <b-embed
      type="iframe"
      id="prometheus"
      class="full-window"
      src="http://lab.knockdata.com/prometheus"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.full-window {
  height: 100%;
}
</style>