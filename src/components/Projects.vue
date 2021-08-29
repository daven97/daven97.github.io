<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.name"
        :cols="project.flex"
      >
        <project :projectInfo="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projectsInfo from "@/assets/projects.json";
import Project from "./Project.vue";

export default {
  name: "Projects",
  components: { Project },
  data: () => ({
    projects: {},
  }),
  mounted() {
    this.projects = projectsInfo.projects;
  },
};
</script>

<style lang="scss" scoped></style>
