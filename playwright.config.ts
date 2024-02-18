import { defineConfig, devices } from "playwright/test";

export default defineConfig({
  testDir: "acceptance-tests/playwright/integration",
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: "https://automationteststore.com/",
    trace: 'on-first-retry',
    headless: true
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']}
    }
  ],
});
