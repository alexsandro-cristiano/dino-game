const dino = document.getElementsByClassName('dino')
const elementBackground = document.querySelector('.background')

let pulando = false
let fimDeJogo = false
let posicao = 0

function lidar(event) {
  if (event.keyCode === 38 || event.keyCode === 32) {
    if (!pulando) {
      pular()
    }
  }
}

function pular() {
  pulando = true

  let paraCima = setInterval(() => {
    if (posicao > 150) {
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

function criarCactos() {
  const divCacto = document.createElement('div')
  divCacto.setAttribute('class', 'cacto')
  let cactoPosicao = 1000
  let tempoAleatorio = Math.random() * 6000
  
  if (fimDeJogo) return;
  
  divCacto.style.left = cactoPosicao + 'px'
  elementBackground.appendChild(divCacto)

  let intervaloCacto = setInterval(() => {
    if (cactoPosicao < -60) {
      // Saiu da tela
      clearInterval(intervaloCacto)
      background.removeChild(divCacto)
    } else if (cactoPosicao > 0 && cactoPosicao < 60 && posicao < 60) {
      // Game over
      clearInterval(intervaloCacto)
      fimDeJogo = true
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
    } else {
      cactoPosicao -= 7
      divCacto.style.left = cactoPosicao + 'px'
    }
  }, 20)

  setTimeout(criarCactos, tempoAleatorio)
}

criarCactos()
document.addEventListener('keyup', lidar)
