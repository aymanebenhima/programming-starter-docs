export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/conditionals.html", { loader: () => import(/* webpackChunkName: "conditionals.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/conditionals.html.js"), meta: {"title":"Conditionals: Making Decisions"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/introduction.html", { loader: () => import(/* webpackChunkName: "introduction.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/introduction.html.js"), meta: {"title":"Introduction to Pseudo Code"} }],
  ["/loops.html", { loader: () => import(/* webpackChunkName: "loops.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/loops.html.js"), meta: {"title":"Loops: Repeating Tasks Automatically"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/variables.html", { loader: () => import(/* webpackChunkName: "variables.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/variables.html.js"), meta: {"title":"Variables: Your Digital Boxes"} }],
  ["/ar/conditionals.html", { loader: () => import(/* webpackChunkName: "ar_conditionals.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/ar/conditionals.html.js"), meta: {"title":"الشروط: اتخاذ القرارات"} }],
  ["/ar/introduction.html", { loader: () => import(/* webpackChunkName: "ar_introduction.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/ar/introduction.html.js"), meta: {"title":"مقدمة في الكود الزائف (Pseudo Code)"} }],
  ["/ar/loops.html", { loader: () => import(/* webpackChunkName: "ar_loops.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/ar/loops.html.js"), meta: {"title":"الحلقات: تكرار المهام تلقائيًا"} }],
  ["/ar/", { loader: () => import(/* webpackChunkName: "ar_index.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/ar/index.html.js"), meta: {"title":""} }],
  ["/ar/variables.html", { loader: () => import(/* webpackChunkName: "ar_variables.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/ar/variables.html.js"), meta: {"title":"المتغيرات: صناديقك الرقمية"} }],
  ["/fr/conditionals.html", { loader: () => import(/* webpackChunkName: "fr_conditionals.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/fr/conditionals.html.js"), meta: {"title":"Les Conditions : Prendre des Décisions"} }],
  ["/fr/introduction.html", { loader: () => import(/* webpackChunkName: "fr_introduction.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/fr/introduction.html.js"), meta: {"title":"Introduction au Pseudo Code"} }],
  ["/fr/loops.html", { loader: () => import(/* webpackChunkName: "fr_loops.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/fr/loops.html.js"), meta: {"title":"Les Boucles : Répéter des Tâches Automatiquement"} }],
  ["/fr/", { loader: () => import(/* webpackChunkName: "fr_index.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/fr/index.html.js"), meta: {"title":""} }],
  ["/fr/variables.html", { loader: () => import(/* webpackChunkName: "fr_variables.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/fr/variables.html.js"), meta: {"title":"Les Variables : Vos Boîtes Numériques"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Youcode/Documents/dev-apps/js-docs/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
