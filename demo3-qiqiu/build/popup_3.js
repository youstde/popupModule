!function(o){var e=this,t=e.Baitai=e.Baitai?e.Baitai:{};t.Popup=o(e),"undefined"!=typeof module&&module.exports&&(module.exports=t.Popup)}(function(o){function e(o){this.data="",this.el="",this.options=o,this._createDom(),this._bindEvent()}var t='<div class="J_modalShowPrize coupon-modal-showPrize"><style type="text/css">.coupon-modal-showPrize {  display: none;  position: fixed;  z-index: 10000;  top: 0;  right: 0;  bottom: 0;  left: 0;  width: 100%;  height: 100%;  background-color: rgba(0, 0, 0, 0.85);  overflow-x: hidden;  overflow-y: auto;}.coupon-modal-showPrize .close {  position: absolute;  opacity: 0;  right: .45rem;  top: .7rem;  width: 0.5rem;  height: .5rem;  background-image: url(//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/close.png);  background-size: 100% 100%;  z-index: 101;  -webkit-animation: close .4s forwards;  animation: close .4s forwards;  -webkit-animation-delay: .6s;  animation-delay: 0.6s;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog {  -webkit-animation: showCoupon 0.5s ease-in;  animation: showCoupon 0.5s ease-in;  -webkit-animation-fill-mode: both;  animation-fill-mode: both;  max-width: 640px;  margin: 0 auto;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .modal-header {  width: 3.38rem;  height: 1.35rem;  background: url(//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/modal-head.png) no-repeat;  background-size: 100%;  opacity: 0;  margin: 2.56rem auto 0;  position: relative;  z-index: 100;  -webkit-animation: showHeader .3s forwards alternate;  animation: showHeader .3s forwards alternate;  -webkit-animation-delay: .3s;  animation-delay: 0.3s;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .modal-body {  width: 6.37rem;  height: 7.66rem;  background-image: url(//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/body1.png);  background-repeat: no-repeat;  background-size: cover;  background-position: center;  margin: 0 auto;  position: relative;  text-align: center;  z-index: 90;  top: -2.4rem;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .modal-body.withoutCode .coupon-image {  margin-bottom: 0.42rem;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .modal-title {  font-size: .32rem;  color: #fff;  font-weight: 300;  letter-spacing: .1rem;  padding: 2.1rem 0.5rem 0;  margin-bottom: .35rem;  margin-top: .32rem;  overflow: hidden;  white-space: nowrap;  text-overflow: ellipsis;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .coupon-image {  position: relative;  width: 5.039rem;  height: 2.36rem;  overflow: hidden;  margin: 0 auto .22rem;  border-radius: 0.2rem;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .coupon-image img {  width: 100%;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .coupon-code {  margin: 0 auto;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .coupon-code .code {  display: inline-block;  color: #fff;  text-align: left;  margin: 0 0.08rem;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .coupon-code span {  margin-right: 0.01rem;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .coupon-use {  width: 5.4rem;  height: 1.15rem;  line-height: .3rem;  display: block;  margin: .95rem auto 0;  opacity: 1;  background: url(//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/btn.png) no-repeat;  background-size: contain;  color: #f62934;  font-size: .38rem;  font-weight: 700;  border: 0 none;  letter-spacing: .07rem;  -webkit-animation: showBtn 1.2s forwards alternate;  animation: showBtn 1.2s forwards alternate;  -webkit-animation-delay: .3s;  animation-delay: 0.3s;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .modify {  width: 6.69rem;  height: 2.19rem;  display: block;  background-image: url(//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/modify.png);  background-size: cover;  background-repeat: no-repeat;  position: absolute;  top: -0.9rem;  left: .43rem;  z-index: 100;  -webkit-animation: modify .5s .5s;  animation: modify .5s .5s;  -webkit-animation-fill-mode: both;  animation-fill-mode: both;  pointer-events: none;}.coupon-modal-showPrize .coupon-modal-showPrize-dialog .light {  width: 6.93rem;  height: 3.82rem;  background: url(//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/light.png) no-repeat;  background-size: 100%;  position: absolute;  top: -1.9rem;  left: .3rem;  -webkit-transform-origin: bottom center;  transform-origin: bottom center;  -webkit-animation: wobbleLight .4s linear infinite;  animation: wobbleLight 0.4s linear infinite;}@-webkit-keyframes showCoupon {  from {    -webkit-transform: translateY(3rem);    transform: translateY(3rem);  }  to {    -webkit-transform: translateY(0);    transform: translateY(0);  }}@keyframes showCoupon {  from {    -webkit-transform: translateY(3rem);    transform: translateY(3rem);  }  to {    -webkit-transform: translateY(0);    transform: translateY(0);  }}@-webkit-keyframes showHeader {  from {    opacity: 0;    -webkit-transform: scale(0.3);    transform: scale(0.3);  }  to {    opacity: 1;    -webkit-transform: scale(1);    transform: scale(1);  }}@keyframes showHeader {  from {    opacity: 0;    -webkit-transform: scale(0.3);    transform: scale(0.3);  }  to {    opacity: 1;    -webkit-transform: scale(1);    transform: scale(1);  }}@-webkit-keyframes close {  from {    opacity: 0;  }  to {    opacity: 0.9;  }}@keyframes close {  from {    opacity: 0;  }  to {    opacity: 0.9;  }}@-webkit-keyframes showBtn {  from,  to {    opacity: 1;    -webkit-transform: scale(1);    transform: scale(1);  }  20% {    opacity: 1;    -webkit-transform: scale(0.95);    transform: scale(0.95);  }  40% {    opacity: 1;    -webkit-transform: scale(1.15);    transform: scale(1.15);  }  60% {    opacity: 1;    -webkit-transform: scale(0.9);    transform: scale(0.9);  }  80% {    opacity: 1;    -webkit-transform: scale(1.1);    transform: scale(1.1);  }}@keyframes showBtn {  from,  to {    opacity: 1;    -webkit-transform: scale(1);    transform: scale(1);  }  20% {    opacity: 1;    -webkit-transform: scale(0.95);    transform: scale(0.95);  }  40% {    opacity: 1;    -webkit-transform: scale(1.15);    transform: scale(1.15);  }  60% {    opacity: 1;    -webkit-transform: scale(0.9);    transform: scale(0.9);  }  80% {    opacity: 1;    -webkit-transform: scale(1.1);    transform: scale(1.1);  }}@-webkit-keyframes modify {  from {    -webkit-transform: scale(0);    transform: scale(0);  }  to {    -webkit-transform: scale(1);    transform: scale(1);  }}@keyframes modify {  from {    -webkit-transform: scale(0);    transform: scale(0);  }  to {    -webkit-transform: scale(1);    transform: scale(1);  }}@-webkit-keyframes wobbleLight {  from {    -webkit-transform: none;    transform: none;  }  to {    -webkit-transform: rotate(18deg);    transform: rotate(18deg);  }}@keyframes wobbleLight {  from {    -webkit-transform: none;    transform: none;  }  to {    -webkit-transform: rotate(18deg);    transform: rotate(18deg);  }}</style><span class="close coupon-modal-close"></span>        <div class="coupon-modal-showPrize-dialog" data-id="ad_content">            <div class="modal-header"></div>            <div class="modal-body withoutCode">                <p class="modal-title" data-id="ad_title"></p>                <div class="coupon-image">                    <img class="J_gotoDetail logandgo" data-pic="true"  db-exposure-get="true">                </div>                <button type="button" class="J_btnCoupon coupon-use" data-id="ad_skip"><i class="cover"></i></button>            </div>            <i class="modify"></i><i class="light"></i>        </div>    </div>';return e.prototype._createDom=function(){var o=document.createElement("div");o.innerHTML=t,this.el=o.querySelector("div"),document.querySelector(this.options.body).appendChild(this.el)},e.prototype._bindEvent=function(){this.el.querySelector("button").addEventListener("click",function(){this.toggleState("hidden"),this.options.closeCallback&&this.options.closeCallback("jump"),window.location.href=this.data.skipUrl}.bind(this)),this.el.querySelector(".coupon-image").addEventListener("click",function(){this.toggleState("hidden"),this.options.closeCallback&&this.options.closeCallback("jump"),window.location.href=this.data.skipUrl}.bind(this)),this.el.querySelector(".coupon-modal-close").addEventListener("click",function(){this.toggleState("hidden"),this.options.closeCallback&&this.options.closeCallback("close")}.bind(this))},e.prototype.toggleState=function(o){this.el.style.display="show"===o?"block":"none"},e.prototype.setMessage=function(o){this.data=o,this.el.querySelector(".modal-title").innerText=o.rewardPicDescription,this.el.querySelector(".J_btnCoupon").innerText=o.buttonText,this.el.querySelector(".J_gotoDetail").src=o.rewardPicUrl,this.el.querySelector(".coupon-modal-showPrize-dialog").setAttribute("skipurl",o.skipUrl)},e.prototype.sendMessage=function(o){this.setMessage(o.data.lottery)},e.prototype.preImgLoad=function(){var o=["//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/modal-head.png","//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/body1.png","//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/btn.png","//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/modify.png","//static.adbaitai.com/game/Theme/outLayer/Pre/Img/Qiqiu/light.png"],e=[];o.forEach(function(o,t){console.log(o),e[t]=new Image,e[t].src=o})},e});