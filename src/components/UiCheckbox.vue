<template>
  <label class="container">
    <input v-model="modelValueProxy" v-bind="$attrs" type="checkbox" />
    <span class="checkmark"></span>
    <slot />
  </label>
</template>

<script>
export default {
  name: "UiCheckbox",
  inheritAttrs: false,
  emits: ["update:modelValue"],
  computed: {
    modelValueProxy: {
      get() {
        return this.$attrs.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid var(--todo-itm-border);
  top: 50%;
  transform: translateY(-50%);
}

.container:hover input:not(:checked) ~ .checkmark {
  border: solid 1px transparent;
  border-radius: 50%;
  background-image: linear-gradient(var(--todo-itm-bg), var(--todo-itm-bg)),
    radial-gradient(circle at top left, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.container input:checked ~ .checkmark {
  border: none;
  background-image: linear-gradient(
    to bottom right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 11px;
  height: 9px;
  background-image: url("@/assets/icon-check.svg");
}
</style>
