# 📘 O que é CSS e qual é seu papel na web

## 🧠 Conceito principal
CSS (Cascading Style Sheets) é a linguagem usada para aplicar estilo e aparência visual a documentos HTML. Ele separa a estrutura (HTML) da apresentação visual (CSS), facilitando a manutenção, organização e o design das páginas web.

## 🎨 Função do CSS no desenvolvimento web
* Separa conteúdo e visual: o HTML define o “o quê”, o CSS define o “como vai parecer”.

* Controla aparência visual: cores, fontes, tamanhos, margens, espaçamentos e layout.

* Design responsivo: adapta páginas para diferentes tamanhos de tela (PC, tablet, celular).

* Estilo em cascata: os estilos seguem uma hierarquia, podendo ser herdados ou sobrescritos.

* Folhas externas: estilos podem ser salvos em arquivos .css e usados por várias páginas HTML.

## 🏡 Analogia simples
HTML é a estrutura da casa (paredes, cômodos).
CSS é a decoração (cores, pintura, móveis) que torna o ambiente visualmente agradável.

## 🛠️ Exemplo básico de uso de CSS
### HTML (index.html):

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Minha Página Estilizada</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Bem-vindo!</h1>
  <p>Esta é minha primeira página com CSS.</p>
</body>
</html>
```
### CSS (style.css):
```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  color: #BF232E;
}

p {
  font-size: 18px;
  color: #333;
}
```

### 📱 Design Responsivo com CSS
```css
/* Aplica estilos diferentes em telas pequenas */
@media (max-width: 600px) {
  body {
    padding: 10px;
    background-color: #fffbe6;
  }

  h1 {
    font-size: 22px;
  }
}
```