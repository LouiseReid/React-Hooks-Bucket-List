(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),o=n(1),l=r.a.createContext({items:[]}),i=n(3),s=n(7);function m(e,t){switch(t.type){case"ADD_COUNTRY":if(e.items.findIndex(function(e){return e===t.payload})>-1)return e;var n=[].concat(Object(s.a)(e.items),[t.payload]);return Object(i.a)({},e,{items:n});case"REMOVE":var a=e.items.filter(function(e){return e!==t.payload});return Object(i.a)({},e,{items:a});default:return e}}var f=n(2),d=n.n(f),p=n(6);function v(e){var t=e.countries,n=e.onCountrySelected,a=t.map(function(e,t){return r.a.createElement("option",{value:t,key:e.name},e.name)});return r.a.createElement("select",{defaultValue:"default",id:"country-selector",onChange:function(e){n(e.target.value)}},r.a.createElement("option",{disabled:!0,value:"default"},"Choose a country..."),a)}n(16);function E(e){var t=e.country;if(!t)return null;var n=Object(a.useContext)(l).dispatch;return r.a.createElement("div",{className:"country-detail"},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,"Capital: ",t.capital),r.a.createElement("p",null,"Population: ",t.population),r.a.createElement("button",{className:"btn-add",onClick:function(){n({type:"ADD_COUNTRY",payload:t.name})}},"+"))}n(17);function h(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(null),l=Object(o.a)(u,2),i=l[0],s=l[1];Object(a.useEffect)(function(){m()},[]);var m=function(){var e=Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(e){return c(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"country-wrapper"},r.a.createElement("h2",null,"Countries of the World"),r.a.createElement(v,{countries:n,onCountrySelected:function(e){var t=n[e];s(t)}}),r.a.createElement(E,{country:i}))}n(18);function b(){var e=Object(a.useContext)(l),t=e.state,n=e.dispatch,c=t.items.length>0?null:"Bucket List empty",u=t.items.map(function(e,t){return r.a.createElement("li",{key:t},e,r.a.createElement("button",{onClick:function(){return n({type:"REMOVE",payload:e})},className:"btn-remove"},"X"))});return r.a.createElement("div",{className:"bucket-list"},r.a.createElement("h2",null,"Bucket List"),r.a.createElement("p",{className:"subtitle"},c),r.a.createElement("ul",null,u))}n(19);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(function(){var e=Object(a.useContext)(l),t=Object(a.useReducer)(m,e),n=Object(o.a)(t,2),c=n[0],u=n[1];return r.a.createElement(l.Provider,{value:{state:c,dispatch:u}},r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(b,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.3f82f42d.chunk.js.map