function inject(html) {
  // Inject the loaded HTML in to the document
  var parser = document.createElement('div');
  parser.innerHTML = html;
  var child = parser.children[0];
  parser.removeChild(child);
  document.body.appendChild(child);

  // Setup button onclick
  child.addEventListener('click', function() {
    document.body.removeChild(child);
    var kamiUrl = 'https://web.kamihq.com/web/viewer.html';
    window.location = kamiUrl + '?file=' + url + '&source=extension_open_button';
  });
}

var embed = document.getElementsByTagName('embed');

// Detect the default PDF viewer
if (embed.length && embed[0].id === 'plugin' && embed[0].type === 'application/pdf') {
  var src = embed[0].attributes['src'];
  var url = document.location.toString();

  if (src != null && src.value === url) {
    chrome.runtime.sendMessage('inject-open-with-kami-button', function(buttonHtml) {
      inject(buttonHtml);
    });
  }
}
