<template>
  <div>
    <Neo
      clazz="viz"
      :cypher="neo.cypher"
      :uri="neo.uri"
      :user="neo.user"
      :password="neo.password"
    ></Neo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Neo from "@/components/Neo.vue";
export default Vue.extend({
  components: { Neo },
  mounted() {
    // this.fetchData();
  },
  data() {
    return {
      neo: {
        cypher: "MATCH p=()-[r]->() RETURN p;",
        uri: "bolt://localhost:7687",
        user: "neo4j",
        password: "admin"
      }
    };
  },
  methods: {}
});
// export default class Home extends Vue {}
</script>


<style>
.full-window {
  height: 100%;
}

.viz {
  width: 900px;
  height: 700px;
  border: 1px solid lightgray;
  font: 22pt arial;
}
</style>