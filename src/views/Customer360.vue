<template>
  <div width="800px" height="800px">
    <section id="viz" width="800px" height="800px">&nbsp;</section>
  </div>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import Vue from "vue";
import NeoVis from "neovis.js";
import { NEOVIS_DEFAULT_CONFIG } from "neovis.js";

export default Vue.extend({
  // props: ["hostDNS"],
  data() {
    return {
      img: require("../assets/FraudDetection.png"),
      neovisInstance: NeoVis,
      graphConfig: {
        initial_cypher: "MATCH p=()-[r]->() RETURN p;",
        container_id: "viz",
        server_url: process.env.NEO4J_URI || "bolt://localhost:7687",
        server_user: process.env.NEO4J_USER || "neo4j",
        server_password: process.env.NEO4J_PASSWORD || "admin",
        labels: {
          // CreditCard: {
          //   caption: "name",
          //   font: {
          //     size: 12,
          //     color: "#000000"
          //   }
          //   // community: "#F79767"
          // },
          // AccountHolder: {
          //   // caption: "FirstName",
          //   size: "pagerank",
          //   community: "AccountHolder",
          //   font: {
          //     size: 12,
          //     color: "#000000"
          //   }
          // },
          // BankAccount: {
          //   // caption: "AccountNumber",
          //   size: "pagerank",
          //   community: "community",
          //   font: {
          //     size: 12,
          //     color: "#000000"
          //   }
          // },
          [NEOVIS_DEFAULT_CONFIG]: {
            caption: "defaultCaptionProperty",
            size: "defaultPagerank",
            font: {
              size: 12,
              color: "#000000"
            }
            // community: "defaultCommunity"
            //"sizeCypher": "defaultSizeCypher"
          }
        },
        relationships: {
          // HAS_ADDRESS: {
          //   thickness: "weight",
          //   caption: true
          // },
          // HAS_CREDITCARD: {
          //   thickness: "weight",
          //   caption: true
          // },
          // HAS_BANKACCOUNT: {
          //   thickness: "weight",
          //   caption: true
          // },
          // HAS_UNSECUREDLOAN: {
          //   thickness: "weight",
          //   caption: true
          // },

          // HAS_SSN: {
          //   thickness: "weight",
          //   caption: true
          // },

          HAS_PHONENUMBER: {
            //   thickness: "weight",
            caption: true
          },
          [NEOVIS_DEFAULT_CONFIG]: {
            thickness: "defaultThicknessProperty",
            // caption: "defaultCaption",
            caption: true,
            font: {
              size: 12
              // color: "#000000"
            }
          }
        }
      }
    };
  },
  methods: {
    renderGraph() {
      const initialCypher = `match (n) return n;`;
      const cfg = NEOVIS_DEFAULT_CONFIG;

      const viz = new NeoVis(this.graphConfig);
      viz.render();
      console.log(viz);
      // neovisInstance.registerOnEvent("completed", _ => {
      //   document
      //     .querySelector(".vis-network")
      //     .addEventListener("dblclick", this.getClickedNode);
      // });
      // loader.hide();
    }
    // getClickedNode() {
    //   let node = document.getElementsByClassName("vis-tooltip")[0];

    //   if (typeof node !== "undefined") {
    //     let hasChild = typeof node.childNodes[7] !== "undefined";
    //     let nodeChildren = hasChild ? node.childNodes[7] : node.childNodes[4];
    //     let nodeId = nodeChildren.nodeValue.replace(/\s/g, "");

    //     this.updateGraph(nodeId);
    //   }
    // },
    // updateGraph(id) {
    //   loader = this.$loading.show();

    //   let generalCypherById = `MATCH (a {id: '${id}'})-[r]-(b) RETURN r, a, b`;
    //   neovisInstance.renderWithCypher(generalCypherById);
    //   loader.hide();
    // }
  },

  mounted() {
    this.renderGraph();
  }
});
</script>

<style scoped>
.full-window {
  height: 100%;
}

/* #viz {
  width: 900px;
  height: 700px;
  border: 1px solid lightgray;
  font: 22pt arial;
} */
</style>