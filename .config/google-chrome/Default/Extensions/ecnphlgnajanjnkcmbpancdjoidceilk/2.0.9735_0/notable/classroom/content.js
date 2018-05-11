var injectButton = function() {
  var toolbar = document.querySelector('[role="toolbar"]');

  var buttonContainer = document.createElement('div');
  buttonContainer.classList.add('kami-drive-viewer-toolstrip-mid-panel');
  buttonContainer.innerHTML = '<div class="kami-drive-viewer-toolstrip-open-and-openwith"><a class="kami-drive-viewer-toolstrip-open" role="button" data-tooltip-unhoverable="true" data-tooltip-delay="500" data-tooltip-class="drive-viewer-jfk-tooltip" data-tooltip-align="b,c" data-tooltip-offset="-6" aria-hidden="false" aria-label="Open with Kami" style="user-select: none;" tabindex="0" data-tooltip="Open with Kami"><div class="kami-drive-viewer-open-app-icon"></div><div class="kami-drive-viewer-open-label">Open with Kami</div></a></div>';
  toolbar.children[0].appendChild(buttonContainer);

  document.querySelector('.kami-drive-viewer-toolstrip-open').addEventListener('click', function(e) {

    wrapWindowOpen(); // Inject script to wrap window.open

    // Click the More actions button
    var moreActions = document.querySelector('[aria-label="More actions"]');
    var mouseDownEvent = document.createEvent('MouseEvents');
    mouseDownEvent.initEvent('mousedown', true, true);
    moreActions.dispatchEvent(mouseDownEvent)

    // Wait for the menu to appear and click the 'Open in new window' button
    setTimeout(function() {
      var xpath = "//div[.='Open in new window']";
      var iteratorList = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
      var openInNewWindowButton = iteratorList.iterateNext();
      var buttonPosition = openInNewWindowButton.getBoundingClientRect();

      var e = new MouseEvent('mouseup', {
          'view': window,
          'bubbles': true,
          'cancelable': true,
          'clientX': buttonPosition.left + 5,
          'clientY': buttonPosition.top + 5,
          'x': buttonPosition.left+5,
          'y': buttonPosition.top + 5
        });

      openInNewWindowButton.dispatchEvent(e)

    }, 10)

  })
}


var wrapWindowOpenScript = function() {
  // Wrap the window.open() method - this gets injected into the page.
  if((/\{\s*\[native code\]\s*\}/).test('' + window.open)) { // Test if we have the unwrapped original window.open function
    window.originalOpen = window.open;
  }

  window.open = function() {
    window.open = window.originalOpen; // Restore the original function
    if (arguments[0].indexOf('https://drive.google.com/open') == 0) {
      var parseParams = function(url) {
        var search_str = url.slice(url.indexOf('?'));
        match = undefined;
        search = /([^&=]+)=?([^&]*)/g;
        query = search_str.substring(1);
        urlParams = {};
        while(match = search.exec(query)) {
          key = decodeURIComponent(match[1]);
          value = decodeURIComponent(match[2]);
          urlParams[key] = value;
        }
        return urlParams;
      }

      // Open with Kami
      var params = parseParams(arguments[0]);
      jsonData = {
        'ids': [params['id']],
        'authuser': params['authuser'],
        'from': 'classroomopenext'
      }
      kamiURL = "https://web.kamihq.com/web/viewer.html?state=" + encodeURIComponent(JSON.stringify(jsonData));
      window.open(kamiURL, '_blank');

    } else {
      window.open.apply(this, arguments);
    }
  }

  var me = document.currentScript;
  if ( me && me.parentNode !== null ) {
      me.parentNode.removeChild(me);
  }
}

var wrapWindowOpen = function() {
  var parent = document.head || document.documentElement;
  if ( parent === null ) {
      return false;
  }

  var script = document.createElement('script');
  script.textContent = "(" + wrapWindowOpenScript.toString() + ")();";
  try {
      parent.appendChild(script);
  } catch (ex) {
  }
}


var previewOpenObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) {
      return;
    }
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      var node = mutation.addedNodes[i];
      if (node.attributes && node.attributes['aria-label'] && node.attributes['role'] && node.attributes['role'].value === 'dialog') {
        injectButton();
        previewOpenObserver.disconnect();
      }
    }
  });
});

var fetchClassroomAlternateId = function() {
  var url = window.location.href;
  var match = url.match(/https?:\/\/classroom\.google\.com.*\/c\/([A-z0-9]+)/)
  if(match && match.length > 1) {
    return match[1];
  } else {
    return null;
  }
}

var kamiCreateAssignmentButtonListener = function(event) {
  console.log(event);

  kamiURL = "https://web.kamihq.com/web/viewer.html?open_dialog=create_assignment";

  var classID = fetchClassroomAlternateId();

  if(classID) {
    kamiURL += "&class_alternate_id=" + classID;
  }

  window.open(kamiURL, '_blank');
}

var fabMenuObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) {
      return;
    }
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      var node = mutation.addedNodes[i];

      if ((node.attributes && node.attributes['data-item-type'] && node.attributes['data-item-type'] == 'assignment') ||  (typeof node.querySelectorAll === "function" && node.querySelectorAll("[data-item-type='assignment'").length > 0))  {
        injectClassroomKamiAssignmentButton();
      }
    }
  });
});

var injectClassroomKamiAssignmentButton = function() {
  create_announcement_divs = document.querySelectorAll('div[data-item-type="post"]')
  if (create_announcement_divs.length > 0) {
    create_announcement_divs.forEach(function(create_announcement_div) {
      if (! create_announcement_div.parentElement.querySelector('div.kami-create-assignment-button')) {
        // <div role="menuitem" class="XHsn7e hCfBIe UISY8d-Tvm9db bFjUmb-Wvd9Cc kami-create-assignment-button" aria-label="Create announcement" aria-disabled="false" tabindex="-1" data-tooltip="Create Kami Assignment" data-item-type="post" data-tooltip-position="left">

        var kamiCreateAssignmentButtonContainer = document.createElement('div');
        kamiCreateAssignmentButtonContainer.setAttribute("role", "menuitem");
        kamiCreateAssignmentButtonContainer.setAttribute("aria-label", "Create Kami Assignment");
        kamiCreateAssignmentButtonContainer.setAttribute("aria-disabled", "false");
        kamiCreateAssignmentButtonContainer.setAttribute("data-tooltip", "Create Kami Assignment");
        kamiCreateAssignmentButtonContainer.setAttribute("data-item-type", "assignment");
        kamiCreateAssignmentButtonContainer.setAttribute("data-tooltip-position", "left");
        kamiCreateAssignmentButtonContainer.className = "XHsn7e hCfBIe UISY8d-Tvm9db bFjUmb-Wvd9Cc kami-create-assignment-button"
        kamiCreateAssignmentButtonContainer.innerHTML = ' <div class="HaXdpb"></div><div class="HRp7vf MbhUzd" jsname="ksKsZd"></div><content><content><div class="Ip8zfc" jsaction="JIbuQc:ObNs8b"><div class="kami-create-assignment-icon"></div></div></content></content>';
        create_announcement_div.parentElement.insertBefore(kamiCreateAssignmentButtonContainer, create_announcement_div.nextSibling);


        var kamiCreateAssignmentTooltip = document.createElement('span');

        create_announcement_div.parentElement.insertBefore(kamiCreateAssignmentTooltip, create_announcement_div.nextSibling);
        kamiCreateAssignmentTooltip.outerHTML = '<span class="RM9ulf PgfOZ qs41qe" style="bottom: 181.5px;right: 94px;visibility: visible;transform-origin: 100% 50% 0px;transform: translate(0px, 0px);"><span class="R8qYlc"></span><span class="AZnilc">Create Kami assignment</span></span>';
        kamiCreateAssignmentButtonContainer.addEventListener('click', kamiCreateAssignmentButtonListener);
      }
    });
  } else {
    fabMenuObserver.observe(document.body, {
        childList: true
      , subtree: true
      , attributes: false
      , characterData: false
    });
  }
}
injectClassroomKamiAssignmentButton();

document.body.addEventListener('click', function(event) {
  var parentElement = event.target.closest('a');
  if(parentElement) {
    var url = parentElement.href;
    if (url && url.includes('https://drive.google.com/open')) {
      if (! document.querySelector('.kami-drive-viewer-toolstrip-mid-panel')) {
        // Wait for the preview to popup and then add the button
        previewOpenObserver.observe(document.body, {
            childList: true
          , subtree: true
          , attributes: false
          , characterData: false
        });
      }
    }

    if (url && url.match(/https?:\/\/classroom\.google\.com.*\/c\/[A-z0-9]+/)) {
      setTimeout(function() {
        injectClassroomKamiAssignmentButton();
      }, 150);
    }
  }
});
