<template>
  <div class="xm-input">
    <input
      class="focus:shadow-outline focus:outline-none p-2 rounded"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @change="onChange"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: String,
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
