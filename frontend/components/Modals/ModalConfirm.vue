<script setup>
import { VueFinalModal } from 'vue-final-modal'

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  buttonTitle: {
    type: String,
    required: false,
  },
})

const emit = defineEmits(['confirm']);
</script>

<template>
  <VueFinalModal
    class="modal"
    content-class="modal-content"
  >
    <h3 class="title">
      {{ title }}
    </h3>
    <slot />
    <button class="button" @click="emit('confirm')">
      {{ buttonTitle }}
    </button>
  </VueFinalModal>
</template>
