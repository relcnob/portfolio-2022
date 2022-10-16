import {
  animate,
  stagger,
  scroll,
  inView,
} from "https://cdn.skypack.dev/motion";

let menuToggled = false;
// header content

document.addEventListener("DOMContentLoaded", animInit);

function animInit() {
  inView("header", ({ target }) => {
    animate(
      target.querySelectorAll("h1"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        delay: stagger(0.2),
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("p"),
      { transform: ["translateY(-24px)", "translateY(0)"], opacity: [0, 1] },
      {
        delay: 1.5,
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("span:last-of-type"),
      { transform: ["translateY(24px)", "translateY(0)"], opacity: [0, 1] },
      {
        delay: 1,
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });

  animate(
    document.querySelector("header span:first-of-type"),
    {
      width: ["0%", "30%"],
    },
    {
      delay: 0.75,
      duration: 1,
      easing: "ease-in-out",
    }
  );

  animate(
    document.querySelector("#sticky-nav"),
    { transform: ["translateX(24px)", "translateX(0)"], opacity: [0, 1] },
    {
      delay: 1,
      duration: 1,
      easing: "ease-in-out",
    }
  );

  animate(
    document.querySelector("nav"),
    { opacity: [0, 1] },
    {
      delay: 1,
      duration: 1,
      easing: "ease-in-out",
    }
  );
  // h2
  inView("h2", ({ target }) => {
    animate(
      target,
      { x: [-500, 0], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
  inView("form", ({ target }) => {
    animate(
      target.querySelectorAll("form div"),
      { y: [500, 0], opacity: [0, 1] },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("form button"),
      { y: [500, 0], opacity: [0, 1] },
      {
        delay: 0.3,
        duration: 0.5,
        easing: "ease-in-out",
      }
    );
  });
  // about
  inView("#about div", ({ target }) => {
    animate(
      target,
      { y: [500, 0], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });

  inView("#contact span.striped-bg:first-of-type", ({ target }) => {
    console.log(target);
    animate(
      target,
      {
        width: ["0%", "20%"],
      },
      {
        delay: stagger(0.1),
        duration: 0.6,
        easing: "ease-in-out",
      }
    );
  });

  inView("#contact span.striped-bg:last-of-type", ({ target }) => {
    console.log(target);
    animate(
      target,
      {
        height: ["0%", "30%"],
      },
      {
        delay: stagger(0.1),
        duration: 0.6,
        easing: "ease-in-out",
      }
    );
  });

  inView("footer", ({ target }) => {
    animate(
      target,
      { opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });

  // project cards
  inView("#works div", ({ target }) => {
    animate(
      target.querySelectorAll(".project-card"),
      { y: [500, 0], opacity: [0, 1] },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: "ease-in-out",
      }
    );
  });

  const stickyNav = document.querySelectorAll("#sticky-nav a");

  scroll(({ y }) => {
    if (y.progress < 0.25) {
      stickyNav.forEach((navEl) => {
        navEl.classList.remove("bg-gray-100");
      });
      stickyNav[0].classList.add("bg-gray-100");
    } else if (y.progress < 0.5) {
      stickyNav.forEach((navEl) => {
        navEl.classList.remove("bg-gray-100");
      });
      stickyNav[1].classList.add("bg-gray-100");
    } else if (y.progress < 0.75) {
      stickyNav.forEach((navEl) => {
        navEl.classList.remove("bg-gray-100");
      });
      stickyNav[2].classList.add("bg-gray-100");
    } else if (y.progress < 1) {
      stickyNav.forEach((navEl) => {
        navEl.classList.remove("bg-gray-100");
      });
      stickyNav[3].classList.add("bg-gray-100");
    }
  });

  // header
  setTimeout(() => {
    document.querySelector(".lastName-wrapper h1").classList.add("showArrow");
  }, 1500);
}
