<template>
  <div class="wrapper" :class="{ dark: mode }">
    <div class="main">
      <TodoList :todos="allTodos"> </TodoList>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: { TodoList },
  computed: mapGetters(["allTodos", "mode"]),
};
</script>

<style>
.wrapper {
  --main-bg-color: hsl(0, 0%, 98%);
  --bg-image: url("@/assets/bg-desktop-light.jpg");
  --bg-image-mob: url("@/assets/bg-mobile-light.jpg");
  --toggle-icon: url("@/assets/icon-moon.svg");
  --todo-itm-bg: #fff;
  --text-primary: hsl(235, 19%, 35%);
  --text-faded: hsl(233, 11%, 84%);
  --text-input-ph: hsl(236, 9%, 61%);
  --text-hover: hsl(235, 19%, 35%);
  --todo-itm-border: hsl(233, 11%, 84%);
  --highlight: hsl(220, 98%, 61%);
}

.wrapper.dark {
  --main-bg-color: hsl(235, 21%, 11%);
  --bg-image: url("@/assets/bg-desktop-dark.jpg");
  --bg-image-mob: url("@/assets/bg-mobile-dark.jpg");
  --toggle-icon: url("@/assets/icon-sun.svg");
  --todo-itm-bg: hsl(235, 24%, 19%);
  --text-primary: hsl(234, 39%, 85%);
  --text-faded: hsl(233, 14%, 35%);
  --text-input-ph: hsl(236, 9%, 61%);
  --text-hover: hsl(236, 33%, 92%);
  --todo-itm-border: hsl(237, 14%, 26%);
}

body {
  margin: 0;
}

.wrapper {
  background-color: var(--main-bg-color);
}

.main {
  margin: 0 auto;
  min-width: 375px;
  max-width: 1440px;
  min-height: 100vh;
  background-color: var(--main-bg-color);
  background-image: var(--bg-image);
  background-repeat: no-repeat;
}

@media screen and (max-width: 600px) {
  .main {
    background-image: var(--bg-image-mob);
    background-position: 0% 0%;
    background-size: contain;
  }
}
</style>
