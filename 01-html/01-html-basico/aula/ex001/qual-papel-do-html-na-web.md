# 📚 O que é HTML e seu papel na web

## Conceito principal

HTML (HyperText Markup Language) é a linguagem padrão de marcação para construir páginas na web. Ela define a estrutura do conteúdo, como títulos, parágrafos, links, imagens e outros elementos.

### Função no desenvolvimento web

* Estruturação de conteúdo: HTML cria blocos como &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;.

* Semântica: elementos com significados (ex: &lt;article&gt;, &lt;aside&gt;, &lt;section&gt;) ajudam navegação e acessibilidade.

* Base para outras tecnologias: CSS estiliza e JavaScript torna interativo.


## 💡 Principais elementos do HTML (traduzidos)
```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>Minha Página</title>
</head>
<body>
  <header>
    <h1>Bem-vindo!</h1>
    <nav>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <main>
    <section id="sobre">
      <h2>Sobre mim</h2>
      <p>Texto explicando quem você é...</p>
    </section>

    <aside>
      <h3>Links úteis</h3>
      <ul>
        <li><a href="https://freecodecamp.org">freeCodeCamp</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>© 2025 Meu Site.</p>
  </footer>
</body>
</html>
```

* &lt;!DOCTYPE html&gt;: declara documento HTML5.

* &lt;html lang="pt"&gt;: define idioma do conteúdo.

* &lt;head&gt;: metadados (charset, título, links).

* &lt;body&gt;: conteúdo visível.

* Elementos semânticos (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, etc.) organizam e dão significado ao documento.
