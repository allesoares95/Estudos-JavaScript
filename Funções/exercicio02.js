function escrevaNome(nome) {
  return 'Meu nome é ' + nome 
}

escrevaNome('Alexandre');

function verificarIdade(idade) {
  if(idade >= 18){
    console.log(escrevaNome('Alexandre') + ' sou maior de idade ');
  }else {
    console.log('Menor de idade');
  };
}

verificarIdade(28);