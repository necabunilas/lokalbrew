(this["webpackJsonplokalbrew-pos"]=this["webpackJsonplokalbrew-pos"]||[]).push([[0],{556:function(e,a,t){e.exports=t(760)},561:function(e,a,t){},562:function(e,a,t){},737:function(e,a){},760:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(129),c=t.n(r),o=(t(561),t(9));t(562);function s(){return l.a.createElement("div",null,l.a.createElement("img",{className:"logo-cup",src:"/lokalbrew/lokalbrew.jpg",alt:"logo2_img"}),l.a.createElement("img",{className:"logo",src:"/lokalbrew/lokalbrew-logo.jpg",alt:"logo_img"}),l.a.createElement("h1",{className:"slogan"},"#DrinkLokalCoffee"))}function i(e){var a=Object(n.useState)({username:"",password:""}),t=Object(o.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),f=p[0],E=p[1];function b(e){var a=e.target,t=a.name,n=a.value;c((function(e){return"username"===t?{username:n,password:e.password}:{username:e.username,password:n}}))}function v(){return r.username.length<3||r.password.length<3}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("input",{className:"textbox",onChange:b,id:"outlined-multiline-static",variant:"outlined",name:"username",type:"text",value:r.username,placeholder:"Email"})),m,l.a.createElement("div",null,l.a.createElement("input",{className:"textbox",onChange:b,id:"outlined-multiline-static",variant:"outlined",name:"password",type:"password",value:r.password,placeholder:"Password"})),f,l.a.createElement("button",{className:v()?"button-disabled":"button-enabled",disabled:v(),onClick:function(a){a.preventDefault(),u(""),E(""),"admin@lokalbrew.ph"!==r.username?(console.log("error email"),u(l.a.createElement("p",{className:"error email-err"},"Invalid email address!"))):"admin"!==r.password?E(l.a.createElement("p",{className:"error pass-err"},"Password does not match!")):e.getState(!0)}},"Sign in")))}function m(){return l.a.createElement("div",null,l.a.createElement("p",{className:"footer"},"Brewing coffee since 2018"))}var u=t(316),d=t(317),p=t(555),f=t(554),E=t(44),b=t(11),v=t(130),g=t(210),h=t(33),N=t.n(h);function j(e){var a=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2)[1];return Object(n.useCallback)((function(){a((function(e){return e+1}))}),[])}();function t(t,n,l){N.a.connect("https://192.168.254.107:5000").emit("serve",{table:t,order:n,status:l});var r=e.orders.findIndex((function(e){return e.order===n})),c=e.orders;"Queue"===e.class?c.splice(r,1):"Table"===e.class&&function(){var a=!0;e.orders.forEach((function(e){"new"===e.status&&(a=!1)})),e.allServed(a)}(),a()}return l.a.createElement("div",null,l.a.createElement("div",{className:"Heading"},l.a.createElement("div",{className:"Cell1"},l.a.createElement("p",null,e.heading1)),l.a.createElement("div",{className:"Cell2"},l.a.createElement("p",null,e.heading2)),l.a.createElement("div",{className:"Cell3"},l.a.createElement("p",null,e.heading3))),l.a.createElement("div",{className:e.class},e.orders.map((function(a,n){return l.a.createElement("div",{onClick:"paid"!==a.status?function(){return t(a.table,a.order,a.status)}:null,style:"served"===a.status?{background:"rgba(151, 188, 150, 0.8)"}:null,key:n,className:"Row"},l.a.createElement("div",{className:"Cell1 cell"},l.a.createElement("p",null,a.order)),l.a.createElement("div",{className:"Cell2 cell"},l.a.createElement("p",null,a.qty)),l.a.createElement("div",{className:"Cell3 cell"},l.a.createElement("p",null,"Queue"===e.class?"table-1"===(r=a.table)?"Table 1":"table-2"===r?"Table 2":"table-3"===r?"Table 3":"table-4"===r?"Table 4":"table-5"===r?"Table 5":"table-6"===r?"Table 6":"table-7"===r?"Table 7":"takeout"===r?"Takeout":void 0:"Table"===e.class?a.price*a.qty:new Date(a.date).toLocaleDateString())));var r}))))}var w=[{name:"Chocolate hot/iced",url:"/coffee/chocolate.jpg",price:90},{name:"Acacia Spro iced",url:"/coffee/acaciaspro.png",price:115},{name:"Cookie Matcha",url:"/coffee/cookiematcha.jpg",price:115},{name:"Chocochip",url:"/coffee/chocochip.jpg",price:115},{name:"Kabkad Latte hot",url:"/coffee/kabkadlatte.jpg",price:95},{name:"Cappuccino hot/iced",url:"/coffee/cappuccino.jpg",price:90},{name:"Filter Coffee hot/iced",url:"/coffee/filter.jpeg",price:100},{name:"Latte hot/iced",url:"/coffee/latte.jpeg",price:90},{name:"Americano hot/iced",url:"/coffee/americano.jpg",price:85},{name:"Flat White",url:"/coffee/flatwhite.jpg",price:100},{name:"Coffee Drip Bag",url:"/coffee/coffeedrip.jpg",price:100},{name:"Kabkad White Brew",url:"/coffee/kabkadwb.jpg",price:115},{name:"Mocha",url:"/coffee/mocha.jpg",price:100},{name:"Matcha hot/iced",url:"/coffee/matcha.jpg",price:90},{name:"Honey Jelly White Brew",url:"/coffee/honeyjelly.jpg",price:115}];function k(e){var a=e.orders.findIndex((function(a){return a.order===e.item.name})),t=Object(n.useState)(-1!==a?e.orders[a].qty:0),r=Object(o.a)(t,2),c=r[0],s=r[1];function i(){return c<1}function m(a){var t=a.order,n=a.qty;!function(e,a){N.a.connect("https://192.168.254.107:5000").emit(e,a)}(e.orders.some((function(e){return e.order===t}))?n>0?"update":"delete":"new",a)}return l.a.createElement("div",{key:e.index,className:"product-cont"},l.a.createElement("img",{className:"product-photo",src:"/lokalbrew"+e.item.url,alt:"item"}),l.a.createElement("p",{className:"product-name"},e.item.name),l.a.createElement("p",{className:"product-price"},e.item.price),l.a.createElement("button",{onClick:function(a){var t=parseInt(c)-parseInt(1);a.preventDefault(),s(t),m({table:e.table+"",order:e.item.name,qty:t,price:e.item.price})},disabled:i(),className:i()?"deduct-disabled":"deduct"},"-"),l.a.createElement("span",{className:"units"},c),l.a.createElement("button",{onClick:function(a){var t=parseInt(c)+parseInt(1);a.preventDefault(),s(t),m({table:e.table+"",order:e.item.name,qty:t,price:e.item.price})},className:"add"},"+"))}function O(e){return w.map((function(a,t){return l.a.createElement(k,{orders:e.orders,item:a,index:t,table:e.table})}))}function C(e){return l.a.createElement("p",{style:{marginTop:"180px"}},"No Food yet!")}function y(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Products"),l.a.createElement("button",{className:"go-orders",onClick:function(a){a.preventDefault(),e.closeWindow()}},"Go to Orders")),l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(E.b,{className:"selection-coffee select",activeClassName:"active-selection",to:"/coffee"},l.a.createElement("p",null,"Coffee")),l.a.createElement(E.b,{className:"selection-food select",activeClassName:"active-selection",to:"/food"},l.a.createElement("p",null,"Food"))),l.a.createElement("div",{className:"top-border"}),l.a.createElement("div",{className:"products"},l.a.createElement(b.a,{path:"/coffee"},l.a.createElement(O,{orders:e.orders,table:e.table})),l.a.createElement(b.a,{path:"/food"},l.a.createElement(C,null))))))}function S(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){var a=N()("https://192.168.254.107:5000");a.emit("get Orders",e.name),a.on("get Orders",(function(e){u(e)}));var t=!0;return m.forEach((function(e){"new"===e.status&&(t=!1)})),E(t),function(){return a.disconnect()}}),[e.name,m]),l.a.createElement("div",null,l.a.createElement(g.Animated,{className:"order-page",animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!0},l.a.createElement("p",null,l.a.createElement(v.a,{string:e.name})),l.a.createElement("button",{className:"close-button",onClick:function(a){a.preventDefault(),e.exitPage()}},"x"),l.a.createElement(j,{class:"Table",heading1:"Orders",heading2:"Qty",heading3:"Price",orders:m,allServed:function(e){E(e)}}),l.a.createElement("button",{className:"add-button",onClick:function(e){e.preventDefault(),c(!0)}},"Edit Items"),l.a.createElement("p",{className:"wordTotal"},"Total:"),l.a.createElement("div",{className:"total"},l.a.createElement("p",null,function(){var e=0;return m.forEach((function(a){e+=a.qty*a.price})),e}())),l.a.createElement("button",{className:f&&m.length?"pay-button":"pay-button-disabled",disabled:!f||!m.length,onClick:function(a){a.preventDefault(),N.a.connect("https://192.168.254.107:5000").emit("pay",e.name)}},"Pay")),!1===r?null:l.a.createElement(g.Animated,{className:"order-page",animationIn:"fadeIn",animationOut:"fadeOut",isVisible:!0},l.a.createElement(y,{closeWindow:function(){c(!1)},orders:m,table:e.name})))}function D(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1];return r?l.a.createElement(S,{name:e.name,exitPage:function(){c(!1)}}):l.a.createElement("div",{className:e.name+" table",onClick:function(e){e.preventDefault(),c(!0)}},l.a.createElement("p",null,l.a.createElement(v.a,{string:e.name})))}function x(){return l.a.createElement("div",null,l.a.createElement("div",{className:"inner-page"},l.a.createElement("p",null,"Tables")),l.a.createElement("hr",null),l.a.createElement(D,{name:"table-1"}),l.a.createElement(D,{name:"table-2"}),l.a.createElement(D,{name:"table-3"}),l.a.createElement(D,{name:"table-4"}),l.a.createElement(D,{name:"table-5"}),l.a.createElement(D,{name:"table-6"}),l.a.createElement(D,{name:"table-7"}),l.a.createElement(D,{name:"takeout"}))}var T=t(213),I=t.n(T),q=t(553);function Q(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(new Date((new Date).setHours(0,0,0,0))),s=Object(o.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(new Date((new Date).setHours(23,59,59,0))),d=Object(o.a)(u,2),p=d[0],f=d[1];return Object(n.useEffect)((function(){var e=N()("https://192.168.254.107:5000");return e.emit("get Deals",{start:i,end:p}),e.on("get Deals",(function(e){r(e)})),function(){return e.disconnect()}}),[p,i]),l.a.createElement("div",{className:"inner-page"},l.a.createElement("p",null,"Transaction History"),l.a.createElement(j,{class:"Deals",heading1:"Orders",heading2:"Qty",heading3:"Date",orders:t}),l.a.createElement(q.CSVLink,{data:function(){var e=[];return t.forEach((function(a){var t={table:a.table,date:a.date,order:a.order,qty:a.qty,profit:a.qty*a.price};e.push(t)})),e}()},l.a.createElement("button",{className:"export-button"},"Export")),l.a.createElement(I.a,{className:"start",value:i,onChange:function(e){return m(new Date(new Date(e).setHours(0,0,0,0)))}}),l.a.createElement(I.a,{className:"end",value:p,onChange:function(e){return f(new Date(new Date(e).setHours(23,59,59,0)))}}))}function H(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=N()("https://192.168.254.107:5000");return e.emit("get Queue"),e.on("get Queue",(function(e){r(e)})),function(){return e.disconnect()}}),[]),l.a.createElement("div",{className:"inner-page"},l.a.createElement("p",null,"Queue"),l.a.createElement(j,{class:"Queue",heading1:"Orders",heading2:"Qty",heading3:"Table",orders:t}))}var P=t(131),W=t(132),B=function(e){Object(p.a)(t,e);var a=Object(f.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"nav-container"},l.a.createElement("img",{className:"orders-logo",src:"/lokalbrew/lokalbrew.jpg",alt:"logo_img"}),l.a.createElement("img",{className:"orders2-logo",src:"/lokalbrew/lokalbrew-logo.jpg",alt:"logo_img"}),l.a.createElement(E.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"active-link"},l.a.createElement("div",{className:"nav-item"},l.a.createElement(P.a,{className:"icon",icon:W.b,size:"2x"}),l.a.createElement("p",null,"Orders"))),l.a.createElement(E.b,{to:"/queue",className:"nav-link",activeClassName:"active-link"},l.a.createElement("div",{className:"nav-item"},l.a.createElement(P.a,{className:"icon",icon:W.a,size:"2x"}),l.a.createElement("p",null," Queue"))),l.a.createElement(E.b,{to:"/deals",className:"nav-link",activeClassName:"active-link"},l.a.createElement("div",{className:"nav-item"},l.a.createElement(P.a,{className:"icon",icon:W.c,size:"2x"}),l.a.createElement("p",null," History"))),l.a.createElement("button",{className:"logout",onClick:function(){return e.props.getState(!1)}},"Logout")),l.a.createElement("div",{className:"pages"},l.a.createElement(b.a,{exact:!0,path:"/",component:x}),l.a.createElement(b.a,{path:"/queue",component:H}),l.a.createElement(b.a,{path:"/deals",component:Q}))))}}]),t}(n.Component);var L=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1];function c(e){r(e)}return t?l.a.createElement(B,{getState:c}):l.a.createElement("div",{className:"container"},l.a.createElement(s,null),l.a.createElement(i,{getState:c}),l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[556,1,2]]]);
//# sourceMappingURL=main.134837d5.chunk.js.map