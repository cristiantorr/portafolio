document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Gestionar estado visual del botón activo
      buttons.forEach((btn) => {
        btn.classList.remove(
          "border-blue-500",
          "bg-blue-900/30",
          "active-filter",
        );
        btn.classList.add("border-neutral-600", "bg-neutral-900");
      });

      button.classList.remove("border-neutral-600", "bg-neutral-900");
      button.classList.add(
        "border-blue-500",
        "bg-blue-900/30",
        "active-filter",
      );

      // 2. Filtrar los proyectos
      const filterValue = button.getAttribute("data-filter");

      projects.forEach((project) => {
        // Obtenemos las tecnologías del proyecto y las convertimos en array
        const projectTechs = project.getAttribute("data-tech").split(",");

        if (filterValue === "all" || projectTechs.includes(filterValue)) {
          // Mostrar proyecto con transición suave
          project.style.display = "block";
          setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "scale(1)";
          }, 50);
        } else {
          // Ocultar proyecto con transición suave
          project.style.opacity = "0";
          project.style.transform = "scale(0.95)";
          setTimeout(() => {
            project.style.display = "none";
          }, 300); // Mismo tiempo que la duración de la transición en el CSS (300ms)
        }
      });
    });
  });

  const cards = document.querySelectorAll(".project-card");

  const modal = document.querySelector("#project-modal");

  const close = document.querySelector("#close-modal");

  const image = document.querySelector("#modal-image");
  const title = document.querySelector("#modal-title");
  const description = document.querySelector("#modal-description");
  const tags = document.querySelector("#modal-tags");
  const btns = document.querySelector("#modal-btns");
  const github = document.querySelector("#modal-github");
  const link = document.querySelector("#modal-link");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      image.src = card.dataset.image;

      title.textContent = card.dataset.title;

      description.textContent = card.dataset.description;

      const projectTags = card.querySelector(".project-tags");
      const projectBtns = card.querySelector(".project-btn");
      tags.innerHTML = projectTags.innerHTML;
      btns.innerHTML = projectBtns.innerHTML;

      /*  card.dataset.tags.split("|").forEach((tag) => {
        const span = document.createElement("span");

        span.className = `flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `;

        span.textContent = tag.name;

        tags.appendChild(span); 
      }); */

      /*  if (card.dataset.github) {
        github.href = card.dataset.github;
        github.classList.remove("hidden");
      } else {
        github.classList.add("hidden");
      }

      if (card.dataset.link) {
        link.href = card.dataset.link;
        link.classList.remove("hidden");
      } else {
        link.classList.add("hidden");
      } */

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
});
