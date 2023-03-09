// solicita ao usuário um número
const numero = parseInt(prompt("Informe um número"));

// inicializa as variáveis da sequência de Fibonacci
let primeiro = 0;
let segundo = 1;

// verifica se o número informado pertence à sequência
let pertence = false;

// calcula a sequência de Fibonacci
while (segundo <= numero) {
  // se o número informado é igual a algum termo da sequência, ele pertence à sequência
  if (numero === primeiro || numero === segundo) {
    pertence = true;
    break;
  }

  // calcula o próximo número na sequência de Fibonacci
  const proximo = primeiro + segundo;

  // atualiza os valores dos termos anteriores
  primeiro = segundo;
  segundo = proximo;
}

// exibe uma mensagem informando se o número pertence ou não à sequência
if (pertence) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}