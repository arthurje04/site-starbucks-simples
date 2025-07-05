let circulo = document.querySelector(".circulo")
let imagemcopao = document.querySelector(".copo")

function trocarcor(cor) {
    circulo.style.background = cor
}

function trocarimagem(caminho) {
    imagemcopao.src = caminho
}