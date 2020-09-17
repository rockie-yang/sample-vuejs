<template>
  <div>
    <b-embed
      type="iframe"
      id="spark-history"
      class="full-window"
      src="http://lab.knockdata.com/history-server"
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