import { PROJECTS_DATA } from "./data.js";


const showAccordionItems = (data) => {
    let projectsAccordion = document.getElementById('projectsAccordion');
    projectsAccordion.innerHTMl = '';

    for (let i = 0; i <= data.length; i++) {

        let item = document.createElement('article')
        item.classList.add('accordion-item', 'p-2')

        item.innerHTML = `
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-${i}">
            <p class="text-capitalize">${data[i].title.toLowerCase()}</p>
          </button>
        </h2>
        <div id="accordion-item-${i}" class="accordion-collapse collapse" data-bs-parent="project-1">
          <div class="accordion-body">
            <div class="fw-semibold">${data[i].members}.</div>
          </div>
        </div>

          `
        projectsAccordion.appendChild(item);
    }

    console.clear()
}

showAccordionItems(PROJECTS_DATA)

console.clear()
