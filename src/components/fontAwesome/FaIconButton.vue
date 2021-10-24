<template>
  <v-btn :class="parentClass" @click="onClick" text>
    <font-awesome-icon
      :color="colorComputed"
      :class="iconClass"
      :icon="icon"
      :size="size"
      swap-opacity
    />
  </v-btn>
</template>

<script>
export default {
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
    parentClass() {
      let parentClassString = "faa-parent animated-hover";
      if (this.animationType === "showcase") parentClassString += " showcase";
      return parentClassString;
    },
    themeColor() {
      if (this.$vuetify.theme.dark) {
        return this.$vuetify.theme.themes.dark[this.color];
      } else {
        return this.$vuetify.theme.themes.light[this.color];
      }
    },
  },
  name: "FaIconButton",
  props: {
    animationType: String,
    color: {
      type: String,
    },
    icon: {
      type: Array,
      required: true,
    },
    isLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    onClick: {
      type: Function,
      required: false,
    },
    size: {
      type: String,
      default: "2x",
    },
  },
};
</script>
<style lang="scss" scoped>
v-button {
  padding: 0;
}

// Pulse Animation
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
}

.faa-pulse.animated,
.faa-pulse.animated-hover:hover,
.faa-parent.animated-hover:hover .faa-pulse {
  -webkit-animation: pulse 2s linear infinite;
  animation: pulse 2s linear infinite;
}

// Showcase Animation
.faa-parent.animated-hover.showcase {
  padding-top: 15px;
  padding-bottom: 15px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.faa-parent.animated-hover.showcase:hover {
  padding-top: 10px;
  padding-bottom: 20px;
}

// Shake Animation
@-webkit-keyframes wrench {
  0% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  8% {
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  10% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  18% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  20% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  28% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  30% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  38% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  40% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  48% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  50% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  58% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  60% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  68% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  75% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes wrench {
  0% {
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  8% {
    -webkit-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  10% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  18% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  20% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  28% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  30% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  38% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  40% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  48% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  50% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  58% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  60% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  68% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  75% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.faa-shake.animated,
.faa-shake.animated-hover:hover,
.faa-parent.animated-hover:hover .faa-shake {
  -webkit-animation: wrench 2.5s ease infinite;
  animation: wrench 2.5s ease infinite;
}

// Tada Animation
@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-8deg);
    transform: scale(0.9) rotate(-8deg);
  }

  30%,
  50%,
  70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%,
  60% {
    -webkit-transform: scale(1.3) rotate(-8deg);
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-8deg);
    -ms-transform: scale(0.9) rotate(-8deg);
    transform: scale(0.9) rotate(-8deg);
  }

  30%,
  50%,
  70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    -ms-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%,
  60% {
    -webkit-transform: scale(1.3) rotate(-8deg);
    -ms-transform: scale(1.3) rotate(-8deg);
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    -webkit-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

.faa-tada.animated,
.faa-tada.animated-hover:hover,
.faa-parent.animated-hover:hover .faa-tada {
  -webkit-animation: tada 2s linear infinite;
  animation: tada 2s linear infinite;
}
</style>
