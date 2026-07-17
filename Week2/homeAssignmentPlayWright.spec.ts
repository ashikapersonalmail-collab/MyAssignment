//npx playwright test --project=chromium homeAssignmentPlayWright.spec.ts
import { chromium,webkit,test } from "@playwright/test";
import { title } from "node:process";
test("browser launch",async () => {
    // Create Edge Browser
    const edgeBrowser=await chromium.launch({channel:"msedge",headless:false})
    // launch Edge context
    const context=await edgeBrowser.newContext()
    // launch edge page
    const page = await context.newPage()
    const redbus = await page.goto( "https://www.redbus.in/")   
    console.log("EDGE BROWSER:",await page.title() );
    console.log("EDGE BROWSER:",page.url());
 //npx playwright test --project=webkit homeAssignmentPlayWright.spec.ts   
    
    //Create webkit browser
    const webkitBrowser =await webkit.launch({headless:false})
    // launch webkit browser context
    const webkitContext = await webkitBrowser.newContext()
    // launch webkit browser page
    const webkitPage = await webkitContext.newPage()
    const flipKart = await webkitPage.goto("https://www.flipkart.com/") 
    console.log("Webkit Browser:",await webkitPage.title());
    console.log("Webkit Browser:",webkitPage.url());

    

    
    
})

// npx playwright test --project=webkit homeAssignmentPlayWright.spec.ts
