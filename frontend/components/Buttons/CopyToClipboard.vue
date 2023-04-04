<script setup>
  import InvisibleButton from '~/components/Buttons/InvisibleButton.vue';
  import * as pkg from "vue-toastification";

  const { useToast } = pkg

  const props = defineProps({
    text: {
      type: String,
      required: false
    }
  });
  const toast = useToast();
  const { t } = useI18n();

  function copyToClipboard() {
    toast.success(t('Copied to clipboard!'));
    return navigator.clipboard.writeText(props.text);
  }
  
</script>

<template>
  <invisible-button @click="copyToClipboard()">
    <template #icon>
      <Icon name="material-symbols:content-copy" />
    </template>
  </invisible-button>
</template>