var pageConditions = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
     pageUrl: {
        schemes: ["https", "http", ],
      },
    }),
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()],
};
// rule for when our app can be used
chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([pageConditions]);
  });
});

//Future Google Calendar 
chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
  
});


