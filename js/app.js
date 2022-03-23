$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $(".menu-bar").toggleClass("show")
    });


})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        },
        1200:{
            items:4
        }
    }
})


//   var swiper = new Swiper(".swiper-card", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

  var swiper = new Swiper(".swiper-card", {
    loop: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     // type: "progressbar",
    //     clickable: true,
    //   },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });