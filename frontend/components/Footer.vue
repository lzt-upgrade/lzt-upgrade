<script setup>
  import config from '~/config/config.js'
</script>

<template>
  <footer class="footer">
    <div class="footer-logo">
      <NuxtLink to="/">
        <nuxt-img src="/images/logo.svg" :alt="config.siteName"/>
      </NuxtLink>
    </div>

    <div class="footer-links">
      <a :href="config.siteUserAgreement">{{ $t('User agreement') }}</a>
      <NuxtLink to="/api/docs">API</NuxtLink>
    </div>
  </footer>
</template>