/**
 * Boolean
 * Existem dois valores booleanos false ou true
 */

var possuiGraduacao = true;
var possuiDoutorado = true;

/**
 * Condicionais If e Else
 * Verificar se uma expressão é verdadeiro com if. caso contrário o else será ativado
 */

if (possuiGraduacao) {
  console.log("Possui graduação");
  var x = 10;
} else {
  console.log("Não possui graduação");
}

console.log(x);

/**
 * Condicionais Else If
 * Se o if não for verdadeiro, ele testa o else if
 */

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui Graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

/**
 * Truthy e Falsy
 * Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
 */

var nome = "";

if (nome) {
  console.log("Tem um nome");
} else {
  console.log("Não existe um nome");
}

/**
 * Falsy
 *
 * if(false)
 * if(0)
 * if(NaN)
 * if(null)
 * if(undefined)
 * if('') ou "" ou ``
 */
// todos o resto é Truthy

/**
 * Truthy
 *
 * if(true)
 * if(1)
 * if(' ')
 * if('Vilson')
 * if(-5)
 * if({})
 */

/**
 * Operador Lógico de Negação
 * O operador !, nega uma operação booleana. Ou seja, !true é igual a false
 */

var negar = true;

if (!negar) {
  console.log("Falso");
} else {
  console.log("Verdadeiro");
}
// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

/**
 * Operadores de Comparação
 * Vão sempre retornar um valor booleano
 */

var n = 10 < 5; // true

//ex:
// x < y
// x <= y
// x >= y

if (!n) {
  console.log("N - É maior");
} else {
  console.log("N - É menor");
}

/**
 * Operadores de Comparação
 * O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja o tipo de dado deve ser o mesmo usandos o ===
 */

var x = 10 === "10";

if (x) {
  console.log('X é igual a "10"');
} else {
  console.log('X é diferente de "10" porque são tipos de dados diferente');
}

/**
 * Operadores Lógicos &&
 * && Compara se um expressão e a outra é verdadeira
 */

var item1 = "Macarrão";
var item2 = "Feijãos";

if (item1 == "Macarrão" && item2 == "Feijão") {
  console.log(`Item1: ${item1} é verdadeiro e Item2: ${item2} é verdadeiro`);
} else {
  console.log("Um deles é falso");
}

/**
 * Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
 */

/**
 * Operadores Lógicos ||
 * || Compara se um expressão ou a outra é verdadeira
 */

var condicicao1 = false;
var condicicao2 = false;

if (condicicao1 || condicicao2) {
  console.log("O primeiro se for true");
} else {
  console.log("Se for os dois falso retorna false");
}

/**
 * Switch
 * Com o switch você pode verificar se uma variave é igual a diferentes valores utilizando o case. Caso ela seja , você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação.  valor de default ocorrerá caso nenhuma das anteriores seja verdadeira
 */

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Azul");
    break;
  case "Preto":
    console.log("Preto");
    break;
  case "Amarelo":
    console.log("Amarelo");
    break;
  default:
    console.log("Nenhuma");
}
