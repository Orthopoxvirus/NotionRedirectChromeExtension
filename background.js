chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
			let url = tabs[0].url;
			console.log(url);
			if (url.startsWith('https') && url.includes('notion.so')) {
				console.log("action");
				var newURL = "notion" + url.substring(5);
				chrome.tabs.create({ url: newURL });
				chrome.tabs.remove(tabs[0].id);
			} else {
				console.log('ignore');
			}
		});
	}
})
