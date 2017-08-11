const { div, img, h5, ul, li } = require('elementx')

// Function that builds widgets given scraped data
module.exports = function Widget(roomInfo,furnInfo) {

  // const $widgets = document.querySelector('#widgets');
  return div(
    //div({ class: 'row' },
      div({ class: 'col s6 m3' },
        div({ class: 'card white' },
          div({ class: 'card-image' }),
          img({ src: roomInfo.image,
              height: '100%',
              width: '100%' }),
          div({ class: 'card-content black-text' },
            h5({class:'black-text center'},roomInfo.price),
            ul(
              li({class:'center'},roomInfo.location),
              li({class:'center'},roomInfo.extrainfo)
            )
          )
        )
      ),
      div({ class: 'col s6 m3' },
        div({ class: 'card white' },
          div({ class: 'card-image' }),
          img({ src: furnInfo.image,
              height: '100%',
              width: '100%' }),
          div({ class: 'card-content black-text' },
            h5({class:'black-text center'},furnInfo.price),
            ul(
              li({class:'center'},furnInfo.location),
              li({class:'center'},furnInfo.extrainfo)
            )
          )
        )
      )
    //)
  );

  // $widgets.appendChild($pieces);

};
