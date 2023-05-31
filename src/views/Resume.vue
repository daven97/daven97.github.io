<template>
  <div>
    <pdf src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"></pdf>
  </div>
  <!-- <pdf src="../assets/Resume_9-21-20.pdf"></pdf> -->
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
};
</script>
