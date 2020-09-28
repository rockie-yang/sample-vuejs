<template>
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li v-for="app in apps" :key="app.name">
        <!-- <router-link :to="app.to">
          <a class="nav-link active" :to="app.to">
            <img :src="app.logo" class="logo" />
            {{app.name}}
          </a>
        </router-link> -->
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
    const hostDNS = "https://lab.knockdata.com";
    return {
      apps: [
        {
          name: "JupyterHub",
          logo: require(`../assets/Jupyter_logo.svg`),
          to: "/jupyterhub",
          href: `${hostDNS}/jupyterhub`
        },
        {
          name: "Grafana",
          logo: require(`../assets/grafana_icon.svg`),
          to: "/grafana",
          href: `${hostDNS}/grafana`
        },
        {
          name: "Airflow",
          logo: require(`../assets/airflow.svg`),
          to: "/airflow",
          href: `${hostDNS}/airflow`
        },
        {
          name: "Livy",
          logo: require(`../assets/livy.svg`),
          to: "/livy",
          href: `${hostDNS}/livy`
        },
        {
          name: "SparkHistory",
          logo: require(`../assets/Apache_Spark_logo.svg`),
          to: "/history-server",
          href: `${hostDNS}/history-server`
        },
        {
          name: "Prometheus",
          logo: require(`../assets/prometheusio-icon.svg`),
          to: "/prometheus",
          href: `${hostDNS}/prometheus`
        },
        {
          name: "Minio",
          logo: require(`../assets/minioio-icon.svg`),
          to: "/minio",
          href: `https://minio.knockdata.com`
        },
        {
          name: "Neo4j",
          logo: require(`../assets/neo4j-icon.svg`),
          to: "/neo4j",
          href: `${hostDNS}/neo4j`
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