"use strict"; /* Small and simple solution */

const elements = document.getElementsByClassName("flash flash-full js-notice flash-error");

while(elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
}