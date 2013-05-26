(function () {
    function isMaps() {
        var regEx = /:\/\/(.*)google(.+)\/maps(.*)/;
        return regEx.test(window.location.href);
    }

    if (!isMaps()) {
        return;
    }

    $(function () {
        var $button = $('<button class="locatemebutton searchbutton"></button>'),
            $form = $('#searchbox_form'),
            $input = $('#searchboxinput');

        $button.on('click', function () {
            chrome.runtime.sendMessage({}, function (response) {
                console.log(response);
                $input.val(response.lat + ',' + response.lng);
                $form.submit();
            });
        });


        $button.insertAfter($('.searchbutton'));
    });
})();