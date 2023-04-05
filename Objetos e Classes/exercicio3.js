// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoas {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc(){
    return this.peso / (this.altura * this.altura);
  }

  classificarImc(){
    const Imc = this.calcularImc();
    
    if(Imc < 18.5){
      return 'Abaixo do peso';
    }else if (Imc >= 18.5 && Imc <= 25) {
      return 'Peso Normal';
    }else if (Imc > 25 && Imc <= 30){
      return 'Acima do peso';
    }else if (Imc > 30 && Imc <= 40){
      return 'Obesidade';
    }else {
      return 'Obesidade Grave';
    }
  }
}

const jose = new Pessoas('Jose', 70, 1.75);
console.log(jose.classificarImc());

const alexandre = new Pessoas('Alexandre', 82, 1.69);
console.log(alexandre.classificarImc());
