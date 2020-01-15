<template>
  <div class="admin-container">
    <div class="admin-container-info">
      <span class="admin-container-info-toggle" @click="toggle">
        <button class="fa" type="button" :class="toggleClass"></button>
      </span>
      <div class="admin-container-info-user" @click="loginOut">
        <span>login out</span>
        <span class="fa fa-sign-out-alt"></span>
      </div>
    </div>
    <router-view class="admin-container-view"></router-view>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["sideMenuIsOpen"]),
    toggleClass() {
      return this.sideMenuIsOpen ? "fa-align-left" : "fa-align-right";
    }
  },
  methods: {
    ...mapMutations({
      toggle: "toggleSideMenuIsOpen"
    }),
    loginOut() {
      this.$router.replace({ path: "/" });
    }
  }
};
</script>
