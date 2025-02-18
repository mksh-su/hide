"use strict";

function testWebP(e) {
  var i = new Image();
  i.onload = i.onerror = function () {
    e(2 == i.height);
  }, i.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (e) {
  1 == e ? document.querySelector("body").classList.add("webp") : document.querySelector("body").classList.add("no-webp");
}), $(document).ready(function () {
  $(function () {
    !function () {
      new Swiper(".search-top-slider", {
        navigation: {
          nextEl: ".swiper-button-next6",
          prevEl: ".swiper-button-prev6"
        },
        pagination: {
          el: ".swiper-pagination-slider6",
          clickable: !0
        },
        slidesPerView: 1.5,
        slidesOffsetBefore: 180,
        initialSlide: 0,
        loop: !0,
        speed: 600,
        breakpoints: {
          320: {
            slidesPerView: 1,
            centeredSlides: !0,
            slidesOffsetBefore: 0
          },
          767: {
            slidesPerView: 1,
            slidesOffsetBefore: 0
          },
          860: {
            slidesPerView: 1.5,
            slidesOffsetBefore: 75,
            centeredSlides: !1
          },
          920: {
            slidesPerView: 1.4,
            slidesOffsetBefore: 75
          },
          1280: {
            slidesPerView: 1.7,
            slidesOffsetBefore: 180
          },
          1680: {
            slidesPerView: 1.5
          },
          slidesPerView: 1,
          slideToClickedSlide: !0,
          initialSlide: 0,
          loop: !0,
          speed: 600
        }
      }), new Swiper(".slider11", {
        navigation: {
          nextEl: ".swiper-button-next11",
          prevEl: ".swiper-button-prev11"
        },
        slidesPerView: 1,
        slideToClickedSlide: !0,
        initialSlide: 0,
        loop: !0,
        speed: 600
      }), new Swiper(".slider12", {
        navigation: {
          nextEl: ".swiper-button-next12",
          prevEl: ".swiper-button-prev12"
        },
        pagination: {
          el: ".swiper-pagination-12-about",
          clickable: !0
        },
        slidesPerView: 1,
        slideToClickedSlide: !0,
        initialSlide: 0,
        loop: !0,
        speed: 600
      }), new Swiper(".slider13", {
        navigation: {
          nextEl: ".swiper-button-next13",
          prevEl: ".swiper-button-prev13"
        },
        slidesPerView: 1,
        slideToClickedSlide: !0,
        initialSlide: 0,
        loop: !0,
        autoplay: {
          delay: 5000
        },
        speed: 600
      }); // var e = new Swiper(".slider2", {
      //   observer: !0,
      //   observeParents: !0,
      //   slidesPerView: 5.5,
      //   slideToClickedSlide: !0,
      //   slidesOffsetBefore: 180,
      //   initialSlide: 0,
      //   loop: !0,
      //   speed: 600,
      //   allowTouchMove: !1,
      //   breakpoints: {
      //     320: { slidesPerView: 1.5, slidesOffsetBefore: 50 },
      //     340: { slidesPerView: 1.5, slidesOffsetBefore: 55 },
      //     360: { slidesPerView: 1.5, slidesOffsetBefore: 60 },
      //     380: { slidesPerView: 1.5, slidesOffsetBefore: 65 },
      //     400: { slidesPerView: 1.5, slidesOffsetBefore: 70 },
      //     420: { slidesPerView: 1.5, slidesOffsetBefore: 75 },
      //     440: { slidesPerView: 3, slidesOffsetBefore: 100 },
      //     767: { slidesPerView: 4, slidesOffsetBefore: 180 },
      //     1560: { slidesPerView: 5.5 },
      //   },
      // });

      new Swiper(".house-main-slider", {
        observer: !0,
        observeParents: !0,
        loop: !0,
        speed: 600,
        //   loopedSlides: $(".house-main-slider .swiper-wrapper .swiper-slide")
        //     .length,
        //thumbs: { swiper: e },
        navigation: {
          nextEl: ".swiper-button-next-house",
          prevEl: ".swiper-button-prev-house"
        }
      });
    }();
  });
}), $(".form_button_fade,.footer_main_questions_link").click(function () {
  $(".form_body").fadeIn(), $("html").addClass("lock");
}), $(document).mouseup(function (e) {
  var i = $(".form_content");
  e.target != i[0] && 0 === i.has(e.target).length && ($(".form_body").fadeOut(), $("html").removeClass("lock"));
}), $(document).ready(function () {
  $(".header_burger_desktop").hover(function (e) {
    $(".menu_burger").toggleClass("menu_burger_active"), $(".header_burger_desktop").toggleClass("header_burger_desktop_active");
  });
}), $(".form_inputs_tel,.service_form_tel").mask("+7(999)999-99-99"), $("#steps-app-modal").steps({
  onFinish: function onFinish() {
    console.log("complete");
  }
}), $(".step-btn, .step-steps li").click(function () {
  $(".step-tab-panel:last-of-type").hasClass("active") ? $(".step-footer").addClass("step-footer-hidden") : $(".step-footer").removeClass("step-footer-hidden");
}), $(".about_project .container .about_project_wrap .left_column .action_button").on("click", function (event) {
  event.preventDefault();
  $(this).closest(".left_column").toggleClass("about-text-shown");
  $(this).text(function (i, text) {
    return text === "подробнее о проекте" ? "скрыть" : "подробнее о проекте";
  });
}), $(window).on("load", function () {
  var e = $(".search-top-slider .swiper-slide-active");
  if (console.log(e), $(window).width() >= 1280) var i = $(e).width() + 180;else i = $(e).width() + 75;
  $(".search-top-consultant").css("left", i);
}), $(".modal-final-btn").click(function () {
  $(this).closest(".modal").addClass("modal-finished"), setTimeout(function () {
    $(".modal").modal("hide"), $(".modal").removeClass("modal-finished");
  }, 5e3);
}), $(".object-list-tags .white_bordered_btn").click(function (e) {
  e.preventDefault(), $(this).closest(".object-list-tags").toggleClass("object-list-tags-opened"), $(this).text(function (e, i) {
    return "показать все" === i ? "скрыть" : "показать все";
  });
}), $(".premium-more-btn").click(function (e) {
  e.preventDefault(), $(".premium-more").toggleClass("premium-more-show"), $(this).text(function (e, i) {
    return "подробнее о сервисе" === i ? "скрыть информацию о сервисе" : "подробнее о сервисе";
  });
}), $(".our-services-btn-buyer").click(function (e) {
  e.preventDefault(), $(".our-services-text p ").hide(), $(".our-services-text-buyer").show();
}), $(".our-services-btn-investor").click(function (e) {
  e.preventDefault(), $(".our-services-text p ").hide(), $(".our-services-text-investor").show();
}), $(".our-services-btn-developer").click(function (e) {
  e.preventDefault(), $(".our-services-text p ").hide(), $(".our-services-text-developer").show();
}), $(".our-services-btn-seller").click(function (e) {
  e.preventDefault(), $(".our-services-text p ").hide(), $(".our-services-text-seller").show();
}), $(".news-list-read-more, a.news-list-item-heading").click(function (e) {
  e.preventDefault(), $(this).closest(".news-list-item").addClass("item-full-opened"), $("html").addClass("item-full-opened-body");
}), $(".news-list-item-close").click(function () {
  $(this).closest(".news-list-item").removeClass("item-full-opened"), $("html").removeClass("item-full-opened-body");
}), $(document).ready(function () {
  size_li = $(".news-list-item").length, x = 3, $(".news-list-item:lt(" + x + ")").css("display", "flex"), $(".news-list-more").click(function (e) {
    e.preventDefault(), x = x + 5 <= size_li ? x + 5 : size_li, $(".news-list-item:lt(" + x + ")").css("display", "flex"), x == size_li && $(".news-list-more").hide();
  });
}), $("body").on("change", "input[name^='object_list_type_']", function () {
  "object_list_type_0" === $(this).prop("name") ? $(this).is(":checked") && ($(".object-list-tags input[type='checkbox']").prop("checked", !1), $(this).prop("checked", !0)) : $("input[name^='object_list_type_0']").prop("checked", !1);
}), $(".action_header_variants_list").click(function (e) {
  e.preventDefault(), $(".action_header_variants_list").removeClass("active"), $(this).addClass("active");
}), $(document).ready(function () {
  $(".numberonly").keypress(function (e) {
    var i = e.which ? e.which : event.keyCode;
    if (String.fromCharCode(i).match(/[^0-9]/g)) return !1;
  });
});