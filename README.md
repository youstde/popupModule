#### 弹窗模板

添加了关闭弹窗时的回调
####8.23
添加了图片预加载的方法,向外暴露

1.向外暴露一个js文件,会暴露出一个构造函数

```javascript
var prop = new Baitai.Popup({
            body:".test"  //弹窗模板需要放置的地方
        });
//弹窗图片预加载(可以选择性的调用)
prop.preImgLoad();
```

2.向外暴露的方法：

```javascript
sendMessage(DATA) //传入弹窗的展示数据
toggleState(ACTION) //弹窗的展示和隐藏，显示：‘show’,隐藏：‘hidden’
```

3.模板的具体使用流程（具体可以参考各个模板中的demo）：

* 1.该弹窗模板不会直接被引入到游戏中，而是通过`middle.js`去引入，直接引入到页面的是`middle.js`
* 2.通过middle.js引入成功后，其中new实例对象middle.js会直接做了