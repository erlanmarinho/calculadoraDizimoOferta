

export function notANumber(value) {
  return isNaN(value) || value == ""
}

export function calculateDizimo(renda, dizimo) {
  return ((renda * dizimo) / 100).toFixed(2)
}

export function calculatePacto(renda, pacto) {
  return ((renda * pacto) / 100).toFixed(2)
}

export function calculateOferta(renda, oferta) {
  return ((renda * oferta) / 100).toFixed(2)
}

export function calculateSoma(dizimo, oferta, pacto) {
  let numberDizimo = parseInt(dizimo);
  let numberOferta = parseInt(oferta);
  let numberPacto = parseInt(pacto);
  
  return (numberDizimo + numberOferta + numberPacto).toFixed(2)
}

