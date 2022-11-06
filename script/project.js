import { animate, inView, stagger } from "https://cdn.skypack.dev/motion";
const url = "../assets/projects.json";

document.addEventListener("DOMContentLoaded", () => {
  inView(".project-heading", ({ target }) => {
    animate(
      target.querySelector("h1"),
      { transform: ["translateX(-200px)", "translateX(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("div:last-of-type"),
      { transform: ["translateX(100px)", "translateX(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });

  inView(".project-tags", ({ target }) => {
    console.log(target);
    animate(
      target.querySelectorAll("ul > li"),
      { transform: ["translateY(20px)", "translateY(0)"], opacity: [0, 1] },
      {
        delay: stagger(0.1),
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });

  inView(".project-contents > div:first-of-type", ({ target }) => {
    console.log(target);
    animate(
      target,
      { transform: ["translateY(100px)", "translateY(0)"], opacity: [0, 1] },
      {
        delay: 0.1,
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });

  inView(".project-gallery", ({ target }) => {
    console.log(target);
    animate(
      target.querySelector("h2"),
      { transform: ["translateX(-200px)", "translateX(0)"], opacity: [0, 1] },
      {
        delay: stagger(0.2),
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });

  inView(".project-gallery img:first-of-type", ({ target }) => {
    console.log(target);
    animate(
      target.parentElement.querySelectorAll("img"),
      { transform: ["translateY(400px)", "translateY(0)"], opacity: [0, 1] },
      {
        delay: stagger(0.2),
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
  inView(" #features_section span:first-of-type", ({ target }) => {
    animate(
      target,
      {
        width: ["0%", "33.333333%"],
      },
      {
        delay: 0.2,
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
  inView(" #features_section span:last-of-type", ({ target }) => {
    animate(
      target,
      {
        width: ["0%", "33.333333%"],
      },
      {
        delay: 0.2,
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
});
