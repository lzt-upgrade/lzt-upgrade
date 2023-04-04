<script setup>
  import config from '~/config/config.js';

  const route = useRoute()
  const { t } = useI18n();

  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
  });

  const title = computed(() => t(route.meta.title ?? 'Main'));
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <SeoKit />
      <!-- b. Generate saotir images for every page (uses the default template) -->
      <OgImageStatic theme="dark"/>
      <Title>{{ title }}</Title>
      <Link v-for="link in head.link" :key="link.id" :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      <Meta v-for="meta in head.meta" :key="meta.id" :id="meta.id" :property="meta.property" :content="meta.content" />
    </Head>
    <Body>
      <Header/>
      <slot />
      <Footer/>
    </Body>
  </Html>
</template>