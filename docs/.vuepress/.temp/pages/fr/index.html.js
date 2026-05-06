import comp from "C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/fr/index.html.vue"
const data = JSON.parse("{\"path\":\"/fr/\",\"title\":\"Guide JavaScript YouCode\",\"lang\":\"fr-FR\",\"frontmatter\":{\"home\":true,\"title\":\"Guide JavaScript YouCode\",\"heroText\":\"Fondamentaux JS YouCode\",\"tagline\":\"Autonomiser les YouCoders avec les bases de JavaScript\",\"heroImage\":\"https://candidature.youcode.ma/assets/logo-4d_cAH1e.png\",\"actions\":[{\"text\":\"Commencer à Apprendre JS\",\"link\":\"/fr/introduction.html\",\"type\":\"primary\"},{\"text\":\"Variables\",\"link\":\"/fr/variables.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Introduction\",\"details\":\"Apprenez les bases de JavaScript, le langage du web.\"},{\"title\":\"Variables\",\"details\":\"Comprenez comment déclarer et utiliser des variables en JS.\"},{\"title\":\"Conditionnelles\",\"details\":\"Contrôlez le flux de vos programmes avec les instructions if et plus encore.\"},{\"title\":\"Boucles\",\"details\":\"Automatisez efficacement les tâches répétitives avec les boucles for.\"}],\"footer\":\"Sous licence MIT | Copyright © 2024-présent YouCode\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"fr/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
