const { div, img, h5, ul, li } = require('elementx')

// Function that builds widgets given scraped data
module.exports = function Widget(widgetData) {

  // const $widgets = document.querySelector('#widgets');
  return div(
      div({ class: 'col s8 m4' },
        div({ class: 'card white' },
          div({ class: 'card-image' }),
          img({ src: widgetData.image,
              height: '100%',
              width: '100%' }),
          div({ class: 'card-content black-text' },
            h5({class:'black-text center'},widgetData.price),
            ul(
              li({class:'center'},widgetData.location),
              li({class:'center'},widgetData.extrainfo)
            )
          )
        )
      )
  );

  // $widgets.appendChild($pieces);

};
