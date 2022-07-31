<template>
  <div class="todo-bot-panel">
    <div class="items-count">{{ remainingActive }} items left</div>
    <div class="filters">
      <button
        class="filter-btn"
        :class="{ selected: filter === 'all' }"
        @click="changeFilter('all')"
      >
        All
      </button>
      <button
        class="filter-btn"
        :class="{ selected: filter === 'active' }"
        @click="changeFilter('active')"
      >
        Active
      </button>
      <button
        class="filter-btn"
        :class="{ selected: filter === 'completed' }"
        @click="changeFilter('completed')"
      >
        Completed
      </button>
    </div>
    <button class="clear-complete-btn" @click="removeCompleted">
      Clear completed
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TodoControl",
  computed: mapGetters(["remainingActive", "filter"]),
  methods: {
    ...mapActions(["removeCompleted", "changeFilter"]),
  },
};
</script>

<style scoped>
.todo-bot-panel {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: var(--todo-itm-bg);
  box-sizing: border-box;
  padding: 24px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.items-count {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: var(--text-input-ph);
}

.filter-btn.selected {
  color: var(--highlight);
}

.filter-btn {
  background: transparent;
  border: transparent;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  color: var(--text-input-ph);
  font-size: 16px;
}

.filter-btn:not(.selected):hover,
.clear-complete-btn:hover {
  color: var(--text-hover);
}

.clear-complete-btn {
  box-sizing: border-box;
  padding: 0;
  background: transparent;
  border: transparent;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  color: var(--text-input-ph);
  font-size: 16px;
}

@media screen and (max-width: 540px) {
  .filters {
    position: absolute;
    top: 74px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--todo-itm-bg);
    border-radius: 6px;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
