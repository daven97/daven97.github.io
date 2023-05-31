// import FaAnimation from "@/components/fontAwesome/FaAnimation.vue";

export default {
  template: `<fa-animation>
              <slot class="faa-parent animated-hover">
              <font-awesome-icon
                :color="colorComputed"
                :class="iconClass"
                :icon="icon"
                :size="size"
                swap-opacity
              />
            </fa-animation>`,
  components: FaAnimation,
  computed: {
    colorComputed() {
      if (this.color === "primary" || this.color === "secondary") {
        return this.themeColor;
      } else if (this.color) {
        return this.color;
      } else {
        return "";
      }
    },
    iconClass() {
      let iconClassString = "action-button-icon";
      if (this.animationType) {
        iconClassString += ` faa-${this.animationType}`;
      }
      return iconClassString;
    },
    themeColor() {
      if (this.$vuetify.theme.dark) {
        return this.$vuetify.theme.themes.dark[this.color];
      } else {
        return this.$vuetify.theme.themes.light[this.color];
      }
    },
  },
  props: {
    animationType: String,
    color: {
      type: String,
    },
    icon: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      default: "2x",
    },
  },
};
