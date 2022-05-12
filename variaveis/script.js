/**
 * Responsvel por guardar dados na memoria.
 * Inicia com a palavra var, let ou const.
 */

var nome = "Vilson";
var idade = 29;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

/**
 * Evitam repetição
 * DRY (Don't repeat yourself)
 */

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal);

/**
 * Palavra chave var seguida do nome, sinal de igual e o valor.
 */

/**
 * Utilize a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
 */

var nome = "Pedro",
  idade = 27;
console.log(nome, idade);

/**
 * Pode declarar ela e não atribuir valor inicialmente.
 */

var valorAplicativo;
//retorna undefined
console.log(valorAplicativo);

/**
 * - Os nomes podem iniciar com $, _, ou letras. (pode conter numeros mas não iniciar com ele)
 * - Case sensitive. (nome é diferente de Nome)
 * - Não utilizar palavras reservadas. (ex: this, var, let, const, class, abstract, break, continue, byte, case, catch, else, default, export, float, etc...)
 * - Camel case. (É comum nomearmos assim: abrirModal)
 */

//Ex: invalidos

/*
var &nome;
var function;
var 1possuiFaculdade;
*/

//Ex: validos

var $nomeCompletos;
var _nome;
var possuiFaculdadeNoExterior;

/**
 * Declarar
 * Erro ao tentar utilizar uma variavel que não foi declarada.
 */
//console.log(sobrenome);
//sobrenome is not defined

/**
 * Hoisting
 * São movidas para cima do código, porem o valor atribuido não é movido.
 */

console.log(carro);
var carro = "Fusca";
//retorna undefined

var profissao = "Designer";
console.log(profissao);
// retorna Designer

var comida;
console.log(comida);
comida = "Macarrão";
console.log(comida);

/**
 * Mudar o valor atribuido
 * É possivel mudar os valores atribuidos a variaveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const.
 */

var cargo = "Oficial Eletricista";
console.log(cargo);

cargo = "Encarregado";
console.log(cargo);

const pi = 3.1415;
console.log(pi);

/*
pi = 14.14;
console.log(pi);
*/

// ----------------- Exercios -------------------------//

// Declarar uma variavel com o seu nome

var meuNome = "Vilson Junior";
console.log(meuNome);

// Declarar uma variavel com sua idade

var idadeMinha = 29;
console.log(idadeMinha);

// Declarar uma variavel com a sua comida
// favorita e não atribuir valor

var comidaFavorita;
console.log(comidaFavorita);

// Atribuir valor a sua comida favorita

comidaFavorita = "Macarronada";
console.log(comidaFavorita);

// Declarar 5 variaveis diferentes sem valores

var salario, periculosidade, adicional15Porcento, fgts, inss;
console.log(salario, periculosidade, adicional15Porcento, fgts, inss);
