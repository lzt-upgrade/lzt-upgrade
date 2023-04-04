<script setup>
  import Menu from '~/components/Menus/Menu.vue';
  import ThemesButton from '~/components/Buttons/ThemesButton.vue';
  import LocalesMenu from '~/components/Menus/LocalesMenu.vue';
  import config from '~/config/config.js'
</script>

<template>
  <Menu>
    <template #icon>
      <Icon class="big-icon" name="gg:menu" />
    </template>
    <template #content>
      <a class="menu-item" :href="config.siteRedirectDomain"> {{ $t('Main') }} </a>
      <NuxtLink class="menu-item" to="/support"> {{ $t('Support') }} </NuxtLink>
      <themes-button class="menu-item" />
      <locales-menu class="menu-item" />
    </template>
  </Menu>
</template>