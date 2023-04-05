// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carros {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm
  }

  calcularGastoDoPercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }
}

const BMW = new Carros('BMW', 'preto', 1/7.5);
console.log(BMW.calcularGastoDoPercurso(40, 5));

const Corolla = new Carros('Corolla', 'prata', 1/11);
console.log(Corolla.calcularGastoDoPercurso(40, 5));
