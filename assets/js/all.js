"use strict";

var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  controller: {
    inverse: true
  }
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  buttonClass: 'btn',
  autohide: true,
  language: "zh-TW",
  orientation: "bottom"
});
//# sourceMappingURL=all.js.map
