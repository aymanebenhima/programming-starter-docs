export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"YouCode Pseudo Code Guide\",\"description\":\"Introduction to Algorithms and Pseudo Code for YouCoders\"},\"/fr/\":{\"lang\":\"fr-FR\",\"title\":\"Guide Pseudo Code YouCode\",\"description\":\"Introduction à l'algorithmique et au pseudo code pour YouCoders\"},\"/ar/\":{\"lang\":\"ar-MA\",\"title\":\"دليل الخوارزميات YouCode\",\"description\":\"مقدمة في الخوارزميات والكود الزائف لـ YouCoders\",\"dir\":\"rtl\"}}}")

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
