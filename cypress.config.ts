import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://automationteststore.com/",
    experimentalStudio: true,
    specPattern: "acceptance-tests/cypress/integration/**/*.spec.ts",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 5000,
});
