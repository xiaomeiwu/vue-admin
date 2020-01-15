<template>
  <ul class="xm-side-menu">
    <li v-for="menu in menus" :key="menu.id">
      <div class="xm-side-menu-label" @click="toggle(menu)">
        <span class="xm-icon" :class="menu.icon"></span>
        <transition name="xm-fade">
          <div class="xm-inline-block" v-show="showIcon">
            <span>{{menu.label}}</span>
            <span class="fa fa-angle-down" :class="{'toggle':menu.isOpen}"></span>
          </div>
        </transition>
      </div>
      <xm-height-transition>
        <div v-show="menu.isOpen" class="xm-side-menu-children">
          <xm-side-menu-item v-for="child in menu.children" :key="child.id" :data="child"></xm-side-menu-item>
        </div>
      </xm-height-transition>
    </li>
  </ul>
</template>
<script>
import { XmHeightTransition } from "../../components";
import XmSideMenuItem from "./XmSideMenuItem";
export default {
  props: {
    menus: Array,
    showIcon: Boolean
  },
  components: {
    XmSideMenuItem,
    XmHeightTransition
  },
  watch: {
    showIcon(newVal) {
      if (!newVal) {
        this.menus.forEach(menu => {
          this.$set(menu, "isOpen", false);
        });
      }
    }
  },
  methods: {
    toggle(menu) {
      this.$set(menu, "isOpen", !!!menu.isOpen);
    }
  }
};
</script>