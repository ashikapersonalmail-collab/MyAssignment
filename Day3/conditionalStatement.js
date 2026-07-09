function launchBrowser(browserName) {
    
    if (browserName == "chrome") {
        console.log("Brower is Chrome");
    }

     else {
        console.log("Other Browser");
     }
}
launchBrowser("chrome")

function runTests(testType) {
    switch (testType) {
        case  "smoke":
            console.log("Smoke");
            break;
        case "sanity":
            console.log("Sanity");
            break;
            case "regression":
            console.log("Regression");    
            break;
        default: 
        console.log("Other test type");
            break;
    }
}
runTests("sanity")