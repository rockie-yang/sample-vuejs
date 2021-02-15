<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs-2>
          <span class="label">Environment: </span>
          <span>
            <b-form-select
              label="Environment:"
              v-model="environment"
              :options="environments"
            ></b-form-select>
          </span>
        </b-col>
        <b-col xs-2>
          <span class="label">Runtime: </span>
          <span>
            <b-form-select
              v-model="runtime"
              :options="runtimes"
            ></b-form-select>
          </span>
        </b-col>
        <b-col xs-3>
          <span class="label">Functions: </span>
          <span>
            <b-form-select
              v-model="functionName"
              :options="functionNames"
            ></b-form-select>
          </span>
        </b-col>
        <b-col xs-5 mt-5 lg-5>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-secondary">Modify</button>
            <button
              type="button"
              class="btn btn-secondary"
              @click="deleteFunction"
            >
              Delete
            </button>
          </div>
          <b-input-group prepend="Name:">
            <b-form-input v-model="newFunctionName"></b-form-input>
            <b-button variant="outline-success" @click="createFunction"
              >Create</b-button
            >
          </b-input-group>
          <b-input-group prepend="data:">
            <b-form-input v-model="data"></b-form-input>
            <b-button variant="outline-success" @click="invokeFunction"
              >Invoke</b-button
            >
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="h-100">
        <b-col xs-12 ms-12 lg-12>
          <codemirror v-model="code" :options="cmOptions" />
        </b-col>
      </b-row>
      <b-row>
        <div>{{ result }}</div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import { codemirror } from "vue-codemirror";

// import base style
import "codemirror/lib/codemirror.css";
// import language js
// import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/python/python.js";

// import theme style
import "codemirror/theme/base16-light.css";
import axios from "axios";
export default {
  components: { codemirror },
  data() {
    return {
      environment: "AWS",
      newFunctionName: "just-a-test",
      environments: ["AWS", "Azure", "On Premisise"],
      runtime: "python3.7",
      runtimes: ["python3.7", "node15.8"],
      functionName: "just-a-test",
      functionNames: ["just-a-test"],
      data: "hello world",
      result: "",
      cmOptions: {
        tabSize: 4,
        mode: "python",
        // theme: "base16-light",
        lineNumbers: false,
        // line: true
        // more CodeMirror options...
      },
      code: `def lambda_handler(event, context):
  print(event)
  return event['data']`,
    };
  },
  methods: {
    // deleteFunction() {
    //   console.log(`delete function ${this.func} in ${this.environment}`);
    // },
    deleteFunction() {
      const url = `http://157.230.251.182:5000/function/${this.functionName}`;
      console.log(`Deleting function ${url}`);
      axios
        .delete(url)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },

    invokeFunction() {
      const url = `http://157.230.251.182:5000/call?env=${this.environment}&name=${this.functionName}`;
      console.log(`Invoking ${url} with data ${this.data}`);
      axios
        .post(url, this.data, { headers: { "Content-Type": "text/plain" } })
        .then((res) => {
          this.ret = res.data["result"].replace("b", "", 1);
          this.result = res.data;
        })
        .catch((err) => console.log(err));
    },

    createFunction() {
      const url = `http://157.230.251.182:5000/function?env=${this.environment}&runtime=${this.runtime}&name=${this.newFunctionName}`;
      console.log(url);
      axios
        .post(url, this.code, { headers: { "Content-Type": "text/plain" } })
        .then((res) => {
          console.log(res.data);
          this.result = res.data;
          this.functionNames.push(this.newFunctionName);
        })
        .catch((err) => console.log(err));
    },
    async getFunctions() {
      const res = await axios.get("http://157.230.251.182:5000/function");
      return res.data;
    },
  },
  mounted() {
    // this.functionNames = this.getFunctions();
    // console.log(this.functionNames);
    axios
      .get("http://157.230.251.182:5000/function")
      .then((res) => (this.functionNames = res.data.map((obj) => obj["name"])))
      .catch((err) => console.log(err));
  },
  props: ["hostDNS"],
};
</script>
<style scoped>
.full-window {
  height: 100%;
}
.label {
  color: white;
}
.CodeMirror {
  height: 400px !important;
}
</style>

