(function(factory){
    var root =this,Baitai = root.Baitai = root.Baitai ? root.Baitai : {};
    Baitai.Popup = factory(root);
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Baitai.Popup;
    }
}(function(root){
    var tpl = _include('./index.html');
    function Popup(options){
        this.data = '';
        this.el = '';
        this.options = options;
        this._createDom();
        this._bindEvent();
    }
    Popup.prototype._createDom=function(){
        document.querySelector(this.options.body).innerHTML = tpl;
        this.el = document.querySelector('.J_modalShowPrize');
    };
    Popup.prototype._bindEvent=function(){
        this.el.querySelector('button').addEventListener('click',function(){
            this.toggleState('hidden');
            this.options.closeCallback && this.options.closeCallback('jump');
            window.location.href = this.data.skipUrl;
        }.bind(this));
        this.el.querySelector('.coupon-image').addEventListener('click',function(){
            this.toggleState('hidden');
            this.options.closeCallback && this.options.closeCallback('jump');
            window.location.href = this.data.skipUrl;
        }.bind(this));
        this.el.querySelector('.coupon-modal-close').addEventListener('click', function(){
            this.toggleState('hidden');
            this.options.closeCallback && this.options.closeCallback('close');
        }.bind(this));
    };
    /**
     * 弹窗的显示和隐藏
     * @param action
     */
    Popup.prototype.toggleState = function(action) {
        this.el.style.display = (action === 'show')? 'block': 'none';
    };
    Popup.prototype.setMessage = function(data) {
        this.data = data;
        this.el.querySelector('.modal-title').innerText = data.rewardPicDescription;
        this.el.querySelector('.J_btnCoupon').innerText = data.buttonText;
        this.el.querySelector('.J_gotoDetail').src = data.rewardPicUrl;
        this.el.querySelector('.coupon-modal-showPrize-dialog').setAttribute('skipurl', data.skipUrl);
    };
    /**
     * 传入数据进行填充
     * 向外
     * @param data
     */
    Popup.prototype.sendMessage = function(data){
        this.setMessage(data.data.lottery);
    };
    /**
     * 图片预加载
     */
    Popup.prototype.preImgLoad = function(){
        var imgLists = ['//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Yuanbao/header.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Yuanbao/yuanbao.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Yuanbao/body.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Yuanbao/tip.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Yuanbao/goodborder.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Yuanbao/btn.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Yuanbao/light.png'];
        var newimages=[];
        imgLists.forEach(function(item, index){
            console.log(item);
            newimages[index]=new Image();
            newimages[index].src = item;
        });
    };
    return Popup;
}));