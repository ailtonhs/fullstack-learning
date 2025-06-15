# 🎨 Aula: Anatomia de uma Regra CSS
## 🎯 Objetivo
Entender a estrutura básica de uma regra CSS e como aplicar estilos a elementos HTML usando seletores, propriedades e valores.

## 🧱 Estrutura de uma Regra CSS
A regra CSS é composta por duas partes principais:
```css
seletor {
  propriedade: valor;
}
```
* Seletor: identifica qual elemento HTML será estilizado.

* Bloco de declaração: envolve as declarações de estilo com {}.

## 🔧 Declarações CSS
Dentro do bloco de declaração, temos:

* Propriedade: define o aspecto a ser estilizado (ex: color, background-color, font-size).

* Valor: define o comportamento da propriedade (ex: blue, purple, 16px).

* Cada declaração termina com ;.

### ✅ Exemplo:
```css
p {
  color: blue;
}
```
* p é o seletor (seleciona todos os parágrafos).

* color é a propriedade.

* blue é o valor da cor aplicada ao texto.

## 🧪 Seletores Múltiplos
Você pode aplicar o mesmo estilo a vários seletores separados por vírgula:

```css
#title,
.subheading {
  color: navy;
}
```
* #title → seletor de ID (usado uma vez por página).

* .subheading → seletor de classe (pode ser reutilizado em vários elementos).

* Ambos receberão a cor navy.


## 📚 Resumo

Termo                       | Função
----------------------------|------------------------
Seletor	                    | Define o alvo da regra (qual elemento será estilizado)
Propriedade	                | Especifica o aspecto a ser alterado (cor, tamanho, etc.)
Valor	                    | Informa como a propriedade será aplicada
Declaração	                | Combinação de propriedade e valor, separada por : e terminada com ;
Bloco de Declaração	        | Contém uma ou mais declarações, envoltas por {}


