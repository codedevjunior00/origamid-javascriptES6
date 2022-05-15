/**
 * Números
 */

var idade = 29;
var gols = 1000e-2;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

// precisão para até 15 digitos

console.log(idade);
console.log(gols);

/**
 * Operadores Aritméticos
 */

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 50; // 5000
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//Lembrando que soma + em String serve para concatenar

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

/**
 * Operadores Aritméticos (String)
 */

soma = "100" + 50;
subtracao = "100" - 50;
divisao = "comprei 10" / 2;

console.log(divisao);

//É possivel verificar se uma variavel é NaN ou não com a função isNan()

var testeNaN = "100" / 2;
console.log(isNaN(testeNaN));

/**
 * A Ordem Importa
 * Começa por multiplicação e divisão, depois por soma e subtração
 */

var total1 = 20 + 5 * 2;
var total2 = (20 + 5) * 2;
var total3 = (20 / 2) * 5;
var total4 = 10 + 10 * 2 + 20 / 2;

// Parênteses para priorizar uma expressão

console.log(total4);

/**
 * Operadores Aritméticos Unários
 */

var incremento = 5;
console.log(incremento++);
console.log(incremento);
var incremento2 = 5;
console.log(++incremento2);
console.log(incremento2);

// Mesma coisa para decremento --x

/**
 * Operadores Aritméticos Unários
 * O + e - tenta transformar o valor seguinte em número
 */

var frase4 = "Isso é um teste";
+frase4;
-frase4;

console.log(+frase4);

var idadeMinha = "29";
console.log(-idadeMinha);

var possuiFaculdade = true;
console.log(+possuiFaculdade);

// O - antes de um número torna ele negativo
