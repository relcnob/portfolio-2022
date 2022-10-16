window.addEventListener("DOMContentLoaded", initFech);

function initFech() {
  loadProjects();
}

async function loadProjects() {
  const response = await fetch("projects.json");
  const projects = await response.json();

  displayProjects(projects);
}

function displayProjects(projectsArr) {
  console.log(projectsArr);
  const template = document.querySelector("#project_card_template").content;
  const parent = document.querySelector("#works_wrapper");
  projectsArr.forEach((project) => {
    const clone = template.cloneNode(true);
    console.log(project);
    clone.querySelector("h3").textContent = project.name;
    clone.querySelector(".project-tags").innerHTML = "";
    project.tags.forEach((tag) => {
      const ptag = document.createElement("p");
      ptag.textContent = tag;
      ptag.classList.add("mr-1");
      clone.querySelector(".project-tags").appendChild(ptag);
    });
    clone.querySelector(".project-short-desc").textContent = project.shortDesc;
    clone.querySelector("img").src = project.mainPic;
    clone.querySelector("a").href = `project.html?id=${project.id}`;
    parent.appendChild(clone);
  });
}
