<template>
  <div class="todo-item" >
    <p>
      <input type="checkbox" v-on:change="status" />
      {{todo.name}}  {{todo.nameSpace}} {{todo.handler}} {{todo.runTime}} {{todo.dependencies}}  {{todo.status}} 
      <button class="del" @click="$emit('del-todo', todo.name)">x</button>
    </p>
  </div>
</template>


<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      print(this.todo.status );
    }
  }
};
</script>


<style scoped>
.todo-item {
  background: #5e72e4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>