// This is an OG userscript for archive purposes - not for production




// ==UserScript==
// @name        No GitHub flag alert
// @namespace   gemsvido
// @match       https://github.com/*
// @grant       none
// @version     0.2.2
// @author      gemsvidø
// @description Automatically closes the unclosable alert that your organization has been flagged.
// ==/UserScript==




// CONSTANTS
const ARGS = [];
const PREFIX = String("[No GitHub flag alert]");
const TARGET = String("flash flash-full js-notice flash-error");
// CONSTANTS





function log (text) {
  console.log(PREFIX + " " + text);
}



function no_jQuery (className) {
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    log("Removed flag alert without jQuery");
}



function use_jQuery (className) {
    $("." + className).remove();
    log("Removed flag alert using jQuery");
}


function main (args) {




  try {
      use_jQuery(TARGET);
  } catch (e) {
    log("jQuery failed. Using non-jQuery approach.");
    no_jQuery(TARGET);
  }


  log("Done!");
}



main(ARGS);