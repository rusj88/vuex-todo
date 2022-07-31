<template>
  <div class="todo-list-outer">
    <div class="todo-list-header">
      <h1>TODO</h1>
      <button class="theme-toggle-btn" @click="changeMode"></button>
    </div>
    <TodoGenerator></TodoGenerator>
    <div class="todo-list">
      <draggable v-model="myList" item-key="id">
        <template #item="{ element }">
          <TodoItem
            v-show="
              filter === 'all' ||
              (filter === 'active' && element.done === false) ||
              (filter === 'completed' && element.done === true)
            "
            :key="element.id"
            :item="element"
          ></TodoItem>
        </template>
      </draggable>
      <TodoControl></TodoControl>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapActions, mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
import TodoControl from "./TodoControl.vue";
import TodoGenerator from "./TodoGenerator.vue";
export default {
  name: "TodoList",
  components: { TodoItem, TodoControl, TodoGenerator, draggable },
  props: {
    todos: Array,
  },
  methods: mapActions(["changeMode", "updateList"]),
  computed: {
    ...mapGetters(["filter"]),
    myList: {
      get() {
        return this.todos;
      },
      set(value) {
        this.updateList(value);
      },
    },
  },
};
</script>

<style>
.todo-list-outer {
  box-sizing: border-box;
  padding: 80px 0 20px 0;
  margin: 0 auto;
  max-width: 540px;
  min-width: 375px;
}

@media screen and (max-width: 600px) {
  .todo-list-outer {
    padding: 80px 24px 100px 24px;
  }
}

.todo-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  color: white;
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 18px;
}

.todo-list-header h1 {
  margin: 0;
}

.theme-toggle-btn {
  width: 26px;
  height: 26px;
  background: transparent;
  background-image: var(--toggle-icon);
  border: transparent;
  cursor: pointer;
}

.todo-list {
  box-sizing: border-box;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
