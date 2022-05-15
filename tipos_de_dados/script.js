/**
 * 7 Tipos de Dados
 *  Todos são primitivos exceto os objetos
 */

var nome = "Vilson"; // String
var idade = 29; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

// Primitivos são dados imutaveis.

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof possuiFaculdade);
console.log(typeof comida);
console.log(typeof simbolo);

/**
 * String
 * Você pode somar uma string e assim concatenar as palavras
 */

var sobrenome = "Jesuino";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romario fez " + gols + " gols";
console.log(typeof frase);

var ano = 2022;
var mes = 8;
console.log(ano + mes);

var melhor = "Teste";
var frase1 = "Esse é o " + melhor + " jogo";
console.log(frase1);

/**
 * Template String
 */

var pontos = 1000;
var resultado = `${nome} fez ${pontos} pontos em uma semana de competição`;

console.log(resultado);

var qtdProdutos = 100;
var precoUnidade = 14.52;
var totalPreco = qtdProdutos * precoUnidade;

var frase3 = `Quantidade: ${qtdProdutos} \nPreço Unitario: ${precoUnidade}`;
console.log(frase3 + "\n" + totalPreco);
