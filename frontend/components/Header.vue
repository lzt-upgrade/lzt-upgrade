<script setup>
  import DropDownLocales from './DropDowns/DropDownLocales.vue';
  import ThemesButton from './Buttons/ThemesButton.vue';
  import HeaderMenu from './Menus/HeaderMenu.vue';
  import config from '~/config/config.js'
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <NuxtLink to="/" class="logo">
        <nuxt-img src="/images/logo.svg" :alt="config.siteName"/>
      </NuxtLink>
      <div class="navbar">
        <NuxtLink class="navbar-item" to="/support"> {{ $t('Support') }} </NuxtLink>
      </div>
    </nav>
    <div class="navbar">
      <themes-button class="navbar-item" />
      <drop-down-locales class="navbar-item" />
    </div>
    <HeaderMenu/>
  </header>
</template>