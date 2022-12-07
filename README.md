# Funções no AluraFlix (Aluraflix - dia 5)

### Screenshot

![Screenshot](screenshot.png)

https://imersao.dev/aulas/aula05-funcoes-aluraflix

### Conteúdo detalhado desta aula:

- Sintaxe e criação de funções no JavaScript;
- Integrando funções criadas no JavaScript com o HTML que está sendo exibido na tela;
- Condicionando a execução (ou "chamada") de uma função a um clique em um botão na tela;
- Usando o JavaScript para acessar o que está sendo exibido na tela e pegar valores digitados pelo usuário com getElementById() e .value;
- Passar informações que as funções precisam para funcionar, através dos parâmetros;
- Utilizar o .endsWith() para verificar se um texto termina com determinados caracteres;
- Ver mais um exemplo de reatribuição de variável para "limpar" o texto do campo com "".

### Desafios desta aula!

- [x] Criar um botão para remover um filme na tela;
```html
<div 
  class="cover"
  onmouseover="querySelector('.remove').style.display = 'flex'"
  onmouseout="querySelector('.remove').style.display = 'none'"
  >
  <img src="${url}" class="capa">
  <br>
  <div class="nomeFilme">
    <p>${nome}</p>
  </div>
  <div 
  class="remove" 
  onclick="this.parentElement.remove()"
  onmouseover="this.parentElement.querySelector('.capa').style.opacity = '0.3'"
  onmouseout="this.parentElement.querySelector('.capa').style.opacity = '1'"
  >
  X</div>
</div>
```

- [x] Além de colocar a imagem do filme, também adicionar o nome por meio de outro input;
```html
<input type="text" id="nome" name="nome" placeholder="Insira o nome do filme" required>
```

- [x] Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme;
```js
filmes.push([nome, url]);
```

- [ ] Conversor de moedas: criar funções para cada tipo de conversão e chamá-las dependendo do que você quiser fazer, podendo colocar inputs ou botões e quando clicar chamar cada função converteDolar(), converteReal(), converteEuro() e converteBitcoin(), por exemplo.

A [Pen](https://codepen.io/rhatiro/pen/YzLZmXx) by [rhatiro](https://codepen.io/rhatiro) on [CodePen](https://codepen.io).

[License](https://codepen.io/license/pen/YzLZmXx).
