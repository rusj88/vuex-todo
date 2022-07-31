<template>
  <div class="todo-item">
    <div class="todo-item-group">
      <UiCheckbox
        :checked="item.done"
        @change="checkTodo(item.id)"
      ></UiCheckbox>
      <div
        class="todo-item-text"
        :class="{ done: item.done }"
        @dblclick="setEditing"
      >
        {{ item.text }}
      </div>
    </div>
    <input
      v-show="editing"
      class="edit"
      type="text"
      :value="item.text"
      @keydown.enter="updateTodo"
      @blur="updateTodo"
      @keydown.escape="cancelEdit"
      ref="input"
    />
    <button class="remove-todo-btn" @click="removeTodo(item.id)" />
  </div>
</template>

<script>
import { nextTick } from "vue";
import { mapActions } from "vuex";
import UiCheckbox from "./UiCheckbox.vue";
export default {
  name: "TodoItem",
  components: { UiCheckbox },
  props: {
    item: Object,
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    ...mapActions(["removeTodo", "checkTodo", "editTodo"]),
    updateTodo(event) {
      if (event.target.value === "") {
        this.removeTodo(this.item.id);
      } else {
        this.editTodo({
          ...this.item,
          text: event.target.value,
        });
      }
      this.cancelEdit();
    },
    cancelEdit() {
      this.editing = false;
    },
    async setEditing() {
      this.editing = true;
      await nextTick();
      this.$refs.input.focus();
    },
  },
};
</script>

<style scoped>
.todo-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--todo-itm-bg);
  box-sizing: border-box;
  border-bottom: 0.5px solid var(--todo-itm-border);
  min-height: 64px;
  padding: 24px;
}

.todo-item:first-child {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.todo-item-text.done {
  text-decoration: line-through;
  color: var(--text-faded);
}

.todo-item-group {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.todo-item-text {
  box-sizing: border-box;
  padding-left: 50px;
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: var(--text-primary);
  min-width: 0;
  overflow-wrap: anywhere;
}

.remove-todo-btn {
  visibility: hidden;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  padding-right: 12px;
  background: transparent;
  background-image: url("@/assets/icon-cross.svg");
  border: transparent;
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .remove-todo-btn {
    visibility: visible;
  }
}

.todo-item:hover .remove-todo-btn {
  visibility: visible;
}

.edit {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 24px;
  padding-left: 70px;
  outline: none;
  border: 1px solid var(--highlight);
  caret-color: var(--highlight);
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: var(--text-primary);
  background-color: var(--todo-itm-bg);
}
</style>
