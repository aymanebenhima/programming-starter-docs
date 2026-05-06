export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"YouCode JS Docs\",\"description\":\"JavaScript Documentation for YouCoders\"},\"/fr/\":{\"lang\":\"fr-FR\",\"title\":\"Docs JS YouCode\",\"description\":\"Documentation JavaScript pour YouCoders\"},\"/ar/\":{\"lang\":\"ar-MA\",\"title\":\"مستندات جافا سكريبت YouCode\",\"description\":\"وثائق جافا سكريبت لـ YouCoders\",\"dir\":\"rtl\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
