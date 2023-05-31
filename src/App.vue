<template>
  <v-app>
    <v-app-bar app color="primary" dark scroll-threshold="1000">
      <!-- <v-app-bar
        app
        color="primary"
        dark
        fade-img-on-scroll
        scroll-threshold="1000"
        src="@/assets/images/sky.jpg"
      > -->
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <div
        class="d-flex align-self-center align-center shrink justify-start"
        style="height: 100%; width: auto"
      >
        Dave
        <!-- <v-img
          alt="Dave Nuttall Site Name"
          class="shrink mr-2"
          height="90%"
          width="auto"
          contain
          position="left center"
          src="@/assets/images/WebsiteHeaderLogo.svg"
          transition="scale-transition"
        /> -->
      </div>

      <v-tabs
        class="d-none d-md-flex"
        height="56px"
        right
        style="display: flex; justify-content: flex-end; margin-right: 5px"
        v-model="tab"
      >
        <v-tab>Experience</v-tab>
        <v-tab>Skills</v-tab>
        <v-tab>Projects</v-tab>
        <v-tab>Contact</v-tab>
        <v-tab>About Me</v-tab>
      </v-tabs>

      <v-spacer d-flex d-sm-none />
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-md-none align-self-end"
        right
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <page>
            <experiences />
          </page>
        </v-tab-item>
        <v-tab-item>
          <page>
            <skills />
          </page>
        </v-tab-item>
        <v-tab-item>
          <page>
            <projects />
          </page>
        </v-tab-item>
        <v-tab-item>
          <page>
            <projects />
          </page>
        </v-tab-item>
        <v-tab-item>
          <page>
            <about />
          </page>
        </v-tab-item>
      </v-tabs-items>
    </v-main>

    <contact-footer />
  </v-app>
</template>

<script>
import About from "@/components/About.vue";
import ContactFooter from "@/components/ContactFooter.vue";
import Experiences from "@/components/Experiences.vue";
import Page from "@/components/Page.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";

export default {
  name: "App",

  components: {
    About,
    ContactFooter,
    Experiences,
    Page,
    Projects,
    Skills,
  },

  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="sass">
div[role="tablist"].v-item-group
  align-self: flex-end
</style>
