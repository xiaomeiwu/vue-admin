<template>
  <div class="admin-container">
    <div class="admin-container-info">
      <span class="admin-container-info-toggle" @click="toggle">
        <button
          class="fa text-blue-500"
          type="button"
          :class="toggleClass"
        ></button>
      </span>
      <div class="admin-container-info-user" @click="loginOut">
        <span class="fa fa-sign-out-alt text-blue-500" title="退出登录"></span>
      </div>
    </div>
    <router-view class="admin-container-view text-orange-900"></router-view>
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
