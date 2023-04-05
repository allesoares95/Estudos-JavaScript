const precoCombustivel = 5.89;
const valorMedioGastoKm = 9.80;
const distanciaKm = 450;

const consumoRealizadoViagem = distanciaKm / valorMedioGastoKm;
const valorGastoViagem = consumoRealizadoViagem * precoCombustivel;

console.log(valorGastoViagem.toFixed(2));