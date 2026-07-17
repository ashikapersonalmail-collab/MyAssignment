import {chromium, test}from "@playwright/test"
test("browser launch",async () => {
    const browser=await chromium.launch({channel:"msedge",headless:false})
    const context=await browser.newContext()
    const page = await context.newPage()

   await page.goto("https://www.google.com/")
    
})  