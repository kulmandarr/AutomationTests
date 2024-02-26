import { defineConfig, devices } from "playwright/test";

export default defineConfig({
  testDir: "acceptance-tests/playwright/integration",
  fullyParallel: true,
  workers: 3,
  use: {
    baseURL: "https://automationteststore.com/",
    trace: "on-first-retry",
    headless: true,
    launchOptions: {
      devtools: false,
      downloadsPath: 'acceptance-tests/playwright/downloads'
    }
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "safari",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
