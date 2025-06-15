#  Aula: Atributos HTML

## 🎯 Objetivo

Compreender o que são atributos HTML, sua sintaxe e alguns exemplos práticos.

## 🔤 O que são atributos?
Um atributo é um valor inserido na tag de abertura de um elemento HTML. Ele fornece informações adicionais sobre o elemento ou define comportamentos específicos.

### 📌 Sintaxe:
```html
<elemento atributo="valor"></elemento>
```
* O nome do atributo é seguido por um =

* O valor vem entre aspas ("), podendo ser uma string ou número, dependendo do atributo.

## 🧪 Exemplos de atributos comuns:
### 1. href — usado em links:

```html
<a href="https://www.example-website.com">Visite nosso site</a>
```
* O atributo href define o destino do link.

* Sem ele, o link não funciona.

### 2. src e alt — usados em imagens:
```html
<img src="imagem.jpg" alt="Descrição da imagem" />
```
* src: caminho da imagem.

* alt: descrição alternativa (importante para acessibilidade).

### 3. type e checked — usados em campos de formulário:

* type="checkbox": define o tipo da entrada.

* checked: define que a caixa vem marcada por padrão.

📌 O atributo checked é um exemplo de atributo booleano:

* Booleanos são atributos que não precisam de valor.

* Se presentes, são considerados "verdadeiros".

* Exemplos: checked, disabled, readonly, required.


## ♿ Acessibilidade e Atributos

Alguns atributos são importantes para garantir que todos os usuários, inclusive os com deficiência, consigam navegar e entender a página. Exemplo: alt, aria-*, role, etc.

## 📎 Conclusão
* Atributos são fundamentais no HTML.

* Aprender a usá-los corretamente melhora a funcionalidade, acessibilidade e interatividade do seu site.

* Nas próximas aulas, veremos mais atributos e como usá-los em formulários e elementos interativos.

