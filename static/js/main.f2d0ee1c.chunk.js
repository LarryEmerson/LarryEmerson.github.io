(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return h});var i=n(17),o=n(18),a=n(315),c=(n(501),n(213)),r=n(515),l=1,s=[],h=function(){function t(){Object(i.a)(this,t),this.getTitle(l)}return Object(o.a)(t,[{key:"getTitle",value:function(t){console.log("\u6b63\u5728\u83b7\u53d6\u7b2c"+t+"\u9875\u7684\u5185\u5bb9"),c.get("http://www.ygdy8.net/html/gndy/dyzz/list_23_"+t+".html",function(n){var i=[];n.on("data",function(e){i.push(e)}),n.on("end",function(){var n=r.decode(e.concat(i),"gb2312"),o=a.load(n,{decodeEntities:!1});o(".co_content8 .ulink").each(function(e,t){var n=o(t);s.push({title:n.text()})}),t<2?this.getTitle(++l):(console.log(s),console.log("Title\u83b7\u53d6\u5b8c\u6bd5\uff01"))})})}}]),t}()}).call(this,n(10).Buffer)},232:function(e,t,n){e.exports=n(533)},237:function(e,t,n){},238:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},311:function(e,t,n){e.exports=n.p+"static/media/global.293907fa.less"},329:function(e,t){},341:function(e,t){},343:function(e,t){},503:function(e,t){},505:function(e,t){},531:function(e,t){},532:function(e,t){},533:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(132),c=n.n(a),r=(n(237),n(17)),l=n(18),s=n(40),h=n(39),d=n(41),f=(n(238),n(239),n(240),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mainRoot"})}}]),t}(i.Component)),u=(n(241),n(226)),v=n.n(u),g=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={visible:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"root",style:{height:e.state.visible?"80%":void 0}},e.state.visible?o.a.createElement("div",{className:"panel"},o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492"),o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492"),o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")," ",o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492"),o.a.createElement("div",{style:{height:"60px",color:"#0da7ff"}},"\u963f\u65af\u987f\u6492")):null,o.a.createElement(v.a,{style:{marginRight:"10px"},type:"primary",shape:"circle",icon:"setting",size:"large",onClick:function(){e.setState({visible:!e.state.visible})}}))}}]),t}(i.Component),m=(n(311),n(312),n(231)),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this))).state={screenWidth:window.innerWidth,screenHeight:window.innerHeight,screenBackgroundColor:"#444",visible:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){new m.a}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.resize.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"resize",value:function(){this.setState({screenWidth:window.innerWidth,screenHeight:window.innerHeight})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{position:"relative",width:e.state.screenWidth,height:e.state.screenHeight,backgroundColor:e.state.screenBackgroundColor}},o.a.createElement(f,null),o.a.createElement(g,{visible:e.state.visible,optionsHandler:function(t){var n=t.screen;n&&e.setState({screenWidth:n.width,screenHeight:n.height,screenBackgroundColor:n.backgroundColor})}}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[232,1,2]]]);
//# sourceMappingURL=main.f2d0ee1c.chunk.js.map