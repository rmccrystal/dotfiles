var tabId;

chrome.runtime.sendMessage('what-is-my-tab-id', function(response) {
  tabId = response;
});

// Run the loader as a web worker to avoid cross origin issues
var worker = new Worker(chrome.runtime.getURL('loader.js'));

var viewer = window.parent;

var targetOrigin = 'https://web.kamihq.com';

function transferPdf(id, url, pdf) {
  // Use a message channel port to transfer as postMessage doesn't seem to support transferrables
  var messageChannel = new MessageChannel();

  // Tell the viewer the nature of the message & give them a port to communicate
  viewer.postMessage({
    'kami-extension-pdf-transfer': true,
    'id': id,
    'url': url
  }, targetOrigin, [messageChannel.port2]);

  // Once the viewer is ready, transfer the PDF
  messageChannel.port1.onmessage = function(event) {
    if (event.data === 'ready') {
      messageChannel.port1.postMessage(pdf, [pdf]);
    }
  };
}

function loadUrl(id, url) {
  var messageChannel = new MessageChannel();

  if (url.indexOf('drive:') === 0 || url.indexOf('filesystem:') === 0) { 
    // Ask the extension to resolve the URLs 
    // Resolving URLs can only be done on the extension side 
    chrome.runtime.sendMessage({'resolve-url': url}, function(response) {  
      loadUrl(id, response.url); 
    });
    return;
  }
  
  // Listen to messages from the web worker
  messageChannel.port1.onmessage = function(event) {
    var data = event.data;

    // The delegate is ready, give it the URL to load
    if (data === 'ready') {
      messageChannel.port1.postMessage(url);
      return;
    }

    // Report PDF loading progress to viewer
    if ('progress' in data) {
      viewer.postMessage({
        'kami-extension-file-load-progress': true,
        'id': id,
        'url': url,
        'progress': data['progress']
      }, targetOrigin);
      return;
    }

    // An error occurred while loading the PDF
    if ('error' in data) {
      viewer.postMessage({
        'kami-extension-file-load-error': true,
        'id': id,
        'url': url,
        'error': data['error']
      }, targetOrigin);
      return;
    }

    // The delegate has loaded and passed us the PDF in ArrayBuffer form
    if (typeof data === 'object' && 'byteLength' in data) {
      transferPdf(id, url, data);
      return;
    }
  };

  // Give the worker a port to communicate to us with
  worker.postMessage(null, [messageChannel.port2]);
}

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  if (typeof request !== 'object') {
    return;
  }

  // Make sure not to listen to load requests from other tabs
  if (sender.tab == null || sender.tab.id !== tabId) {
    return;
  }

  if ('load-pdf-url' in request) {
    loadUrl(request['id'], request['load-pdf-url']);
  }
});
