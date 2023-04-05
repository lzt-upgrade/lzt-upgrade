// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
import config from './config/config.js';

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        'nuxt-icon',
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    i18n: {
        dynamicRouteParams: true,
        strategy: 'no_prefix',
        baseUrl: config.siteDonateDomain,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            // recommended
        },
        locales: [
            {
                code: 'ru',
                iso: 'ru-RU',
                name: 'Русский',
                emoji: '🇷🇺',
                file: 'ru.yml' 
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                emoji: '🇬🇧',
                file: 'en-US.yml'
            },
        ], // used in URL path prefix
        defaultLocale: 'ru',   // default locale of your project for Nuxt pages and routings
        langDir: 'locales',
        lazy: true,
        vueI18n: {
            legacy: false,
            locale: 'ru',
        }
    },
    ogImage: {
        fonts: ['Open Sans:400', 'Open Sans:500', 'Open Sans:600']
    },
    colorMode: {
        preference: 'system',
        fallback: 'dark',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
    },
    css: [
        '~/assets/styles/main.scss',
        'vue-final-modal/style.css',
        'vue-toastification/dist/index.css'
    ],
    app: {
        head: {
            titleTemplate: '%pageTitle %titleSeparator %siteName',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'keywords', content: 'lolzteam, lzt, lolz, zelenka, lolz guru, forum, социальная инженерия, lzt upgrade, lztup, lolzup, lzt helper, helper, extension, расширение для лолза, лолз, расширение, форум, лолз апгрейд, lzt_upgrade' },
            ],
            link: [
                { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' },
            ]
        }
    },
    vite: {
        // server: {
        //     https: {
        //         key: fs.readFileSync('/etc/letsencrypt/live/donate.famesrv.ru/privkey.pem'),
        //         cert: fs.readFileSync('/etc/letsencrypt/live/donate.famesrv.ru/fullchain.pem'),
        //     },
        //     hmr: {
        //         protocol: 'wss',
        //     }
        // }
    },
    env: {
        baseUrl: `http://0.0.0.0:${process.env.PORT}` || 'http://localhost:3000'
    },
    runtimeConfig: {
        indexable: process.env.NUXT_INDEXABLE,
        public: {
            siteUrl: config.siteDonateDomain || 'https://example.com',
            siteName: config.siteName,
            siteDescription: config.siteMetaDescription,
            titleSeparator: config.titleSeparator,
            language: 'ru', // default meta language
        },
    },
    debug: false,
})
