const { div, img, h5, ul, li, br } = require('elementx')

// Function that builds widgets given scraped data
module.exports = function Widget(roomInfo,furnInfo) {

  return div(
      div({ class: 'col s12 m6' },
        div({ class: 'card white',
              style: "padding:10px 0 50px 0"},
          h5({class:'black-text center'},roomInfo.location),
          br(),
          div({ class: 'card-image' },
            div({ class: 'row' },
              img({ src: roomInfo.image,
                  height: '100%',
                  width: '100%',
                  class: 'col s12 m6'}),
              img({ src: furnInfo.image,
                  height: '100%',
                  width: '100%',
                  class: 'col s12 m6'})
              )
            ),
          div({ class: 'card-content black-text' },
            ul({class: 'left',
                style: "padding-left: 35px"},
              li({class:'center'},roomInfo.price),
              li({class:'center'},roomInfo.extrainfo)
            ),
            ul({class: 'right',
                style: "padding-right: 35px"},
              li({class:'center'},furnInfo.price),
              li({class:'center'},furnInfo.extrainfo)
            )
          )
        )
      )
  );

};




// Alternative style:
//
// // const $widgets = document.querySelector('#widgets');
// return div(
//   //div({ class: 'row' },
//     div({ class: 'col s6 m3' },
//       div({ class: 'card white' },
//         div({ class: 'card-image' }),
//         img({ src: roomInfo.image,
//             height: '100%',
//             width: '100%' }),
//         div({ class: 'card-content black-text' },
//           h5({class:'black-text center'},roomInfo.price),
//           ul(
//             li({class:'center'},roomInfo.location),
//             li({class:'center'},roomInfo.extrainfo)
//           )
//         )
//       )
//     ),
//     div({ class: 'col s6 m3' },
//       div({ class: 'card white' },
//         div({ class: 'card-image' }),
//         img({ src: furnInfo.image,
//             height: '100%',
//             width: '100%' }),
//         div({ class: 'card-content black-text' },
//           h5({class:'black-text center'},furnInfo.price),
//           ul(
//             li({class:'center'},furnInfo.location),
//             li({class:'center'},furnInfo.extrainfo)
//           )
//         )
//       )
//     )
//   //)
// );
// // $widgets.appendChild($pieces);
