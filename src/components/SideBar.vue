<template>
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li v-for="app in apps" :key="app.name">
        <router-link :to="app.to">
          <a class="nav-link active" :to="app.to">
            <img :src="app.logo" class="logo" />
            {{app.name}}
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    const logoPath = "@/assets";
    return {
      apps: [
        {
          name: "JupyterHub",
          logo: require(`../assets/Jupyter_logo.svg`),
          to: "/jupyterhub"
        },
        {
          name: "Grafana",
          logo: require(`../assets/grafana_icon.svg`),
          to: "/grafana"
        },
        {
          name: "Airflow",
          logo: require(`../assets/airflow.svg`),
          to: "/airflow"
        },
        { name: "Livy", logo: require(`../assets/livy.svg`), to: "/livy" },
        {
          name: "SparkHistory",
          logo: require(`../assets/Apache_Spark_logo.svg`),
          to: "/history-server"
        },
        {
          name: "Prometheus",
          logo: require(`../assets/prometheusio-icon.svg`),
          to: "/prometheus"
        },
        {
          name: "Minio",
          logo: require(`../assets/minioio-icon.svg`),
          to: "/minio"
        },
        {
          name: "Neo4j",
          logo: require(`../assets/neo4j-icon.svg`),
          to: "/neo4j"
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