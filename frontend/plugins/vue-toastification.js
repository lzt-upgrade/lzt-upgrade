import Toast from 'vue-toastification';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    toastClassName: 'toast',
  })
})
