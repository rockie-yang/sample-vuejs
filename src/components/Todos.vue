<template>
  <div>
    <div>
     <p> Function List: <p>
     <p> NAME    NAMESPACE       HANDLER         RUNTIME         DEPENDENCIES    STATUS </p>
    </div>
    <div v-for="todo in todos" v-bind:key="todo.name">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.name)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>


<style scoped>

</style>