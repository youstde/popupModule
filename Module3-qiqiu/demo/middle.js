(function (win) {
    win.middle = function (options) {
        var baseUrl = '//static.adbaitai.com/game/Theme/outLayer/Pre/indexpre',
            finallUlr = '';
        finallUlr = baseUrl + '_' + options.id + '.js';
        var scriptObj = document.createElement('script');
        scriptObj.src = finallUlr;
        document.getElementsByTagName("body")[0].appendChild(scriptObj);
        scriptObj.onload = function () {
            var prop = new Baitai.Popup({
                body: ".popupBody",
                closeCallback: function (type) {
                    options.closeCallback && options.closeCallback(type);
                }
            });
            options.ready && options.ready(prop);
        };

    };
})(window);