<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <strong>{{ experienceInfo.companyName }}</strong
          >&nbsp;—&nbsp; <i>{{ experienceInfo.jobTitle }}</i> &nbsp;{{
            experienceInfo.emoji
          }}
        </v-col>
        <v-spacer />
        <v-col>
          <v-row justify="end">
            {{ experienceInfo.startDate }}–{{
              experienceInfo.endDate || "PRESENT"
            }}
          </v-row>
          <v-row justify="end">
            {{ experienceInfo.location }}
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Experience",
  props: {
    experienceInfo: Object,
  },
};
</script>

<style lang="scss" scoped></style>
