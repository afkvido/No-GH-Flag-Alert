// ==UserScript==
// @name        No GitHub flag alert
// @namespace   gemsvido
// @match       https://github.com/*
// @grant       none
// @version     0.2.0
// @author      gemsvidø
// @description Automatically closes the unclosable alert that your organization has been flagged.
// ==/UserScript==

// Note that the code is always open source, and never obfuscated or sold.
// Check the repo on GitHub: https://github.com/afkvido/No-GH-Flag-Alert

(()=>{"use strict";var e={11:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.TARGET=o.PREFIX=o.ARGS=void 0,o.ARGS=new Array,o.PREFIX=new String("[No GitHub flag alert]").valueOf(),o.TARGET=new String("flash flash-full js-notice flash-error").valueOf()},455:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.log=void 0;const n=r(11);o.log=function(e){console.log(n.PREFIX+" "+e)}},787:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.main=void 0;const n=r(455),t=r(11),u=r(360),l=r(387);o.main=function(e){try{(0,l.use_jQuery)(t.TARGET)}catch(e){(0,n.log)("jQuery failed. Using non-jQuery approach."),(0,u.no_jQuery)(t.TARGET)}(0,n.log)("Done!")}},360:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.no_jQuery=void 0;const n=r(455);o.no_jQuery=function(e){const o=document.getElementsByClassName(e);for(;o.length>0;)o[0].parentNode.removeChild(o[0]);(0,n.log)("Removed flag alert without jQuery")}},387:(e,o,r)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.use_jQuery=void 0;const n=r(455);o.use_jQuery=function(e){$("."+e).remove(),(0,n.log)("Removed flag alert using jQuery")}}},o={};function r(n){var t=o[n];if(void 0!==t)return t.exports;var u=o[n]={exports:{}};return e[n](u,u.exports,r),u.exports}(()=>{const e=r(787),o=r(11);(0,e.main)(o.ARGS)})()})();