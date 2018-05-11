// This must be run in the extension; it does not work in content scripts or in
// extension IFrame
//
// The window.resolveLocalFileSystemURL can be accessed by any web pages but only
// works in extensions, most likely due to the elevated privileges
function resolveFileSystemUrl(file, callback) {
  // Expand drive:-URLs to filesystem URLs (Chrome OS)
  file = file.replace(/^drive:/i, 'filesystem:' + location.origin + '/external/');

  var resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;
  resolveLocalFileSystemURL(file, function onResolvedFSURL(fileEntry) {
    fileEntry.file(function(fileObject) {
      var url = URL.createObjectURL(fileObject);
      callback(url);
    });
  }, function onFileSystemError(error) {
    // This should not happen. When it happens, just fall back to the
    // usual way of getting the File's data (via the Web worker).
    console.warn('Cannot resolve file ' + file + ', ' + error.name + ' ' + error.message);
    callback(file);
  });
}

// This handles requests from the viewer to resolve URLs from ChromeOS
// If you use "Open with Kami" in ChromeOS' file browser then it passes a URL
// prefixed with drive: as the URL scheme
// This drive URL does not work if you try to load it directly, it must be resolved
// See #resolveFileSystemUrl
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (typeof request !== 'object') {
    return;
  }

  if ('resolve-url' in request) {
    resolveFileSystemUrl(request['resolve-url'], function(url) {
      sendResponse({'url': url});
    });
    // Return true to to send response async
    return true;
  }
});
