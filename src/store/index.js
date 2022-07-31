import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
    currentFilter: "all",
    todos: [
      { id: 1, text: "Learn HTML", done: true },
      { id: 2, text: "Learn JavaScript", done: false },
      { id: 3, text: "Learn Vue", done: false },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
    mode: (state) => state.darkMode,
    filter: (state) => state.currentFilter,
    allChecked: (state) => state.todos.every((todo) => todo.done === true),
    remainingActive: (state) =>
      state.todos.filter((itm) => itm.done === false).length,
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    DELETE_COMPLETED(state) {
      state.todos = state.todos.filter((todo) => todo.done !== true);
    },
    TOGGLE_TODO(state, id) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    },
    EDIT_TODO(state, todo) {
      const index = state.todos.findIndex((t) => t.id == todo.id);
      state.todos[index] = todo;
    },
    TOGGLE_ALL(state) {
      if (state.todos.every((todo) => todo.done === true)) {
        state.todos = state.todos.map((todo) => {
          return { ...todo, done: false };
        });
      } else {
        state.todos = state.todos.map((todo) => {
          return { ...todo, done: true };
        });
      }
    },
    CHANGE_FILTER(state, value) {
      state.currentFilter = value;
    },
    CHANGE_MODE(state) {
      state.darkMode = !state.darkMode;
    },
    UPDATE_LIST(state, value) {
      state.todos = value;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    removeTodo({ commit }, id) {
      commit("DELETE_TODO", id);
    },
    checkTodo({ commit }, id) {
      commit("TOGGLE_TODO", id);
    },
    editTodo({ commit }, todo) {
      commit("EDIT_TODO", todo);
    },
    toggleAll({ commit }) {
      commit("TOGGLE_ALL");
    },
    removeCompleted({ commit }) {
      commit("DELETE_COMPLETED");
    },
    changeFilter({ commit }, value) {
      commit("CHANGE_FILTER", value);
    },
    changeMode({ commit }) {
      commit("CHANGE_MODE");
    },
    updateList({ commit }, value) {
      commit("UPDATE_LIST", value);
    },
  },
  modules: {},
});
