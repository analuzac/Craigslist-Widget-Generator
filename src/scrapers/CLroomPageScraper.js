

class CLroomPageScraper {
  scrape(url){

    //example url='https://sfbay.craigslist.org/sfc/roo/d/great-room-available-in/6247349633.html';

    //if we have a proxy server:
    //const myInit = { header: { origin: null } };
    //return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`,myInit).then(response => {
    return fetch(url).then(response => {
      return response.text();
    })
    .then(html => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");



    //let price = doc.getElementsByClassName("price")[0].innerText;
    let price = doc.querySelector(".price");
    if (price === null || price === '' || price === undefined){
      price = 'Price - Not Available';
    }

    //let location = doc.getElementsByTagName("small")[0].innerText;
    let location = doc.querySelector("small");
    if (location === null || location === '' || location === undefined){
      location = 'Location - Not Available';
    }

    //let timeline = doc.getElementsByClassName("housing_movein_now property_date shared-line-bubble")[0].innerText;
    let timeline = doc.querySelector(".attrgroup");
    if (timeline === null || timeline === '' || timeline === undefined ){
      timeline = 'Timeline - Not Available';
    }

    //let image = doc.getElementsByClassName("thumb")[0].href;
    let image = doc.querySelector(".thumb").href;
    if (image === null || image === '' || image === undefined){
      image = 'static/images/SanFranciscoCartoon.jpg';
    }

      //Interesting additional info, but crowds widget too much
      //let attrs = doc.getElementsByClassName("mapAndAttrs")[0].children[2].children;
      // let details = [];
      // for (let i=0;i<attrs.length;i++){
      //   if (i%2===0){
      //     details.push(attrs[i].innerText);
      //   }
      // }

      let widgetData={};
      widgetData.image = image;
      widgetData.price = price.innerText;
      widgetData.location = location.innerText;
      widgetData.timeline = timeline.innerText;

      return widgetData;
    })


  }

}

module.exports = CLroomPageScraper;
