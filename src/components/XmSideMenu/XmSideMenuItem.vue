<template>
  <div class="xm-side-menu-item" @click="go(data)">{{data.label}}</div>
</template>
<script>
export default {
  props: {
    data: Object,
    go: {
      type: Function
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("./XmSideMenuItem.scss");
</style>