

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

