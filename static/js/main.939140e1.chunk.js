(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(18),c=n.n(r),i=(n(67),n(52)),u=n(53),l=n(60),s=n(54),h=n(61),m=n(19),d=(n(69),n(25)),p=n.n(d),f=n(55),w=n.n(f),k=n(57),v=n.n(k),b=n(59),q=n.n(b),g=n(58),E=n.n(g),j=n(31),Q=n.n(j),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={quotes:[],currentQuote:{quote:"something",author:"homer j"}},e.handleClick=e.handleClick.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://aitorp6.herokuapp.com/quotes/api/quote/Homer%20J.%20Simpson").then(function(e){return e.json()}).then(function(t){return e.setState({quotes:t.quotes})}).then(function(){var t=Math.floor(211*Math.random()),n=e.state.quotes[t];return console.log("something to test"),e.setState({currentQuote:n})})}},{key:"handleClick",value:function(){var e=Math.floor(211*Math.random());this.setState(function(t){return{currentQuote:t.quotes[e]}})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("img",{src:"https://s-media-cache-ak0.pinimg.com/236x/33/58/18/335818b563208954ab8fc8896d2d3a18.jpg",className:"App-logo",alt:"logo"}),a.a.createElement(w.a,{id:"quote-box"},a.a.createElement(v.a,null,a.a.createElement(E.a,null,a.a.createElement(Q.a,{component:"h1",id:"text"},'"',this.state.currentQuote.quote?this.state.currentQuote.quote:"placeholder",'"'),a.a.createElement(Q.a,{variant:"h5",component:"h2",id:"author"},"- ",this.state.currentQuote.author?this.state.currentQuote.author:"some author"))),a.a.createElement(q.a,null,a.a.createElement(p.a,{size:"small",color:"primary",id:"new-quote",onClick:this.handleClick},"New Quote"),a.a.createElement(p.a,{size:"small",color:"primary",href:"twitter.com/intent/tweet",id:"tweet-quote"},"Tweet"))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,n){e.exports=n(162)},67:function(e,t,n){},69:function(e,t,n){}},[[62,2,1]]]);
//# sourceMappingURL=main.939140e1.chunk.js.map