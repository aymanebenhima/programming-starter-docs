import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'YouCode JS Docs',
      description: 'JavaScript Documentation for YouCoders',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Docs JS YouCode',
      description: 'Documentation JavaScript pour YouCoders',
    },
    '/ar/': {
      lang: 'ar-MA',
      title: 'مستندات جافا سكريبت YouCode',
      description: 'وثائق جافا سكريبت لـ YouCoders',
      dir: 'rtl',
    }
  },

  theme: defaultTheme({
    logo: 'https://candidature.youcode.ma/assets/logo-4d_cAH1e.png',

    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: ['/', '/introduction', '/variables', '/conditionals', '/loops'],
        sidebar: ['/', '/introduction', '/variables', '/conditionals', '/loops'],
      },
      '/fr/': {
        selectLanguageName: 'Français',
        navbar: ['/fr/', '/fr/introduction', '/fr/variables', '/fr/conditionals', '/fr/loops'],
        sidebar: ['/fr/', '/fr/introduction', '/fr/variables', '/fr/conditionals', '/fr/loops'],
      },
      '/ar/': {
        selectLanguageName: 'العربية',
        navbar: ['/ar/', '/ar/introduction', '/ar/variables', '/ar/conditionals', '/ar/loops'],
        sidebar: ['/ar/', '/ar/introduction', '/ar/variables', '/ar/conditionals', '/ar/loops'],
      }
    }
  }),

  bundler: viteBundler(),
})
