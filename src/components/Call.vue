<template>
  <div>

    <form @submit="callFunction">
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
      <span class="label">Data:  </span>
      <input
        type="text"
        data="data"
        placeholder="parameter..."
        v-model="data"
      />
      <br>
       
      <input
        type="submit"
        value="Call Function"
        class="btn"
      />
    </form>
  </div>
</template>


<script>

// import base style
import "codemirror/lib/codemirror.css";
// import language js
// import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/python/python.js";

// import theme style
import "codemirror/theme/base16-light.css";

export default {
  name: "CallFunction",
  components: { 

  },
  data () {
    return {
      data: '',
      environment: "AWS",
      environments: ["AWS", "Azure", "On Premisise"],
      runtime: "python2.7",
      runtimes: ["python2.7","Python 3.8", "Node 15.8"],


    }
  },
  methods: {
    callFunction (e) {
      e.preventDefault();
      const newCall = {
        name: this.name,
        env: this.environment,
	data: this.data
      }
      this.$emit('call-function', newCall)
      this.name = ''
      this.data = ''
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