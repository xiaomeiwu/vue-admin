<template>
  <div class="admin-side-menu">
    <xm-side-menu :menus="sideMenus" :show-icon="sideMenuIsOpen"></xm-side-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { XmSideMenu } from "../../components";
import { sideMenus } from "../../constant";
export default {
  components: {
    XmSideMenu
  },
  computed: {
    ...mapState(["sideMenuIsOpen"])
  },
  data() {
    return {
      sideMenus
    };
  }
};
</script>