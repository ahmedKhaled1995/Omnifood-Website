$(document).ready(() => {
  // defining constants to be used in functions
  const animationScrollSpeed = 1000; // in milliseconds (so 1 second)
  const navBarOffset = "60px;";
  const animationOffset = "50%";

  // sticky header function
  $(".js-section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky-header");
      } else {
        $("nav").removeClass("sticky-header");
      }
    },
    { navBarOffset }
  );

  // adding scrolling to "I'm hungrey" button
  $(".js-hungry-btn").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-plans").offset().top,
      },
      animationScrollSpeed
    );
  });

  // adding scrolling to "Show me more" button
  $(".js-show-more-btn").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-features").offset().top,
      },
      animationScrollSpeed
    );
  });

  // adding scrolling to "Food delivery" link in the nav bar
  $(".js-delivery-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-features").offset().top,
      },
      animationScrollSpeed
    );
  });

  // adding scrolling to "Our cities" link in the nav bar
  $(".js-cities-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-cities").offset().top,
      },
      animationScrollSpeed
    );
  });

  // adding scrolling to "How it works" link in the nav bar
  $(".js-how-it-works-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-steps").offset().top,
      },
      animationScrollSpeed
    );
  });

  // adding scrolling to "Sign up" link in the nav bar
  $(".js-signup").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".js-section-plans").offset().top,
      },
      animationScrollSpeed
    );
  });

  /*
  the following 4 methods are adding animations to different parts of the page,
  for more information, visit  https://animate.style/ 
  */
  $(".js-waypoint-1").waypoint(
    (direction) => {
      $(".js-waypoint-1").addClass("animate__animated animate__fadeIn");
    },
    { offset: animationOffset }
  );

  $(".js-waypoint-2").waypoint(
    (direction) => {
      $(".js-waypoint-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: animationOffset }
  );

  $(".js-waypoint-3").waypoint(
    (direction) => {
      $(".js-waypoint-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: animationOffset }
  );

  $(".js-waypoint-4").waypoint(
    (direction) => {
      $(".js-waypoint-4").addClass("animate__animated animate__pulse");
    },
    { offset: animationOffset }
  );

  // adding animation effect to mobile nav
  $(".js-mobile-nav-icon").click(() => {
    const nav = $(".js-main-nav");
    const icon = $(".js-icon");
    nav.slideToggle(
      200
    ); /*ul Element.slideToggle(annimation speed in milliseconds)*/
    const className = icon.attr("class");
    if (className === "ion-ios-menu js-icon") {
      icon.removeClass("ion-ios-menu js-icon");
      icon.addClass("ion-ios-close js-icon");
    } else {
      icon.removeClass("ion-ios-close js-icon");
      icon.addClass("ion-ios-menu js-icon");
    }
  });
});
