import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
})

test('Verify Header contains site name and Home CTA', async ({ page }) => {
    //Site name is in the login page
    const headerText = page.locator('.mainHeading')
    await expect(headerText).toContainText('XYZ Bank')
    //Home button is available in the login page
    await expect(page.getByRole("button", { name: "Home" })).toBeVisible()
})

test('Verify login CTAs are visible', async ({ page }) => {
    //Customer login
    await expect(page.getByRole("button", { name: "Customer Login" })).toBeVisible()
    //Bank manager login
    await expect(page.getByRole("button", { name: "Bank Manager Login" })).toBeVisible()
})

test('Verify customer login CTA directs user to the customer selection page', async ({ page }) => {
    //Direct customer to customer selection page if customer login button is selected
    await page.getByRole("button", { name: "Customer Login" }).click()
    await page.waitForTimeout(500) //add a wait because there is a delay on the url change and playwright will instantly produce an error 
    await expect(page.url()).toBe('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer')
})

test('Verify bank manager login CTA directs user to the bank manager page', async ({ page }) => {
    //Direct user to bank manager page if customer bank manager button is selected
    await page.getByRole("button", { name: "Bank Manager Login" }).click()
    await page.waitForTimeout(500)
    await expect(page.url()).toBe('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager')
})

test('', async ({ page }) => {

})