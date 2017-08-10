

class CLfurniturePageScraper {
  scrape(url){

    //example url='https://sfbay.craigslist.org/sfc/fuo/d/queen-bed-with-night-stand/6252892791.html';

    //if we have a proxy server:
    //const myInit = { header: { origin: null } };
    //return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`,myInit).then(response => {
    return fetch(url).then(response => {
      return response.text();
    })
    .then(html => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");



    let price = doc.querySelector(".price");
    if (price === null || price === '' || price === undefined){
      price = 'Price - Not Available';
    }

    let location = doc.querySelector("small");
    if (location === null || location === '' || location === undefined){
      location = 'Location - Not Available';
    }

    let condition = doc.querySelector(".attrgroup");
    if (condition === null || condition === '' || condition === undefined ){
      condition = 'Condition - Not Available';
    }

    let image = doc.querySelector(".thumb").href;
    if (image === null || image === '' || image === undefined){
      image = 'static/images/BedroomSetCartoon.jpg';
    }

      let widgetData={};
      widgetData.image = image;
      widgetData.price = price.innerText;
      widgetData.location = location.innerText;
      widgetData.condition = condition.innerText;

      return widgetData;
    })


  }

}

module.exports = CLfurniturePageScraper;
