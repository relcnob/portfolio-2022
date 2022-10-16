import { animate } from "https://cdn.skypack.dev/motion";

let menuToggled = false;

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle(`isSticky`, e.intersectionRatio < 1),
    {
      threshold: [1],
    }
  );
  observer.observe(document.querySelector("nav"));
  // burger

  document.querySelector("nav label").addEventListener("mousedown", () => {
    if (menuToggled === false) {
      console.log(menuToggled);
      menuToggled = true;

      animate(
        document.querySelector("#header-nav"),
        {
          transform: ["translateX(100vw)", "translateX(0)"],
        },
        {
          duration: 0.7,
          easing: "ease-in-out",
        }
      );
    } else {
      menuToggled = false;
      animate(
        document.querySelector("#header-nav"),
        {
          transform: ["translateX(0)", "translateX(100vw)"],
        },
        {
          duration: 0.7,
          easing: "ease-in-out",
        }
      );
    }
  });

  document.querySelectorAll("#header-nav ul li a").forEach((element) => {
    element.addEventListener("click", () => {
      menuToggled = false;
      animate(
        document.querySelector("#header-nav"),
        {
          transform: ["translateX(0)", "translateX(100vw)"],
        },
        {
          duration: 0.7,
          easing: "ease-in-out",
        }
      );
    });
  });
});
