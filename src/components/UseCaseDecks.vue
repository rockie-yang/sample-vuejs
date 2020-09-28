<template>
  <b-container>
    <b-row align-v="center">
      <UseCaseDeck
        v-for="usecases in deck"
        :key="usecases.id"
        :usecases="usecases"
      />
    </b-row>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue";
import UseCaseDeck from "@/components/UseCaseDeck.vue";

export default Vue.extend({
  components: { UseCaseDeck },
  data() {
    return {
      deck: [
        [
          {
            name: "Fraud Protection",
            src: "https://neo4j.com/use-cases/financial-services/",
            img: require("../assets/finserv-fight-fraud.svg"),
            description:
              "Simple fraud is straightforward to detect with yesterday's traditional, discrete technologies, but today's fraudsters use sophisticated strategies that require connected link analysis and complex pattern matching. Neo4j graph technology makes such connected data analysis simple and efficient, reducing expensive false positives and adapting to new criminal patterns as they emerge.",
            id: 1
          },
          {
            name: "Customer 360°",
            img: require("../assets/finserv-360-customer-view.svg"),
            description:
              "Empower your sell-side staff and analysts with a comprehensive view of clients and their portfolios when you use a graph database. With Neo4j, you create a unified view of the customer and their journey map by drawing upon data from your product, support and sales silos. Using this 360° view, you can dynamically segment customers to provide hyper-targeted service, offerings and content.",
            id: 4
          },
          {
            name: "Risk & Compliance",
            img: require("../assets/finserv-stay-agile.svg"),
            description:
              "Financial services firms today face increased regulations when it comes to risk and compliance reporting. Rather than update data manually across silos, today's leading financial organizations use Neo4j to unite data silos into a federated metadata model, enabling them to trace and analyze their data across the enterprise as well as update their models in real time. The bottom line: timeliness and accuracy in risk analytics and compliance reporting.",
            id: 7
          }
        ],
        [
          {
            name: "Leverage Data",
            img: require("../assets/finserv-leverage-your-data.svg"),
            description:
              "Increase your data's rate of return when you coalesce internal silos and external data feeds into an organizational knowledge graph. A dynamically updating knowledge graph increases productivity and revenue by serving up real-time recommendations for both analysts and customer-facing representatives. Using Neo4j's relationship-first approach to data, your financial services firm is empowered to respond to market-moving news, manage risk, analyze opportunities, predict impacts and much more.",
            id: 11
          }
        ]
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