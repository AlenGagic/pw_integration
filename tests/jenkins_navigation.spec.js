const { test, expect } = require('@playwright/test');


test ("Testing simple navigation for Jenkins integration", async ({ page }) => {

    const homePage = "http://localhost:3000/";
    const loginButton = page.locator(".login-control-button.nav-link");

    await page.goto(homePage);

    await loginButton.waitFor();

    await loginButton.click();

    await page.waitForTimeout(4000);

    await page.close();
    ///changes
})
