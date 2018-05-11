// Inject the extension delegate into the viewer window
// The delegate has full access to the chrome.* APIs
var delegate = document.createElement('iframe');
delegate.setAttribute('src', chrome.runtime.getURL('delegate.html'));
delegate.style.display = 'none';
document.body.appendChild(delegate);
