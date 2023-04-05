<script setup>
  import config from '~/config/config.js';

  const loginUrl = `https://api.${config.forumDomain}/oauth/authorize?response_type=token&client_id=${config.clientId}&scope=read`;
</script>

<template>
  <a id="login-button" class='button login' :href="loginUrl">
    <nuxt-img src="/images/lolzteam.svg"/>
    {{ $t('Login via LOLZTEAM') }}
  </a>
</template>