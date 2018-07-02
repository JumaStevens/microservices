!function(e,r){for(var t in r)e[t]=r[t]}(this,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=8)}([function(e,r){e.exports=require("firebase-admin")},function(e,r){e.exports=require("firebase-functions")},function(e,r){e.exports=require("@sendgrid/mail")},function(e,r){e.exports=require("cors")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("babel-runtime/regenerator")},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.listener=void 0;var n=a(t(6)),o=a(t(5)),u=s(t(1)),i=s(t(0));function s(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function a(e){return e&&e.__esModule?e:{default:e}}var c=t(4),l=t(3),f=t(2),d=c();d.use(l({origin:!0})),d.post("/mail/:uid",function(){var e=(0,o.default)(n.default.mark(function e(r,t){var o,u,s,a,c,l,d;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("req: ",r),console.log("req body: ",r.body),console.log("req params: ",r.params),o=r.params.uid,u=r.body.data,s=i.database(),e.next=9,s.ref("/services/sendGrid/"+o).once("value");case 9:if(a=e.sent,console.log("snapshot: ",a),c=a.child("apiKey").val(),l=a.child("email").val(),c&&l&&u.from&&u.subject&&u.text){e.next=17;break}return console.log("Error: required data missing"),t.status(200).send("Error: required data missing"),e.abrupt("return");case 17:f.setApiKey(c),d={to:l,from:u.from,subject:u.subject,text:u.text},f.send(d).then(function(){t.status(200).send("Success: SendGrid request success!")}).catch(function(e){console.log("sgMai error: ",e),console.log("sgMail error body: ",e.response.body),t.status(200).send("Error: SendGrid request fail!")}),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(0),console.error("catch error: ",e.t0),t.status(200).send("Error: A wild Error appeared!");case 26:case"end":return e.stop()}},e,void 0,[[0,22]])}));return function(r,t){return e.apply(this,arguments)}}());r.listener=u.https.onRequest(d)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sendGrid=void 0;u(t(1));var n=u(t(0)),o=u(t(7));function u(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}n.initializeApp();r.sendGrid=o.listener}]));