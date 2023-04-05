const precoEtano = 4.20;
const precoGasolina = 5.89;
const gastoPorKm = 10;
const distanciaKm = 450;
const tipoCombustivel = 'Etanol';

const consumoRealizado = distanciaKm / gastoPorKm

if (tipoCombustivel === 'Etanol') {
  const valorGasto = consumoRealizado * precoEtano;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = consumoRealizado * precoGasolina;
  console.log(valorGasto.toFixed(2));
}

