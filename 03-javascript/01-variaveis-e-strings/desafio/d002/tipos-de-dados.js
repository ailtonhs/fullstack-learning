// 🧩 Desafio: Identificando Tipos de Dados

let numero = 10;
let texto = 'Olá, Mundo!';
let verdadeiro = true;
let indefinido;
let nulo = null;
let simbolo = Symbol('id')
let numeroGrande = 123394949948939300400n

const usuario = {
    nome: 'Ailton',
    idade: 32,
    estudante: true
};

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof verdadeiro);
console.log(typeof indefinido);
console.log(typeof nulo); // 'object' (isso é um bug histórico do JavaScript)
console.log(typeof simbolo);
console.log(typeof numeroGrande);
console.log(typeof usuario);


/*
Responda nos comentários do código:

1 - Qual a diferença entre undefined e null?
    
undefined representa uma variável que foi declarada, mas ainda não recebeu um valor.
Já null é atribuído intencionalmente para indicar a ausência de valor.

2 - O que acontece quando você compara dois Symbol() com o mesmo valor de descrição?

Symbol representa um valor único e imutável — mesmo que dois símbolos tenham a mesma descrição, eles nunca serão iguais.

const simbolo1 = Symbol('id');
const simbolo2 = Symbol('id');
console.log(simbolo1 === simbolo2); // false


3 - Por que o BigInt precisa da letra n no final?

BigInt é usado para representar números muito grandes, que excedem o limite do tipo Number.
A letra n no final indica que o valor é do tipo BigInt.
 */



