$(window).on("scroll", function () {
  const scrollY = $(window).scrollTop(); // gets the position of the scroll's y
  const heroElements = $("#hero h1, #hero h2, #hero p, #hero a, #hero img"); // selects items in #hero to iterate over

  heroElements.each(function (index) {
    let translateY = scrollY * (0.9 + index * 0.1); // Move up at different speeds
    const opacity = Math.max(1 - scrollY / 300, 0); // Fade out with scroll

    let translateX;
    if (index <= 1) {
      translateX = 0;
    } else if (index === 2) {
      translateX = -50 + translateY;
    } else if (index === 5) {
      translateX = -50 + 5 * translateY;
    } else {
      translateX = -50 - translateY;
    }

    if (index <= 3) {
      translateY = -translateY;
    }

    $(this).css({
      transform: `translateX(${translateX}%) translateY(${translateY}px)`,
      opacity: opacity,
    });
  });
});

$(window).on("scroll", function () {
  const scrollY = window.scrollY - window.innerHeight * 1.1; // gets the position of the scroll's y
  const heroElements = $("#languages h2, #languages a"); // selects items in #hero to iterate over
  heroElements.each(function (index) {
    let translateX = scrollY * (0.9 + index * 0.1); // Move left & right at different speeds
    const opacity = Math.max(1 - scrollY / 300, 0); // Fade out with scroll

    if (index == 0) {
      translateX = 0;
    } else if (index >= 4) { 
      translateX = -translateX;
    }

    translateX /= 2;
    if (index == 0) {
      $(this).css({
        transform: `translateY(${-translateX}%)`,
        opacity: opacity,
      });
    }
    if (index <= 3) {
      $(this).css({
        transform: `translateX(${Math.max(translateX, 0)}%)`,
        opacity: opacity,
      });
    } else {
      $(this).css({
        transform: `translateX(${Math.min(translateX, 0)}%)`,
        opacity: opacity,
      });
    }
  });
});

$(window).on("scroll", function () {
  let scrollY = $(window).scrollTop() - (window.innerHeight * 2.3 * 1.1); // gets the position of the scroll's y
  const heroElements = $("#projects .grid-container-projects"); // selects items in #hero to iterate over

  heroElements.each(function (index) {
    
    const opacity = Math.max(1 - scrollY / 300, 0); // Fade out with scroll
    
    if (index === 1) {
      scrollY -= window.innerHeight * 0.8
    } else if (index === 2) {
      scrollY -= window.innerHeight * 0.5 * 2;
    }

    let translateX = scrollY * (0.9 + index * 0.1); // Move up at different speeds
    translateX = index === 1 ? -translateX : translateX;
    translateX /= 2;
    console.log(translateX);
    if (index != 1) {
      $(this).css({
        transform: `translateX(${Math.max(translateX, 0)}%)`,
      
      });
    } else {
      $(this).css({
        transform: `translateX(${Math.min(translateX, 0)}%)`,
      
      });
    }

  });
});

const maxScrollY = window.innerHeight * 4.5;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const scrollPosition = window.scrollY; // Check the current scroll position
  if (scrollPosition > maxScrollY) {
    // If the scroll position exceeds the limit
    // Prevent further scrolling by setting the scroll position back to maxScrollY
    window.scrollTo(0, maxScrollY);
  }
});

window.addEventListener("resize", () => {
  maxScrollY = window.innerHeight * 5.5;
});

$(window).on("scroll", function () {
  const scrollY = window.scrollY - 1600; // gets the position of the scroll's y
  const heroElements = $("#projects .grid-container-projects"); // selects items in #hero to iterate over

  heroElements.each(function (index) {
    let translateX = scrollY * (0.9 + index * 0.1); // Move left & right at different speeds
    const opacity = Math.max(1 - scrollY / 300, 0); // Fade out with scroll

    translateX /= 2;
    $(this).css({
      transform: `translateX(${translateX}%) translateY(${translateY}px)`,
      opacity: opacity,
    });
  });
});

$("#languages figure img").hover(
  function () {
    $(this).parent().addClass("hovered");
  },
  function () {
    $(this).parent().removeClass("hovered");
  }
);





$("#projects .one").hover(
  function () {
    $(this).addClass("hover-project");
    $(".one p").addClass("visible");
  },
  function () {
    $(this).removeClass("hover-project");
    $(".one p").removeClass("visible");
  }
);

$("#projects .two").hover(
  function () {
    $(this).addClass("hover-project");
    $(".two p").addClass("visible");
  },
  function () {
    $(this).removeClass("hover-project");
    $(".two p").removeClass("visible");
  }
);

$("#projects .three").hover(
  function () {
    $(this).addClass("hover-project");
    $(".three p").addClass("visible");
  },
  function () {
    $(this).removeClass("hover-project");
    $(".three p").removeClass("visible");
  }
);
