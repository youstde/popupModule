(function(factory){
    var root =this,Baitai = root.Baitai = root.Baitai ? root.Baitai : {};
    Baitai.Dialog = factory(root);
    if (typeof module !== "undefined" && module.exports) {
        module.exports = Baitai.Dialog;
    }
}(function(root){
    var tpl ='<div class="m-dialog"><style type="text\/css">.m-dialog-cover {  position: absolute;  left: 0;  top: 0;  bottom: 0;  right: 0;  background-color: rbga(0, 0, 0, 0.5);}.m-dialog {  position: absolute;  left: 50%;  top: 50%;  min-width: 4rem;  min-height: 2.66666667rem;  padding: 0.26666667rem;  transform: translate(-50%, -50%);  border-radius: 0.13333333rem;  background-color: #fff;}.m-dialog button {  font-size: 0.4rem;}<\/style><div class="body"><\/div>    <div>        <button>确定<\/button>    <\/div><\/div>';
    function Dialog(options){
        this.options = options;
        this._showCover();
        this._show();
        this._bindEvent();
    }

    Dialog.prototype._bindEvent=function(){
        this._el.querySelector('button').addEventListener('click',function(){
            this._toggleLayer('hidden');
        }.bind(this))
    },

    Dialog.prototype._showCover=function(){
        if(this.options.cover){
            tpl = '<div class="m-dialog-cover" style="display:none;">'+tpl+'</div>';
        }
    };
    Dialog.prototype._toggleLayer=function(action){
        var coverObj = document.querySelector('.m-dialog-cover');
        coverObj.style.display = (action === 'show')? 'block': 'none';
    };
    Dialog.prototype._show = function(){
        var el = document.createElement('div');
        el.innerHTML = tpl;
        el.querySelector('.body').innerHTML = this.options.body;
        el = el.querySelector('div');
        document.body.appendChild(el);
        this._el = el;
    };


    return Dialog;
}));