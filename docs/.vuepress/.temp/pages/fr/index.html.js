import comp from "C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/fr/index.html.vue"
const data = JSON.parse("{\"path\":\"/fr/\",\"title\":\"Guide Pseudo Code YouCode\",\"lang\":\"fr-FR\",\"frontmatter\":{\"home\":true,\"title\":\"Guide Pseudo Code YouCode\",\"heroText\":\"Algorithmique & Pseudo Code\",\"tagline\":\"Autonomiser les YouCoders avec la logique universelle de la programmation\",\"heroImage\":\"https://candidature.youcode.ma/assets/logo-4d_cAH1e.png\",\"actions\":[{\"text\":\"Commencer à Apprendre la Logique\",\"link\":\"/fr/introduction.html\",\"type\":\"primary\"},{\"text\":\"Variables\",\"link\":\"/fr/variables.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Introduction\",\"details\":\"Apprenez ce que sont les algorithmes et comment les ordinateurs lisent les instructions.\"},{\"title\":\"Variables\",\"details\":\"Comprenez comment stocker et manipuler des données logiquement.\"},{\"title\":\"Conditionnelles\",\"details\":\"Contrôlez le flux des algorithmes avec la logique de prise de décision.\"},{\"title\":\"Boucles\",\"details\":\"Automatisez les tâches répétitives en utilisant des structures de boucles universelles.\"}],\"footer\":\"Copyright © YouCode\"},\"headers\":[],\"git\":{\"updatedTime\":1778106929000,\"contributors\":[{\"name\":\"Aymane Benhima\",\"username\":\"\",\"email\":\"aymanebenhima.gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"02c5b3cc51f9da680f9ea7a50ccdf218e1fb7b68\",\"time\":1778106929000,\"email\":\"aymanebenhima.gmail.com\",\"author\":\"Aymane Benhima\",\"message\":\"feat: add multilingual documentation for variables, conditionals, and loops\"},{\"hash\":\"d0ac587de5ea00d050dbb9b4ba983301d2e58cae\",\"time\":1778105142000,\"email\":\"aymanebenhima.gmail.com\",\"author\":\"Aymane Benhima\",\"message\":\"feat: initialize project with VuePress and multilingual documentation for JS fundamentals\"}]},\"filePathRelative\":\"fr/README.md\"}")
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
