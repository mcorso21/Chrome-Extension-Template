import { appConfig } from "./config";

const shared = {
    log: (s) => { if (appConfig.debug) {console.log(`Chrome Assistant Assistant: ${new Date()}: ${s}`); } },
    error: (s) => { console.log(`%c Chrome Assistant: ${new Date()}: ${s}`, 'color: #fc0703;'); },
    sleep: (ms) => { new Promise(res => setTimeout(res, ms)) },
    resetStorage: () => {
        try {
            chrome.storage.sync.clear(() => { });
            chrome.storage.local.clear(() => { });
        } catch(ex) {
            console.log(ex);
        }
    }
}

export {
    shared
}