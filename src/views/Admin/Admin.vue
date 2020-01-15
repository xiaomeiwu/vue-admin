<template>
  <div class="admin" :class="getAdminClass">
    <admin-side-menu></admin-side-menu>
    <admin-container></admin-container>
  </div>
</template>
<script>
import AdminSideMenu from "./AdminSideMenu";
import AdminContainer from "./AdminContainer";
import { mapState } from "vuex";
const SIDE_MENU_IS_OPEN = "side-menu-is-open";
export default {
  components: {
    AdminSideMenu,
    AdminContainer
  },
  computed: {
    ...mapState(["sideMenuIsOpen"]),
    getAdminClass() {
      return this.sideMenuIsOpen ? SIDE_MENU_IS_OPEN : "";
    }
  }
};
</script>