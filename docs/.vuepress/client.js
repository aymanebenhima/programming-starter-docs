import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ router }) {
    router.afterEach(() => {
      // Small timeout to wait for VuePress to update the html lang attribute
      setTimeout(() => {
        const lang = document.documentElement.lang;
        if (lang && lang.startsWith('ar')) {
          document.documentElement.dir = 'rtl';
        } else {
          document.documentElement.dir = 'ltr';
        }
      }, 50);
    })
  },
})
