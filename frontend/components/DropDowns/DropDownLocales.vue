<script setup>
import InvisibleButton from '~/components/Buttons/InvisibleButton.vue';
import DropDown from '~/components/DropDowns/DropDown.vue';

const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
});


const currentLocale = computed(() => {
  return (locales.value).find(i => i.code === locale.value)
});

</script>

<template>
  <drop-down>
    <template #icon>
      <Icon class="big-icon" :name="currentLocale.emoji" />
    </template>
    <template #text>
      <span class="text locales">{{ $t(locale) }}</span>
    </template>
    <template #content>
      <div class="dropdown-item" v-for="availableLocale in locales" :key="availableLocale.code">
        <invisible-button @click="setLocale(availableLocale.code)">
          <template #icon>
            <Icon class="big-icon" :name="availableLocale.emoji" />
          </template>
          <template #text>
            <span class="text locales">{{ availableLocale.name }}</span>
          </template>
        </invisible-button>
      </div>
    </template>
  </drop-down>
</template>