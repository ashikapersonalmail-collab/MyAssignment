let browser ="Chrome"
function checkBrowserVersion(callBack) {
    setTimeout(() => {
        
   callBack(browser) }, 2000);
}
function delayCallBack(version) {
    console.log("Browser version using callback"+version);
    
    
}
checkBrowserVersion(delayCallBack)