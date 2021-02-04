<template>
  <div>
    <b-container>
      <b-row>
        <b-col xs-6>
          <span class="label">Environment: </span>
          <span>
            <b-form-select
              v-model="environment"
              :options="environments"
            ></b-form-select>
          </span>
        </b-col>
        <b-col xs-6>
          <span class="label">Runtime: </span>
          <span>
            <b-form-select
              v-model="runtime"
              :options="runtimes"
            ></b-form-select>
          </span>
        </b-col>
      </b-row>
      <b-row class="h-100">
        <b-col xs-12 ms-12 lg-12>
          <codemirror v-model="code" :options="cmOptions" />
        </b-col>
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

export default {
  components: { codemirror },
  data() {
    return {
      environment: "AWS",
      environments: ["AWS", "Azure", "On Premisise"],
      runtime: "Python 3.8",
      runtimes: ["Python 3.8", "Node 15.8"],
      cmOptions: {
        tabSize: 4,
        mode: "python",
        // theme: "base16-light",
        lineNumbers: false,
        // line: true
        // more CodeMirror options...
      },
      code: `import json
import boto3

region = 'eu-west-1'
instances = ['i-0b16548546fdebe0c']
ec2 = boto3.client('ec2', region_name=region)

def lambda_handler(event, context):
    ec2.stop_instances(InstanceIds=instances)
    print(f'Stopped your instances {instances}')`,
    };
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

