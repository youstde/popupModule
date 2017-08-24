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
        this.el = document.querySelector('.coupon-modal');
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
        this.el.querySelector('.closeBtn').addEventListener('click', function(){
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
        this.el.querySelector('.coupon-modal-body-title').innerText = data.rewardPicDescription;
        this.el.querySelector('.J_btnCoupon').innerText = data.buttonText;
        this.el.querySelector('.good-img').src = data.rewardPicUrl;
        this.el.querySelector('.coupon-modal-box').setAttribute('skipurl', data.skipUrl);
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
        var imgLists = ['//static.adbaitai.com/game/Theme/outLayer/Pre/Img/header.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/imageBg.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/copunDot.png','//static.adbaitai.com/game/Theme/outLayer/Pre/Img/ribbon.png'];
        var newimages=[];
        imgLists.forEach(function(item, index){
            console.log(item);
            newimages[index]=new Image();
            newimages[index].src = item;
        });
    };
    return Popup;
}));