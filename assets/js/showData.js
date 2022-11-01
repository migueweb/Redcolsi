import { PROJECTS_DATA, GALERY_DATA } from "./data.js";

showGaleryItems(GALERY_DATA);
showAccordionItems(PROJECTS_DATA);


function showAccordionItems(data){
  let projectsAccordion = document.getElementById('projectsAccordion');
  projectsAccordion.innerHTMl = '';
  
  for(const element of data){
    let i = data.indexOf(element);
    
    let accordionItem = document.createElement('article')
    accordionItem.classList.add('accordion-item', 'p-2')

    accordionItem.innerHTML = `
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
    projectsAccordion.appendChild(accordionItem);

  }

}

function showGaleryItems(images) {
  let galeyItemsWrapper = document.getElementById('galeyItemsWrapper');
  galeyItemsWrapper.innerHTML = ''

  for(const imagen of images){
    let image = images.indexOf(imagen);
    let galeryItem = document.createElement('div')
    galeryItem.classList.add('col-6', 'col-lg-4', 'col-md-6', 'portfolio-item', 'filter-app')

    galeryItem.innerHTML = `
      <article class="portfolio-wrap">
        <img src="${images[image].url}" class="img-fluid" alt="">
      </article>
    `
    galeyItemsWrapper.appendChild(galeryItem);

  }
}

