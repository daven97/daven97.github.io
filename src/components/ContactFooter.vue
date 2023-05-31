<template>
  <v-footer fixed color="primary" dark>
    <v-row no-gutters class="d-flex flex-column">
      <v-col align="center">
        <fa-icon-button
          animationType="showcase"
          color="secondary"
          :icon="['fab', 'linkedin']"
          :onClick="
            openLinkInNewTab.bind(
              null,
              'https://www.linkedin.com/in/dave-nuttall/'
            )
          "
        />
        <fa-icon-button
          animationType="showcase"
          color="secondary"
          :icon="['fas', 'envelope']"
          :onClick="
            openLinkInNewTab.bind(
              null,
              'mailto:dnuttall.nuttall+portfolio-site@gmail.com'
            )
          "
        />
        <fa-icon-button
          animationType="showcase"
          color="secondary"
          :icon="['fab', 'github']"
          :onClick="openLinkInNewTab.bind(null, 'https://github.com/daven97')"
        />
        <fa-icon-button
          animationType="showcase"
          color="secondary"
          :icon="['fas', 'file-alt']"
          :onClick="openLinkInNewTab.bind(null, 'https://github.com/daven97')"
        />
      </v-col>
      <v-divider />
      <v-col align="center">
        © Dave Nuttall, {{ new Date().getFullYear() }} |
        <v-btn color="accent" target="_blank" href="/resume" plain
          >Licensing</v-btn
        >
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import FaIconButton from "@/components/fontAwesome/FaIconButton.vue";
export default {
  name: "ContactFooter",
  components: { FaIconButton },
  data: () => ({
    contact: {},
  }),
  methods: {
    openLinkInNewTab(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn::before {
  background-color: transparent;
}

v-footer {
  display: flex;
  flex-direction: column;
}
</style>
