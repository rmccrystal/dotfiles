chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request === 'inject-open-with-kami-button') {
    var tabId = sender.tab.id;
    // Inject the classroom button CSS
    chrome.tabs.insertCSS(tabId, {file: 'notable/classroom/styles.css'}, function() {
      // Inject open with Kami button CSS
      chrome.tabs.insertCSS(tabId, {file: 'notable/viewer/open_with_kami.css'}, function() {
        // Load the HTML template to inject
        var templateUrl = chrome.runtime.getURL('notable/viewer/open_with_kami.html');

        var xhr = new XMLHttpRequest();
        xhr.onload = function(e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              sendResponse(xhr.responseText);
            }
          }
        };
        xhr.open('GET', templateUrl, true);
        xhr.send(null);
      });
    });
    return true;
  }
});
