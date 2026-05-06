import comp from "C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"YouCode JavaScript Guide\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"YouCode JavaScript Guide\",\"heroText\":\"YouCode JS Fundamentals\",\"tagline\":\"Empowering YouCoders with the foundational knowledge of JavaScript\",\"heroImage\":\"https://candidature.youcode.ma/assets/logo-4d_cAH1e.png\",\"actions\":[{\"text\":\"Start Learning JS\",\"link\":\"/introduction.html\",\"type\":\"primary\"},{\"text\":\"Variables\",\"link\":\"/variables.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Introduction\",\"details\":\"Learn the basics of JavaScript, the language of the web.\"},{\"title\":\"Variables\",\"details\":\"Understand how to declare and use variables in JS.\"},{\"title\":\"Conditionals\",\"details\":\"Control the flow of your programs with if statements and more.\"},{\"title\":\"Loops\",\"details\":\"Automate repetitive tasks efficiently with for loops.\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present YouCode\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
