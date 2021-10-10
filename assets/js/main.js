const dino = document.getElementsByClassName('dino')
let pulando = false

function lidar(event) {
  if (event.keyCode === 38 || event.keyCode === 32) {
    if (!pulando) {
      pular()
    }
  }
}

function pular() {
  let posicao = 0
  pulando = true

  let paraCima = setInterval(() => {
    if (posicao > 150) {
      console.log('no if')
      clearInterval(paraCima)

      let paraBiaxo = setInterval(() => {
        if (posicao <= 0) {
          clearInterval(paraBiaxo)
          pulando = false
        } else {
          posicao -= 20
          dino[0].style.bottom = posicao + 'px'
        }
      }, 20)
    } else {
      posicao += 20
      console.log(posicao + 'px')
      dino[0].style.bottom = posicao + 'px'
    }
  }, 20)
}


document.addEventListener('keyup', lidar)
