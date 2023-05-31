import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey.darken2,
        secondary: colors.red,
        accent: colors.red,
        error: colors.red,
        info: colors.red,
        success: colors.red,
        warning: colors.red,
      },
    },
  },
});
