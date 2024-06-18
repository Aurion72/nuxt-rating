import { defineNuxtModule, addComponentsDir, createResolver } from "@nuxt/kit";
import { name, version } from "../package.json";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "nuxtRating",
    compatibility: {
      nuxt: "^3.0.0-rc.8",
    },
    defaults: {},
  },
  defaults: {},
  setup() {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");

    addComponentsDir({
      path: resolve(runtimeDir, "components"),
      watch: false,
    });
  },
});
