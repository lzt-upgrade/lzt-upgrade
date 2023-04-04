<script setup>
import InvisibleButton from '~/components/Buttons/InvisibleButton.vue';
const dropdownState = ref(false);

onBeforeMount(() => {
  document.addEventListener('click', globalDropDownListener);
});

onUnmounted(() => {
  document.removeEventListener('click', globalDropDownListener);
});

const dropdownAction = () => {
  dropdownState.value = !dropdownState.value;
};

const globalDropDownListener = (e) => {
  const dropdown = document.getElementById('dropdown');
  if (e.target !== dropdown && !dropdown.contains(e.target)) {
    dropdownState.value = false;
  }
};

</script>

<template>
    <div class="dropdown" id="dropdown">
      <invisible-button @click="dropdownAction()">
        <template #icon>
          <slot name="icon"></slot>
        </template>
        <template #text>
          <slot name="text"></slot>
        </template>
      </invisible-button>
      <div class="dropdown-content" :class="dropdownState === true ? 'active' : ''">
        <slot name="content"></slot>
      </div>
    </div>
</template>