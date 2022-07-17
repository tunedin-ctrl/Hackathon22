/**
 * Content scripts which are executed on pages the user browses to
 */


 chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    main();
  });
  
  /**
   * Inject static build files to body of html using jquery
   */
  function main() {
    // eslint-disable-next-line no-undef
    const extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
    // eslint-disable-next-line no-restricted-globals
    if (!location.ancestorOrigins.contains(extensionOrigin)) {
      // Fetch the local React index.html page
      // eslint-disable-next-line no-undef
      fetch(chrome.runtime.getURL('index.html') /*, options */)
        .then((response) => response.text())
        .then((html) => {
          const styleStashHTML = html.replace(/\/static\//g, `${extensionOrigin}/static/`);
          // eslint-disable-next-line no-undef
          $(styleStashHTML).appendTo('body');
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }
  
  window.addEventListener("click", function(event) {
    if (event.source !== window) return;
    onDidReceiveMessage(event);
  });
  
  async function onDidReceiveClick(event) {
    if (event.data.type && (event.data.type === "GET_EXTENSION_ID")) {
      window.postMessage({ type: "EXTENSION_ID_RESULT", extensionId: chrome.runtime.id }, "*");
    }
  }
  