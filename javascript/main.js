let musica = document.createElement('audio')
document.body.appendChild(musica)
musica.setAttribute('type', 'audio/mp3')
musica.src = '/musica/musica.mp3'
musica.play()
musica.volume = 1
musica.autoplay = true

$(document).ready(function () {
  $('.container')
    .mouseenter(function () {
      $('.card').stop().animate(
        {
          top: '-90px',
        },
        'slow'
      )
    })
    .mouseleave(function () {
      $('.card').stop().animate(
        {
          top: 0,
        },
        'slow'
      )
    })
})
