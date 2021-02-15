<template>
  <div>

    <form @submit="addTodo">
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
       <br>

      <span class="label">Name:  </span>
      <input
        type="text"
        name="name"
        placeholder="hello..."
        v-model="name"
      />

       <br>

      
      <input
        type="submit"
        value="Submit Function"
        class="btn"
      />
    </form>
  </div>
</template>


<script>
import { codemirror } from "vue-codemirror";

// import base style
import "codemirror/lib/codemirror.css";
// import language js
// import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/python/python.js";

// import theme style
import "codemirror/theme/base16-light.css";

export default {
  name: "AddTodo",
  components: { 
    codemirror
  },
  data () {
    return {
      title: '',
      environment: "AWS",
      environments: ["AWS", "Azure", "On Premisise"],
      runtime: "python2.7",
      runtimes: ["python2.7","Python 3.8", "Node 15.8"],
      cmOptions: {
        tabSize: 4,
        mode: "python",
        // theme: "base16-light",
        lineNumbers: false,
        // line: true
        // more CodeMirror options...
      },
      code: `def hello(event, context):
  print event
  return event['data']`,

    }
  },
  methods: {
    addTodo (e) {
      e.preventDefault();
      const newTodo = {
        name: this.name,
        env: this.environment,
	runtime: this.runtime,
	code: this.code
      }
      this.$emit('add-todo', newTodo)
      this.name = ''
    }
  }
};
</script>


<style scoped>

.CodeMirror {
  height: 400px !important;
}
form {
  display: 20;
}
input[type="text"] {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type="submit"] {
  width: 20%;
  height: 40px;
  flex: 2;
}

.full-window {
  height: 100%;
}
.label {
  color: white;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>