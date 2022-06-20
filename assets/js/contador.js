var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

var botao_aumentar = document.getElementById('aumentar')
var botao_reduzir = document.getElementById('reduzir')

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}

document.addEventListener('click', function () {
  document.getElementById('mensagem').innerHTML =
    'Obrigada por sua participação :)'
})
