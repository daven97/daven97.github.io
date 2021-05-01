<template>
  <v-app>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <v-app-bar
      app
      color="primary"
      dark
      fade-img-on-scroll
      prominent
      src="./assets/sky.jpg"
      shrink-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <div class="d-flex align-center">
        <v-img
          alt="Dave Nuttall's Website Logo"
          class="shrink mr-2"
          contain
          src="./assets/favicon-32x32.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Dave Nuttall Site Name"
          class="shrink mr-2"
          contain
          min-width="100"
          src="./assets/WebsiteName.svg"
          width="100"
        />

        <!-- <v-img
          alt="Vuetify Name"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-tabs
        height="56px"
        right
        style="display: flex; justify-content: flex-end"
      >
        <v-tab>Experience</v-tab>
        <v-tab>Projects</v-tab>
        <v-tab>Education</v-tab>
        <v-tab>Contact</v-tab>
        <v-tab>About Me</v-tab>
      </v-tabs>

      <!-- <template v-slot:extension>
        
      </template> -->
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      > -->
      <!-- <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon> -->
      <!-- </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px"></v-container>
      </v-sheet>
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch
      scrollMake it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scrollMake it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scrollMake it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scrollMake it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scrollMake it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scrollMake it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scrollMake it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scrollMake it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch scroll Make it scroll really really a
      bunch scroll Make it scroll really really a bunch scroll Make it scroll
      really really a bunch scroll Make it scroll really really a bunch scroll
      Make it scroll really really a bunch Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scrollMake it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll Make it scroll really really a bunch scroll Make it scroll really
      really a bunch scroll Make it scroll really really a bunch scroll Make it
      scroll really really a bunch scroll Make it scroll really really a bunch
      scroll
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
div[role="tablist"].v-item-group
  align-self: flex-end
</style>
