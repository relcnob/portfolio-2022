window.addEventListener("DOMContentLoaded", initFech);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fetchedId = urlParams.get("id");

import { animate, stagger, inView } from "https://cdn.skypack.dev/motion";
animate(
  document.querySelector(".loader span"),
  {
    transform: ["rotate(0)", "rotate(3turn)"],
  },
  {
    duration: 4,
  }
);

async function initFech() {
  await loadProject();
  setTimeout;
  animate(
    document.querySelector(".loader"),
    {
      transform: ["scale(1)", "scale(0)"],
    },
    {
      stagger: 1,
      duration: 0.3,
    }
  );
  inView("#features_section > section", ({ target }) => {
    animate(
      target,
      { transform: ["translateX(400px)", "translateX(0)"], opacity: [0, 1] },
      {
        delay: stagger(0.2),
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
}

async function loadProject() {
  const response = await fetch("portfolio_projects.json");
  const projects = await response.json();
  const project = projects[fetchedId - 1];
  // replace contents
  document.querySelector(".project-heading h1").textContent =
    "//" + project.name;
  document.querySelector(".project-tags ul").innerHTML = "";
  project.tags.forEach((tag) => {
    const litag = document.createElement("li");
    litag.textContent = tag;
    litag.classList.value =
      "border-2 border-solid px-3 md:px-4 lg:px-8 py-3 rounded";
    document.querySelector(".project-tags ul").appendChild(litag);
  });
  document.querySelector(".main-image").src = project.mainPic;
  document.querySelector(".main-project-section p").textContent =
    project.fullDesc;
  document.querySelector(".main-project-section a").href = project.link;
  const parent = document.querySelector("#features_section");

  project.features.forEach((feature) => {
    const template = document.querySelector("#section_template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("section img").src = feature.img;
    clone.querySelector("section div h2").textContent = "//" + feature.title;
    clone.querySelector("section div p").textContent = feature.description;
    parent.appendChild(clone);
  });

  document.querySelector(".project-gallery img:first-of-type").src =
    project.mockups[0];
  document.querySelector(".project-gallery img:nth-of-type(2)").src =
    project.mockups[1];
  document.querySelector(".project-gallery img:nth-of-type(3)").src =
    project.mockups[2];
}
