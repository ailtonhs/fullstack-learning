# 🧠 Tipos de Dados em JavaScript
## 🎯 Objetivo
Compreender o que são tipos de dados em JavaScript e conhecer os principais tipos primitivos e estruturados disponíveis na linguagem.

## 🔍 O que é um tipo de dado?
Em JavaScript, um tipo de dado é a categoria que define a natureza do valor armazenado em uma variável.

* Uma variável é como um contêiner nomeado que armazena valores.

Os tipos de dados permitem que o JavaScript saiba como tratar os valores, seja um número, texto, valor lógico ou estrutura mais complexa.


## 📦 Tipos de Dados Primitivos

### 1. Number

* Números inteiros ou decimais (ponto flutuante).

Exemplo:
```javascript
let idade = 30;
let pi = 3.14;
```

### 2. String
* Cadeia de caracteres (texto).

* Pode ser escrita com aspas simples ', duplas " ou crase `.

Exemplo:
```javascript
let nome = "JavaScript";
let saudacao = 'Olá!';
```
### 3. Boolean
* Representa valores lógicos: true ou false.

Exemplo:
```javascirpt
let logado = true;
let carregando = false;
```

### 4. Undefined
* Valor padrão de uma variável declarada mas não inicializada.

Exemplo:
```Javascript
let x;
console.log(x); // undefined
```

### 5. null

* Representa a ausência intencional de valor.

Exemplo:
```javascript
let resposta = null;
```

### 6. Symbol

* Um valor único e imutável, usado como identificador exclusivo.

Exemplo:
```javascript
const simbolo1 = Symbol('id');
const simbolo2 = Symbol('id');
console.log(simbolo1 === simbolo2); // false
```

### 7. BigInt

* Usado para números muito grandes que não cabem no tipo Number.

Exemplo:
```javascript
const numeroGigante = 123456789012345678901234567890n;
```

## 🧱 Tipo de Dado Estruturado
### 8. Object

* Coleção de pares chave: valor.

* Pode armazenar vários tipos de dados.

Exemplo: 
```javascript
let livro = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  ano: 1943
};
```

## 📚 Resumo dos tipos

Tipo                     | Exemplo
-------------------------|--------------------
Number                   | 10, 3.14
String                   | "Olá", 'Mundo'
Boolean                  | true, false
Undefined                | variável sem valor inicial
Null                     | ausência proposital de valor
Symbol                   | Symbol('id)
BigInt                   | 123456789084884758n
Object                   | {nome: "João", idade: 25}

