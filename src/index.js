
const { div, form, i, input, label, button, nav, span } = require('elementx')

const CLroomPageScraper = require('./scrapers/CLroomPageScraper');

const CLfurniturePageScraper = require('./scrapers/CLfurniturePageScraper');

const Widget = require('./components/Widget');

addEventListener('DOMContentLoaded', main);


//Dynamically generating the "body" section of index.html and appending it to "root" div
const $root = document.querySelector('#root');
const $app = div(
  // Navigation Section
  nav(
    div({ class: 'nav-wrapper indigo'},
      span({ href: '#',
          class: 'brand-logo',
          style: 'padding-left:10px'},
          'Craigslist Widget Generator'
      )
    )
  ),
  // URL Inputs Section
  form({ class: 'col s12 m12',
         id: 'form' },
    div({ class: 'row' },
      div({ class: 'input-field col s12 m12' },
        i({ class: 'material-icons prefix indigo-text'},'home'),
        input({ id: 'urlRoom',
                type: 'text',
                class: 'validate'
                }),
        label({ for: 'url'},'CRAIGSLIST ROOM URL')
      )
    ),
    div({ class: 'row' },
      div({ class: 'input-field col s12 m12' },
        i({ class: 'material-icons prefix indigo-text'},'hotel'),
        input({ id: 'urlFurniture',
                type: 'text',
                class: 'validate'
                }),
        label({ for: 'url'},'CRAIGSLIST FURNITURE URL')
      )
    ),
    div({ class: 'row center' },
      button({ id: 'submit-button',
          type: 'submit',
          name: 'action',
          class: 'btn-large waves-effect waves-light indigo lighten-1'},
          'SUBMIT')
    )
  ),
  // Container for the widgets
  div({ id: 'widgets',
        class: 'row' })
);

$root.appendChild($app);


// Function that brings everything together
// Scraping begins when user inputs urls and presses submit buttom
function main(){

  let inputRoom = document.getElementById("urlRoom");
  let inputFurniture = document.getElementById("urlFurniture");

  document.getElementById("submit-button").addEventListener("click", () =>{
    event.preventDefault();

    //Room case - input validation
    if (inputRoom.value === null || inputRoom.value === '' || !inputRoom.value.includes('craigslist') || !inputRoom.value.startsWith('http')) {
       return Materialize.toast('Please input a valid Craigslist Rooms & Shares url', 4000,'rounded red');
    }
    //Furniture case - input validation
    if (inputFurniture.value === null || inputFurniture.value === '' || !inputFurniture.value.includes('craigslist') || !inputFurniture.value.startsWith('http')) {
       return Materialize.toast('Please input a valid Craigslist Furniture url', 4000,'rounded red');
    }
    else {
      const scraperRoom = new CLroomPageScraper();
      const scraperFurniture = new CLfurniturePageScraper();

      Promise.all([scraperRoom.scrape(inputRoom.value),scraperFurniture.scrape(inputFurniture.value)]).then(results => {
        let roomInfo = results[0];
        let furnInfo = results[1];
        document.getElementById('widgets').appendChild(Widget(roomInfo,furnInfo));
      });
    }

  });
}



///////////////////////////////////////////////////////////////////////////////


  // If Promise.all didn't exist:
  //
  // //Room case - input validation
  // if (inputRoom.value === null || inputRoom.value === '' || !inputRoom.value.includes('craigslist') || !inputRoom.value.startsWith('http')) {
  //    return Materialize.toast('Please input a valid Craigslist Rooms & Shares url', 4000,'rounded red');
  //
  //  }  else {
  //   const scraperRoom = new CLroomPageScraper();
  //   scraperRoom.scrape(inputRoom.value).then(data => {
  //     document.getElementById('widgets').appendChild(Widget(data));
  //   });
  // }
  //
  // //Furniture case - input validation
  // if (inputFurniture.value === null || inputFurniture.value === '' || !inputFurniture.value.includes('craigslist') || !inputFurniture.value.startsWith('http')) {
  //    return Materialize.toast('Please input a valid Craigslist Furniture url', 4000,'rounded red');
  //
  //  }  else {
  // const scraperFurniture = new CLfurniturePageScraper();
  // scraperFurniture.scrape(inputFurniture.value).then(data => {
  //   document.getElementById('widgets').appendChild(Widget(data));
  // });
  // }



///////////////////////////////////////////////////////////////////////////////


// If elementx didn't exist:
//
// document.getElementById("submit-button").addEventListener("click", function () {

  // let colDiv = document.createElement('div');
  // colDiv.setAttribute('class', 'col s6 m6 l6');
  // let cardColorDiv = document.createElement('div');
  // cardColorDiv.setAttribute('class', 'card white');

  //image section
  // let cardImageDiv = document.createElement('div');
  // cardImageDiv.setAttribute('class', 'card-image');
  // let imageDiv = document.createElement('img');
  // imageDiv.setAttribute('src', widgetData.image);
  // cardImageDiv.appendChild(imageDiv);
  // cardColorDiv.appendChild(cardImageDiv);

  // //info section
  // let cardContentDiv = document.createElement('div');
  // cardContentDiv.setAttribute('class', 'card-content black-text');
  // let h5Div = document.createElement('h5');
  // h5Div.setAttribute('class', 'black-text');
  // h5Div.innerText = widgetData.price;
  // let pDiv = document.createElement('p');
  // pDiv.innerText = widgetData.location;
  // pDiv.innerText = widgetData.timeline;
  // cardContentDiv.appendChild(h5Div);
  // cardContentDiv.appendChild(pDiv);
  // cardContentDiv.appendChild(pDiv);
  // cardColorDiv.appendChild(cardContentDiv);

  // colDiv.appendChild(cardColorDiv);
  // rootDiv.appendChild(colDiv);

// });
