<template>
  <!-- <v-chip-group column> -->
  <!-- <v-chip color="primary">
        <strong>Test1</strong>
      </v-chip>
      <v-chip color="primary">
        <strong>Test2</strong>
      </v-chip>
      <v-chip color="primary">
        <strong>Test3</strong>
      </v-chip>
      <v-chip color="primary">
        <strong>Test4</strong>
      </v-chip>
      <v-chip color="primary">
        <strong>Test5</strong>
      </v-chip>
    </v-chip-group> -->
  <pdf src="~/assets/Resume_9-21-20.pdf"></pdf>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "Skills",
  components: {
    pdf,
  },
  data: () => ({
    projects: {},
  }),
};
</script>

<style lang="scss" scoped></style>
