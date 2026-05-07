import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ router }) {
    router.afterEach(() => {
      // Execute only on the client side (browser)
      if (typeof document !== 'undefined') {
        setTimeout(() => {
          const lang = document.documentElement.lang || 'en';
          
          // 1. RTL Logic
          if (lang.startsWith('ar')) {
            document.documentElement.dir = 'rtl';
          } else {
            document.documentElement.dir = 'ltr';
          }

          // 2. Dynamic Footer Logic (Current Year & YouCode Copyright)
          const footerElements = document.querySelectorAll('.vp-footer');
          if (footerElements.length > 0) {
            const currentYear = new Date().getFullYear();
            let copyrightText = `Copyright © ${currentYear} YouCode. All Rights Reserved.`;
            
            if (lang.startsWith('fr')) {
              copyrightText = `Copyright © ${currentYear} YouCode. Tous droits réservés.`;
            } else if (lang.startsWith('ar')) {
              copyrightText = `حقوق النشر © ${currentYear} YouCode. جميع الحقوق محفوظة.`;
            }
            
            footerElements.forEach(footer => {
              footer.textContent = copyrightText;
            });
          }
        }, 50);
      }
    })
  },
})
