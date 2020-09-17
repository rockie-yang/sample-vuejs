import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Let's Start Knock Data" }
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
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
