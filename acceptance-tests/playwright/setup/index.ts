import { test as base } from "@playwright/test";
import AppPages from "./application";
import { Page } from 'playwright/test';

type MyFixtures = {
  appPages: AppPages
}

export const test = base.extend<MyFixtures>({
  appPages: async({ page }: Page, use: (appPages: AppPages) => AppPages) => {
    let allAppPages = new AppPages(page);
    await page.goto("/")
    use(allAppPages);
  }
});
