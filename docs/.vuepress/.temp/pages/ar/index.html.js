import comp from "C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/ar/index.html.vue"
const data = JSON.parse("{\"path\":\"/ar/\",\"title\":\"\",\"lang\":\"ar-MA\",\"frontmatter\":{\"sidebar\":false,\"pageClass\":\"custom-home-page\"},\"headers\":[],\"git\":{\"updatedTime\":1778107732000,\"contributors\":[{\"name\":\"Aymane Benhima\",\"username\":\"\",\"email\":\"aymanebenhima.gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"b42274e54c4287cbab68bebba7fe46fbb790e215\",\"time\":1778107732000,\"email\":\"aymanebenhima.gmail.com\",\"author\":\"Aymane Benhima\",\"message\":\"feat: implement multilingual homepages and dynamic locale-based text direction and footer rendering\"},{\"hash\":\"02c5b3cc51f9da680f9ea7a50ccdf218e1fb7b68\",\"time\":1778106929000,\"email\":\"aymanebenhima.gmail.com\",\"author\":\"Aymane Benhima\",\"message\":\"feat: add multilingual documentation for variables, conditionals, and loops\"},{\"hash\":\"d0ac587de5ea00d050dbb9b4ba983301d2e58cae\",\"time\":1778105142000,\"email\":\"aymanebenhima.gmail.com\",\"author\":\"Aymane Benhima\",\"message\":\"feat: initialize project with VuePress and multilingual documentation for JS fundamentals\"}]},\"filePathRelative\":\"ar/README.md\"}")
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
