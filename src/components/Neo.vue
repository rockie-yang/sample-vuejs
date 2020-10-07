<template>
  <div :id="id" :class="clazz" />
</template>

<script lang="ts">
import Vue from "vue";
import NeoVis from "neovis.js";
import { NEOVIS_DEFAULT_CONFIG } from "neovis.js";
export default Vue.extend({
  props: ["cypher", "uri", "user", "password", "clazz", "id"],
  data() {
    return {
      // https://github.com/neo4j-contrib/neovis.js/
      graphConfig: {
        initial_cypher: this.cypher || "MATCH p=()-[r]->() RETURN p;",
        container_id: this.id,
        server_url:
          this.uri || process.env.NEO4J_URI || "bolt://localhost:7687",
        server_user: this.user || process.env.NEO4J_USER || "neo4j",
        server_password: this.password || process.env.NEO4J_PASSWORD || "admin",
        labels: {
          [NEOVIS_DEFAULT_CONFIG]: {
            caption: "defaultCaptionProperty", // The property name to use as node caption. or Function: A function takes a Neo4j node and return a string caption. Default to no caption.
            size: "defaultPagerank", // The property name to use as node size.
            // community: The property name to use as community (color).
            // image:  The url of image to display.
            font: {
              size: 12,
              color: "#000000"
            }
            // title_properties:  If title_properties is supplied, only the attributes listed in it are displayed in the tooltip. Otherwise, all attributes are present in the tooltip.
            //"sizeCypher": "defaultSizeCypher"
          }
        },
        relationships: {
          [NEOVIS_DEFAULT_CONFIG]: {
            thickness: "defaultThicknessProperty", // The property name to use as edge thickness.
            caption: true,
            font: {
              size: 10
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
      //   console.log(viz);
    }
  },

  mounted() {
    this.renderGraph();
  }
});
</script>