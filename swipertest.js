new Swiper(".swiper-container", {
    speed: 600,
    spaceBetween: 65,
    slidesPerView: 3,
    slidesOffsetBefore: 65,
    effect: "slide",  // change features of swiper by referencing their api docs
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"    // if you want to change button styling, get rid of swiper classes and make your own
    }
  });