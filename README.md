# AutomationTests
This project contains some basic tests to automate the end 2 end tests of site https://automationteststore.com/ using both cypress and playwright.


## Playwright tests
### Playwright configuration
Configuration of playwright can be configured in playwright.config.ts.

### Running tests using playwright
To execute tests using playwright on chromium browser, execute the following command
```npm run playwright:test:chromium```

To execute playwright tests on all browsers, execute the following command
```npm run playwright:test```

## Cypress Tests
### Cypress configuration
Configuration of cypress can be configured in cypress.config.ts.

### Running tests using cypress
To execute tests using cypress on all browser, execute the following command
```npm run cypress:test```

### Running cypress tests on specific browser
To execute tests using cypress on chrome browser, execute the following command
```npm run cypress:test --browser chrome```
