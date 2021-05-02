<template>
  <v-container>
    <h1>{{ displayText }}<span class="typewriter-caret"></span></h1>
  </v-container>
</template>

<script>
const TYPE_FREQUENCY_MS = 125;
const STATE_MACHINE_PERIOD_MS = TYPE_FREQUENCY_MS;
const FLASH_WAIT_TIME_MS = 2000;
const FLASH_COUNT_MAX = FLASH_WAIT_TIME_MS / STATE_MACHINE_PERIOD_MS;

export default {
  name: "Typewriter",
  data: () => ({
    characterIndex: 0,
    displayText: "",
    flashCounter: 0,
    messageIndex: 0,
    state: "drawing",
  }),
  methods: {
    incrementMessageIndex() {
      this.messageIndex++;
      if (this.messageIndex >= this.messages.length) {
        this.messageIndex = 0;
      }
    },
    type() {
      const currentMessage = this.messages[this.messageIndex];
      if (this.state === "drawing") {
        // Determine if the entire message has been typed
        if (this.displayText.length < currentMessage.length) {
          // Continue typing the message
          this.displayText += currentMessage[this.displayText.length];
        } else {
          // Stop typing and begin erasing the message that was just typed
          this.toggleCaretFlashing();
          this.state = "flashing";
        }
      } else if (this.state === "erasing") {
        if (this.displayText.length > 0) {
          // Continue erasing the message, one character at a time
          this.displayText = this.displayText.slice(0, -1);
        } else {
          // Stop erasing and begin typing the new message
          this.state = "drawing";
          this.incrementMessageIndex();
        }
      } else if (this.state === "flashing") {
        this.flashCounter++;
        if (this.flashCounter === FLASH_COUNT_MAX) {
          this.toggleCaretFlashing();
          this.state = "erasing";
          this.flashCounter = 0;
        }
      }
    },
    toggleCaretFlashing() {
      const typewriterCaret = document.querySelector("span.typewriter-caret");
      typewriterCaret.classList.toggle("flashing-caret");
    },
  },
  mounted() {
    setInterval(this.type, TYPE_FREQUENCY_MS);
  },
  props: {
    messages: Array,
  },
};
</script>

<style lang="scss" scoped>
span {
  border-right: 0.1px solid red;
}

.flashing-caret {
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>
