import { defineAsyncComponent, type App } from "vue";

export function registerGlobalComponent(app: App<Element>) {
  app.component("layout-default"),
    defineAsyncComponent(() => import("@/components/Layout/LayoutDefault.vue"));
}
