import comp from "C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"YouCode Pseudo Code Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"YouCode Pseudo Code Guide\",\"heroText\":\"Algorithms & Pseudo Code\",\"tagline\":\"Empowering YouCoders with the universal logic of programming\",\"heroImage\":\"https://candidature.youcode.ma/assets/logo-4d_cAH1e.png\",\"actions\":[{\"text\":\"Start Learning Logic\",\"link\":\"/introduction.html\",\"type\":\"primary\"},{\"text\":\"Variables\",\"link\":\"/variables.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Introduction\",\"details\":\"Learn what algorithms are and how computers read instructions.\"},{\"title\":\"Variables\",\"details\":\"Understand how to store and manipulate data logically.\"},{\"title\":\"Conditionals\",\"details\":\"Control the flow of algorithms with decision-making logic.\"},{\"title\":\"Loops\",\"details\":\"Automate repetitive tasks using universal loop structures.\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present YouCode\"},\"headers\":[],\"git\":{\"updatedTime\":1778105142000,\"contributors\":[{\"name\":\"Aymane Benhima\",\"username\":\"\",\"email\":\"aymanebenhima.gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"d0ac587de5ea00d050dbb9b4ba983301d2e58cae\",\"time\":1778105142000,\"email\":\"aymanebenhima.gmail.com\",\"author\":\"Aymane Benhima\",\"message\":\"feat: initialize project with VuePress and multilingual documentation for JS fundamentals\"}]},\"filePathRelative\":\"README.md\"}")
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
