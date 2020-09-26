<template>
  <div>
    <b-embed type="iframe" id="jupyterhub" :src="hostDNS + '/jupyterhub'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["hostDNS"]
});
</script>