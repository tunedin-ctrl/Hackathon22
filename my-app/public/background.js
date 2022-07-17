/**
 * Background scripts for chrome extension
 */

/* global chrome */

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.sendMessage(tab.id, { message: 'load' });
//   });

/**
 * Assumes command is do-search
 */
chrome.commands.onCommand.addListener((command) => {
    import App;
    console.log(`Command: ${command}`);
  });