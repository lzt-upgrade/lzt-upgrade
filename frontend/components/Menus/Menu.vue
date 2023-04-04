<script setup>
  import InvisibleButton from '~/components/Buttons/InvisibleButton.vue';
  const menuState = ref(false);

  const menuAction = () => {
    menuState.value = !menuState.value;
  };

  onBeforeMount(() => {
    document.addEventListener('click', globalMenuListener);
  });

  onUnmounted(() => {
    document.removeEventListener('click', globalMenuListener);
  });

  const globalMenuListener = (e) => {
    const menu = document.getElementById('menu');
    if (menu && e.target !== menu && !menu.contains(e.target)) {
      menuState.value = false;
    }
  };

</script>

<template>
  <div class="menu" id="menu">
    <invisible-button class="menu" id="menu" @click="menuAction()">
      <template #icon>
        <slot name="icon"></slot>
      </template>
      <template #text>
      </template>
    </invisible-button>
    <nav class="menu-content" :class="menuState === true ? 'active' : ''">
      <slot name="content"></slot>
    </nav>
  </div>

</template>