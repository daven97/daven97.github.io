<template>
  <v-container>
    <experience
      v-for="experience in experiences"
      :experienceInfo="experience"
      :key="experience.startDate"
    />
  </v-container>
</template>

<script>
import experienceInfo from "@/assets/resume.json";
import Experience from "./Experience.vue";

export default {
  name: "Experiences",
  components: { Experience },
  data: () => ({
    experiences: {},
  }),
  mounted() {
    // Display experience in reverse chronological order
    this.experiences = experienceInfo.experience.reverse();
  },
};
</script>

<style lang="scss" scoped></style>
