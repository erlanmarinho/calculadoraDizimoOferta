
import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateDizimo, notANumber, calculatePacto, calculateOferta, calculateSoma } from "./utils.js"

console.log(calculateSoma())
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
  let novaRenda = renda.replace(/[,\.]/g, function (match) {
    return match === "," ? "." : ","
  })
  const dizimo = 10
  const pacto = inputPacto.value
  const oferta = inputOferta.value 
  console.log(oferta)

  const weightOrHeightIsNotAnumber = notANumber(novaRenda) || notANumber(dizimo) || notANumber(pacto) || notANumber(oferta)

  

  if (weightOrHeightIsNotAnumber) {
    AlertError.open()
    return;
  }

  AlertError.close()


  const result = calculateDizimo(novaRenda, dizimo)
  const resultPacto = calculatePacto(novaRenda, pacto)
  const resultOferta = calculateOferta(novaRenda, oferta)
 

  let numberDizimo = parseFloat(result);
  let numberOferta = parseFloat(resultPacto);
  let numberPacto = parseFloat(resultOferta);
  
  let soma = (numberDizimo + numberOferta + numberPacto).toFixed(2)
  displayResultMessage(result, resultPacto, resultOferta, soma)
  
}

function displayResultMessage(result, resultPacto, resultOferta, soma) { 
  const message = `Dizimo: R$ ${result}
                   Pacto:  R$ ${resultPacto}
                   Oferta: R$ ${resultOferta}
                   Total: R$ ${soma}`

  Modal.message.innerText = message
  Modal.open()
}




