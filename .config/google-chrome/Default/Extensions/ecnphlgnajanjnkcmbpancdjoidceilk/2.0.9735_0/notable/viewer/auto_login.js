var USER_KEY = 'notable.user';
var AUTO_LOGIN_KEY = 'notable.autologin';

var storage = chrome.storage;

if (storage != null) {
  var localUser = localStorage.getItem(USER_KEY);

  // Only login if we aren't logged in
  if (localUser == null) {
    // Don't auto login more than once
    if (localStorage.getItem(AUTO_LOGIN_KEY) !== 'true') {
      storage.sync.get(USER_KEY, function(items) {
        var syncUser = items[USER_KEY];
        if (syncUser != null) {
          var stringified = JSON.stringify(syncUser);
          localStorage.setItem(USER_KEY, stringified);
          localStorage.setItem(AUTO_LOGIN_KEY, 'true');
        }
      });
    }
  } else {
    // Disable auto login
    localStorage.setItem(AUTO_LOGIN_KEY, 'true');
  }
}
