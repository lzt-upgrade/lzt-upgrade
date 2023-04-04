<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <nuxt-img
    class="image-viewer"
    :src="src"
    :alt="alt"
    quality="100"
    loading="lazy"
  />
</template>
