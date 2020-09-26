<template>
  <div>
    <b-embed
      type="iframe"
      id="spark-history"
      class="full-window"
      src="https://lab.knockdata.com//history-server"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["hostDNS"]
});
</script>

<style scoped>
.full-window {
  height: 100%;
}
</style>