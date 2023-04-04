<script setup>
import InvisibleButton from '~/components/Buttons/InvisibleButton.vue';

const { locale, locales, setLocale } = useI18n();

const colorModes = {
  system: {
    code: 'system',
    emoji: 'gg:screen',
  },
  light: {
    code: 'light',
    emoji: 'gg:sun',
  },
  dark: {
    code: 'dark',
    emoji: 'gg:moon',
  },
}

function switchColorMode(currentMode) {
  const nextMode = currentMode.value === 'dark' ? 'light' : 'dark'
  currentMode.preference = nextMode;
}

</script>

<template>
  <ClientOnly>
    <invisible-button @click="switchColorMode($colorMode)">
      <template #icon>
        <Icon class="big-icon" :name="colorModes[$colorMode.value].emoji" />
      </template>
    </invisible-button>
  </ClientOnly>
</template>