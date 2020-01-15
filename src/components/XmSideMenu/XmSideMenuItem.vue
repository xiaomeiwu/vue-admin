<template>
  <div class="xm-side-menu-item">{{data.label}}</div>
</template>
<script>
export default {
  props: {
    data: Object
  }
};
</script>
<style lang="scss" scoped>
@import url("./XmSideMenuItem.scss");
</style>