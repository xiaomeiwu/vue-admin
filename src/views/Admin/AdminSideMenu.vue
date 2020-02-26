<template>
  <div class="admin-side-menu">
    <xm-side-menu :menus="sideMenus" :show-icon="sideMenuIsOpen" :go="go"></xm-side-menu>
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
  },
  methods: {
    go(data) {
      if (!data || !data.path || data.path === this.$route.path) {
        return;
      }
      const { path } = data;
      this.$router.push({ path });
    }
  }
};
</script>