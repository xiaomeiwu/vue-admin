<template>
  <div class="xm-input">
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>
<script>
export default {
  props: {
    value: String,
    label: String,
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>