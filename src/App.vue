<template>
  <transition :name="transitionName" mode="out-in">
    <router-view id="app"></router-view>
  </transition>
</template>
<script>
export default {
  computed: {
    transitionName() {
      let { path } = this.$route;
      return path === "/login" || path.indexOf("admin") > -1 ? "xm-slide" : "";
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
}
</style>