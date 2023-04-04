<script setup>
  import BlockLoader from '~/components/Blocks/BlockLoader.vue';
  import LoginButton from '~/components/Buttons/LoginButton.vue'
  import { checkAndAuth, logout } from '~/utils/auth.js';

  const access_token = ref('');
  const state = ref('LOADING');

  if (process.client) {
    const res = await checkAndAuth();
    state.value = res.state;
    access_token.value = res.accessToken;
  }

  definePageMeta({
    title: 'Auth'
  });

  useHead({
    meta: [
      {
        name: "description",
        content: 'Authorization on the website'
      },
    ]
  });
  
  async function logoutCaller() {
    const res = await logout();
    state.value = res.state;
    access_token.value = res.accessToken;
  }

</script>

<template>
  <main class="wrapper">
    <p class="text-attractive center">{{ $t('Authorization') }}</p>
    <div class="auth-container">
      <div class="box">
        <block-loader v-if="state === 'LOADING'"/>
        <template v-else-if="access_token && access_token.length && state === 'SUCCESS'">
          <p class="success">{{ $t('You are logged in')}}</p>
          <div class="buttons">
            <button class="button error" @click="logoutCaller()">{{ $t('Log out') }}</button>
            <NuxtLink to="/" class="button">← {{ $t('To the main page') }}</NuxtLink>
          </div>
        </template>
        <template v-else>
          <p v-if="state === 'FAILURE'" class="error">{{ $t('An error occurred during authorization. Try again')}}</p>
          <login-button/>
        </template>
      </div>
    </div>
  </main>
</template>
