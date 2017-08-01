chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(
        {code: "document.body.innerHTML"},
        function(html) {
            var data = {
                "url": tab.url,
                "content": html[0]
            };
            console.log(data);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:4243', true);
            xhr.setRequestHeader('Content-type', 'text/json');
            xhr.send(JSON.stringify(data));
            // for some weird reason request above will stuck
            window.setTimeout(function() {window.location.reload();}, 500);
        });
});
