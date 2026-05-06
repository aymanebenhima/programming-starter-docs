export const themeData = JSON.parse("{\"logo\":\"https://candidature.youcode.ma/assets/logo-4d_cAH1e.png\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"navbar\":[],\"sidebar\":[\"/\",\"/introduction\",\"/variables\",\"/conditionals\",\"/loops\"]},\"/fr/\":{\"selectLanguageName\":\"Français\",\"navbar\":[],\"sidebar\":[\"/fr/\",\"/fr/introduction\",\"/fr/variables\",\"/fr/conditionals\",\"/fr/loops\"]},\"/ar/\":{\"selectLanguageName\":\"العربية\",\"navbar\":[],\"sidebar\":[\"/ar/\",\"/ar/introduction\",\"/ar/variables\",\"/ar/conditionals\",\"/ar/loops\"]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
