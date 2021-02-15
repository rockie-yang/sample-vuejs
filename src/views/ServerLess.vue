<template>
  <div>

    <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <br>
    <br>
    <br>
    <Todos
      v-bind:todos="todos"
      v-on:del-todo="deleteTodo"
    />
    <br>
    <br>
    <br>
    <p> Call Function </p>
    
    <CallFunction v-on:call-function="callFunction" />
    <p>Result: "{{ ret }}"</p>
    </div>  
  </div>

</template>

<script>
import Vue from "vue";

// import theme style
import "codemirror/theme/base16-light.css";
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import CallFunction from '../components/Call';
import axios from 'axios';

export default {
  name: 'ServerLess',
  components: { 

    Todos,
    AddTodo,
    CallFunction
   },
  data() {
    return {
      ret: '...',
      todos: []
    }
  },
  props: ["hostDNS"],

  methods: {
    deleteTodo (name) {
      axios.delete(`http://157.230.251.182:5000/function/${name}`)
        .then(res => this.todos = this.todos.filter(todo => todo.name !== name))
        .catch(err => console.log(err));
    },

    callFunction (newCall) {
      const { env,name,data } = newCall;
      axios.post(`http://157.230.251.182:5000/call?env=${env}&name=${name}`,
       data,{ headers: { "Content-Type": "text/plain" } })
        .then(res => this.ret = res.data['result'].replace('b', '',1) )
        .catch(err => console.log(err));
    },
    

    addTodo (newTodo) {
      const { env,runtime, name,code } = newTodo;
      axios.post(`http://157.230.251.182:5000/function?env=${env}&runtime=${runtime}&name=${name}`,
       code,{ headers: { "Content-Type": "text/plain" } })
        .then(res => console.log(res.data) )
        .catch(err => console.log(err));
    }
  },

    created () {
      axios.get('http://157.230.251.182:5000/function')
       .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }
}

</script>
<style scoped>
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
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>

