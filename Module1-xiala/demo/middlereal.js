(function (win) {
    win.middle = function (options) {
        var baseUrl = '//static.adbaitai.com/game/Theme/outLayer/Real/popup',
            finallUlr = '';
        finallUlr = baseUrl + '_' + options.id + '.js';
        var scriptObj = document.createElement('script');
        scriptObj.src = finallUlr;
        document.getElementsByTagName("body")[0].appendChild(scriptObj);
        scriptObj.onload = function () {
            var prop = new Baitai.Popup({
                body: ".Popup-box",
                closeCallback: function (type) {
                    options.closeCallback && options.closeCallback(type);
                }
            });
            options.ready && options.ready(prop);
        };

    };
})(window);