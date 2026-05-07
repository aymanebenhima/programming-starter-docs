import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/programming-starter-docs/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'YouCode Pseudo Code Guide',
      description: 'Introduction to Algorithms and Pseudo Code for YouCoders',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Guide Pseudo Code YouCode',
      description: 'Introduction à l\'algorithmique et au pseudo code pour YouCoders',
    },
    '/ar/': {
      lang: 'ar-MA',
      title: 'دليل الخوارزميات YouCode',
      description: 'مقدمة في الخوارزميات والكود الزائف لـ YouCoders',
      dir: 'rtl',
    }
  },

  theme: defaultTheme({
    logo: 'https://candidature.youcode.ma/assets/logo-4d_cAH1e.png',

    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [],
        sidebar: ['/', '/introduction', '/variables', '/conditionals', '/loops'],
      },
      '/fr/': {
        selectLanguageName: 'Français',
        navbar: [],
        sidebar: ['/fr/', '/fr/introduction', '/fr/variables', '/fr/conditionals', '/fr/loops'],
      },
      '/ar/': {
        selectLanguageName: 'العربية',
        navbar: [],
        sidebar: ['/ar/', '/ar/introduction', '/ar/variables', '/ar/conditionals', '/ar/loops'],
      }
    }
  }),

  bundler: viteBundler(),
})
