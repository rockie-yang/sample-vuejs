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
    path: "/FraudDetection",
    name: "FraudDetection",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FraudDetection.vue"),
    meta: { title: "Fraud Detection" },
    // props: { hostDNS: hostDNS }
  },
  {
    path: "/Customer360",
    name: "Customer360",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Grafana.vue"),
    meta: { title: "Clear System Monitoring with Grafana" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/RiskCompliance",
    name: "RiskCompliance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JupyterHub.vue"),
    meta: { title: "Interactive Notebook Environment" },
    props: { hostDNS: hostDNS }
  },
  {
    path: "/LeverageData",
    name: "LeverageData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Livy.vue"),
    meta: { title: "Spark Cluster Manager" },
    props: { hostDNS: hostDNS }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
