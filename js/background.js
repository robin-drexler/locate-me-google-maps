(function() {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            window.navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
                sendResponse({lat: position.coords.latitude, lng: position.coords.longitude});
            });

            return true;
        });
})()