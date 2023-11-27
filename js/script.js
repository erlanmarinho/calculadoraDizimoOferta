
import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateDizimo, notANumber, calculatePacto } from "./utils.js"


// variaveis - variebles
const form = document.querySelector('form')
const inputRenda = document.querySelector('#renda')
//const inputDizimo = document.querySelector('#dizimo')
const inputPacto = document.querySelector('#pacto')
const inputOferta = document.querySelector('#oferta')

console.log(inputOferta)

inputPacto.oninput = () => AlertError.close()
inputOferta.oninput = () => AlertError.close()


form.onsubmit = event => {
  event.preventDefault()

  const renda = inputRenda.value
  const dizimo = 10
  const pacto = inputPacto.value
  const oferta = inputOferta.value 
  console.log(oferta)

  const weightOrHeightIsNotAnumber = notANumber(renda) || notANumber(dizimo) || notANumber(pacto) || notANumber(oferta)

  

  if (weightOrHeightIsNotAnumber) {
    AlertError.open()
    return;
  }else {
    0
  }

  AlertError.close()


  const result = calculateDizimo(renda, dizimo)
  const resultPacto = calculatePacto(renda, pacto)
  const resultOferta = calculatePacto(renda, oferta)
  displayResultMessage(result, resultPacto, resultOferta)
}

function displayResultMessage(result, resultPacto, resultOferta) { 
  const message = `Dizimo: R$ ${result}
                   Pacto:  R$ ${resultPacto}
                   Oferta: R$ ${resultOferta}`

  Modal.message.innerText = message
  Modal.open()
}




