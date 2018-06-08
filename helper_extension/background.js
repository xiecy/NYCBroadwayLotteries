// Listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// For the current tab, inject the "inject.js" file and execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
