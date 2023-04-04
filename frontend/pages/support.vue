<script setup>
  import config from '~/config/config.js';
  import { ModalsContainer, useModal } from 'vue-final-modal';
  import ModalFull from '~/components/Modals/ModalFull.vue';

  const { t } = useI18n();

  const supportModalTitle = ref('');
  const supportModalText = ref('');

  definePageMeta({
    title: 'Support'
  })

  useHead({
    meta: [
      {
        name: "description",
        content: t('Do you have problems with donation? Contact the technical support of our project...')
      }
    ]
  });

  const { open, close } = useModal({
    component: ModalFull,
    attrs: {
      title: supportModalTitle,
      text: supportModalText,
      copyButton: true,
      onClose() {
        close();
      },
    },
  });
</script>

<template>
  <main class="wrapper">
    <Breadcrumbs>
      <template #breadcrumb="{ to, title }">
        <NuxtLink :to="to">
          {{ $t(title) }}
        </NuxtLink>
      </template>
    </Breadcrumbs>
    <h1 class="text-attractive center">
      {{ $t('Support') }}
    </h1>
    <h2 class="subtext-attractive center">
      {{ $t('To switch to technical support, choose a convenient way to communicate') }}.
    </h2>
    <div class="support-links">
      <template v-for="supportLink in config.support">
        <div v-if="supportLink.status" :key="supportLink.title" class="support-item">
          <Icon :name="supportLink.icon"/>
          <a
            :href="supportLink.type === 'link' ? supportLink.href : '#'"
            :target="supportLink.type === 'link' ? '_blank' : '_self'"
            @click="supportLink.type === 'modal' ? (supportModalTitle = supportLink.title, supportModalText = supportLink.href, open()) : ''"
          >
            {{ supportLink.title }}
          </a>
        </div>
      </template>

    </div>
    <ModalsContainer />
  </main>
</template>
