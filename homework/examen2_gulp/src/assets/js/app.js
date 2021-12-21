"use strict";

//console.log('Hello world!');

// ======== Burger ==========

let burger = $('#burger');
let nav = $('#nav');

burger.on('click', function (event) {
   event.preventDefault();

   $("body").toggleClass('show-nav');
   $(this).toggleClass('active');
   nav.toggleClass('show');
});

$(window).on('resize', function() {
   $("body").removeClass('show-nav');
   burger.removeClass('active');
   nav.removeClass('show');
});

/* Smooth Scroll to section
========================================== */

$("[data-scroll]").on("click", function (event) {
   event.preventDefault();

   let scrollEl = $(this).data("scroll");
   let scrollElPos = $(scrollEl).offset().top;

   $("body").removeClass('show-nav');
   burger.removeClass('active');
   nav.removeClass('show');

   $("html, body").animate({
      scrollTop: scrollElPos
   }, 500)
});

/* Scrollspy
========================================== */
let windowH = $(window).height();

$(window).on("scroll", function (eventScroll) {
   eventScroll.preventDefault();
   let scrollTop = $(this).scrollTop();

   $("[data-scrollspy]").each(function () {
      let $this = $(this);
      let sectionId = $this.data('scrollspy');
      let sectionOffset = $this.offset().top;
      sectionOffset = sectionOffset - (windowH * 0.2);

      if (scrollTop >= sectionOffset) {
         $('#nav [data-scroll]').removeClass('active');

         $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
      }
   });
});

/* Add .header-fixed
=====================================*/

let header = $("#header");
let headerSlider = $("#headerSlider");
let headerH = header.innerHeight();

$(window).on("scroll", function () {
   let scrollTop = $(this).scrollTop();

   if (scrollTop >= headerH) {
      header.addClass('header-fixed');
   } else {
      header.removeClass('header-fixed');
   }
});