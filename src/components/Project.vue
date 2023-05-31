<template>
  <v-flex class="mx-auto my-auto h-100">
    <v-card class="card-image d-flex flex-column h-100" elevation="4">
      <v-img
        :src="images[0]"
        class="flex-grow-0"
        :contain="projectInfo.image.contain"
        height="250px"
        :position="projectInfo.image.position"
      ></v-img>
      <v-card-title>{{ projectInfo.name }}</v-card-title>
      <v-card-text>
        <div>{{ projectInfo.description }}</div>
        <v-chip-group column>
          <v-chip v-for="tag in projectInfo.tags" :key="tag" color="primary">
            <strong>{{ tag }}</strong>
          </v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions class="d-flex justify-end align-end flex-grow-2">
        <fa-icon-button
          v-if="projectInfo.links.demoLink"
          animationType="tada"
          color="secondary"
          :icon="['fas', 'play']"
          :onClick="openLinkInNewTab.bind(null, projectInfo.links.demoLink)"
        />
        <fa-icon-button
          v-if="projectInfo.links.sourceCodeLink"
          animationType="shake"
          color="secondary"
          :icon="['fab', 'github']"
          :onClick="test"
        />
        <fa-icon-button
          animationType="pulse"
          color="secondary"
          :icon="['fas', 'expand-arrows-alt']"
          :onClick="openDialog"
        />
        <v-dialog
          v-model="showDialog"
          :fullscreen="$vuetify.breakpoint.xsOnly"
          width="900"
        >
          <v-card>
            <v-carousel
              :hide-delimiters="images.length <= 1"
              :show-arrows="images.length > 1"
            >
              <v-carousel-item
                v-for="(image, i) in images"
                :key="i"
                :src="image"
              >
                <!-- <v-img
                  :src="imagePath"
                  class="flex-grow-0"
                  :contain="projectInfo.image.contain"
                  height="500px"
                  :position="projectInfo.image.position"
                ></v-img> -->
              </v-carousel-item>
            </v-carousel>
            <v-card-title> {{ projectInfo.name }}</v-card-title>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import FaIconButton from "@/components/fontAwesome/FaIconButton.vue";
// import FontAwesomeIconButton from "./FontAwesomeIconButton.vue";

export default {
  name: "Project",
  components: {
    FaIconButton,
  },
  computed: {},
  data: () => ({
    showDialog: false,
    images: [],
  }),
  methods: {
    openLinkInNewTab(url) {
      window.open(url, "_blank");
    },
    openDialog() {
      this.showDialog = true;
    },
    test() {
      console.log("WOrks!");
    },
  },
  mounted() {
    this.projectInfo.image.paths.forEach((path) => {
      this.images.push(require(`@/assets/images/${path}`));
    });
  },
  props: {
    projectInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.action-button-icon {
  margin: 0 5px;
}

.card-image {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: none;
}

.flex-grow-2 {
  flex-grow: 2;
}

.h-100 {
  height: 100%;
}
</style>
