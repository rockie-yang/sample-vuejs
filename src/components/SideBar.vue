<template>
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li v-for="app in apps" :key="app.name">
        <a class="nav-link active" :href="app.href" target="_blank">
          <img :src="app.logo" class="logo" />
          {{ app.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    const logoPath = "@/assets";
    const hostDNS = "lab.knockdata.com";
    return {
      apps: [
        {
          name: "JupyterHub",
          logo: require(`../assets/Jupyter_logo.svg`),
          to: "/jupyterhub",
          href: `https://${hostDNS}/jupyterhub`
        },
        {
          name: "Grafana",
          logo: require(`../assets/grafana_icon.svg`),
          to: "/grafana",
          href: `https://${hostDNS}/grafana`
        },
        {
          name: "Airflow",
          logo: require(`../assets/airflow.svg`),
          to: "/airflow",
          href: `https://${hostDNS}/airflow`
        },
        {
          name: "Livy",
          logo: require(`../assets/livy.svg`),
          to: "/livy",
          href: `https://${hostDNS}/livy`
        },
        {
          name: "SparkHistory",
          logo: require(`../assets/Apache_Spark_logo.svg`),
          to: "/history-server",
          href: `https://${hostDNS}/history-server`
        },
        {
          name: "Prometheus",
          logo: require(`../assets/prometheusio-icon.svg`),
          to: "/prometheus",
          href: `https://${hostDNS}/prometheus`
        },
        {
          name: "Minio",
          logo: require(`../assets/minioio-icon.svg`),
          to: "/minio",
          href: `https://minio.${hostDNS}`
        },
        {
          name: "Neo4j",
          logo: require(`../assets/neo4j-icon.svg`),
          to: "/neo4j",
          href: `https://neo4j.${hostDNS}`
        }
      ]
    };
  }
});
</script>
<style lang="scss" scoped>
.logo {
  width: 18px;
  height: 18px;
}
</style>