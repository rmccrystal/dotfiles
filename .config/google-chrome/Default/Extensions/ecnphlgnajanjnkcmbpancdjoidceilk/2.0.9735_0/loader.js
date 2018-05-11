function load(url, port) {
  var xhr = new XMLHttpRequest();

  xhr.onprogress = function(event) {
    var progress = {'loaded': event.loaded, 'total': event.total};
    port.postMessage({'progress': progress});
  };
  xhr.onload = function() {
    if (xhr.status >= 400) {
      port.postMessage({'error': 'Received ' + xhr.status + ' response while loading file.'});
    } else {
      var response = xhr.response;
      port.postMessage(response, [response]);
    }
  };

  xhr.onerror = function() {
    port.postMessage({'error': 'Network Error'});
  }

  try {
    xhr.open('GET', url);
    xhr.responseType = 'arraybuffer';

    //Add auth headers for GDrive files.
    var index = url.indexOf("&kami_gdrive_auth")
    if (index != -1) {
      var auth_token = url.slice(index + 18)
      xhr.setRequestHeader("Authorization", "Bearer " + auth_token);
    }

    xhr.send();
  } catch (e) {
    port.postMessage({'error': e});
  }
}

onmessage = function(event) {
  var port = event.ports[0];
  port.onmessage = function(event) {
    var url = event.data;

    if (url != null && url.length) {
      load(url, port);
    }
  };

  port.postMessage('ready');
};
