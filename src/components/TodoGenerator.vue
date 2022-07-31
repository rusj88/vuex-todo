<template>
  <div class="input-wrapper">
    <input
      class="new-todo"
      autofocus
      placeholder="Create a new todo..."
      @keydown.enter="addNewTodo"
    />
    <div class="mass-toggle">
      <UiCheckbox :checked="allChecked" @change="toggleAll"></UiCheckbox>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UiCheckbox from "./UiCheckbox.vue";

export default {
  name: "TodoGenerator",
  components: { UiCheckbox },
  computed: mapGetters(["allChecked"]),
  methods: {
    ...mapActions(["addTodo", "toggleAll"]),
    addNewTodo(event) {
      this.addTodo({
        id: Date.now(),
        text: event.target.value,
        done: false,
      });
      event.target.value = "";
    },
  },
};
</script>

<style>
.input-wrapper {
  position: relative;
  margin-bottom: 24px;
}

.new-todo {
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  border-radius: 6px;
  padding: 24px;
  padding-left: 109px;
  outline: none;
  border: none;
  caret-color: var(--highlight);
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: var(--text-primary);
  background-color: var(--todo-itm-bg);
}

.new-todo::placeholder {
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: var(--text-input-ph);
}

.mass-toggle {
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
}
</style>
