<template>
  <div>
    <b-embed type="iframe" id="grafana" class="full-window" src="http://lab.knockdata.com/grafana" />
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