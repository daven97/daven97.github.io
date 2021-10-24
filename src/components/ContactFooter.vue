<template>
  <v-footer fixed color="primary">
    <v-row justify="center" no-gutters>
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
          openLinkInNewTab.bind(null, 'mailto:dnuttall.nuttall+site@gmail.com')
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
</style>
