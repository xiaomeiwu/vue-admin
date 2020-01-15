<script>
const XM_HEIGHT_TRANSITION_CLASS = "xm-height-transition";
export default {
  functional: true,
  render(h, { props, children }) {
    return h(
      "transition",
      {
        on: {
          beforeEnter(el) {
            el.classList.add(XM_HEIGHT_TRANSITION_CLASS);
            el.style.height = 0;
          },
          enter(el) {
            if (el.scrollHeight !== 0) {
              el.style.height = el.scrollHeight + "px";
            } else {
              el.style.height = "";
            }
            el.style.overflow = "hidden";
          },
          afterEnter(el) {
            el.classList.remove(XM_HEIGHT_TRANSITION_CLASS);
            el.style.height = "";
          },
          beforeLeave(el) {
            el.classList.add(XM_HEIGHT_TRANSITION_CLASS);
            el.style.height = el.scrollHeight + "px";
            el.style.overflow = "hidden";
          },
          leave(el) {
            if (el.scrollHeight !== 0) {
              el.style.height = 0;
            }
          },
          afterLeave(el) {
            el.classList.remove(XM_HEIGHT_TRANSITION_CLASS);
            el.style.height = "";
          }
        }
      },
      children
    );
    return <transition>{children}</transition>;
  }
};
</script>