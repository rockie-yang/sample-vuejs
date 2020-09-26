import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const hostDNS = "https://lab.knockdata.com";
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Let's Start Knock Data" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/airflow",
    name: "Airflow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Airflow.vue"),
    meta: { title: "Flexible Data Pipeline with Airflow" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/grafana",
    name: "Grafana",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Grafana.vue"),
    meta: { title: "Clear System Monitoring with Grafana" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/jupyterhub",
    name: "JupyterHub",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JupyterHub.vue"),
    meta: { title: "Interactive Notebook Environment" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/livy",
    name: "Livy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Livy.vue"),
    meta: { title: "Spark Cluster Manager" },
    props: { hostDNS: hostDNS }
  },

  {
    path: "/minio",
    name: "Minio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Minio.vue"),
    meta: { title: "S3 Compatible Object Store" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/neo4j",
    name: "Neo4j",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Neo4j.vue"),
    meta: { title: "Graph Database" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/history-server",
    name: "SparkHistoryServer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SparkHistory.vue"),
    meta: { title: "Spark History Server" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/prometheus",
    name: "Prometheus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Prometheus.vue"),
    meta: { title: "Prometheus" },
    props: { hostDNS: hostDNS }
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
