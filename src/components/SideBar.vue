<template>
  <div class="sidebar-sticky">
    <ul class="nav flex-column">
      <li v-for="app in apps" :key="app.name">
        <a class="nav-link active text-light" :href="app.href" target="_blank">
          <img :src="app.logo" class="logo" />
          <span class="app">{{ app.name }}</span>
        </a>
      </li>
      <li class="divider nav-link active text-light"></li>
      <!-- <li class="nav-link active text-light"> -->
      <li>
        <router-link to="/usecases" class="divider nav-link active text-light"
          ><img :src="usecase.logo" class="logo" /><span class="app">{{
            usecase.name
          }}</span></router-link
        >
      </li>
      <!-- </li> -->
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    const logoPath = "@/assets";
    const hostDNS = "lab.skysager.com";
    return {
      usecase: {
        name: "Solutions",
        logo: require(`../assets/solution.svg`),
        to: "/usecases"
      },
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
          href: `https://neo4j.${hostDNS}:7473`
        },
        {
          name: "Flyte",
          logo: require(`../assets/flyte.svg`),
          to: "/flyte",
          href: `https://flyte.${hostDNS}/console`
        }
      ]
    };
  }
});
</script>
<style lang="scss" scoped>
.logo {
  width: 2.5em;
  height: 2.5em;
  border: 0;
  padding: 0;
  // background: #32325d;
}

.sidebar-sticky {
  background: #27293c;
}
.app {
  padding-left: 12px;
  font-weight: 550;
  color: orange;
}
</style>