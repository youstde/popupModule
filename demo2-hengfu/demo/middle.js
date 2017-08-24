(function(win){
    win.middle = function(id, data){

        var baseUrl = 'http://static.adbaitai.com/game/Theme/outLayer/Pre/indexpre',
            finallUlr = '';
        if(arguments.length === 1) {

        }else if(arguments.length === 2) {
            finallUlr = baseUrl + '_' + id + '.js';
            console.log(finallUlr);
            var scriptObj = document.createElement('script');
            scriptObj.src = finallUlr;
            setTimeout(function(){
                document.getElementsByTagName("body")[0].appendChild(scriptObj);
            },1000);
            scriptObj.onload = function() {
                win.prop = new Baitai.Popup({
                    body:".test",
                    closeCallback: function() {
                        console.log(111);
                    }
                });
            };
        }
    };
})(window);