var filmes = [];

function adicionarFilme() {
  var nome = document.getElementById("nome").value;
  var url = document.getElementById("filme").value;

  if (
    !filmes.some((x) => x.includes(url)) &&
    !filmes.some((x) => x.includes(nome))
  ) {
    if (url.endsWith(".jpg") || url.endsWith(".png")) {
      filmes.push([nome, url]);
      document.getElementById("listaFilmes").innerHTML += `
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
        `;
    } else {
      alert("Adicione a url da imagem com extensão .jpg ou .png");
    }
  } else {
    alert("Este endereço já foi adicionado");
  }

  document.getElementById("nome").value = "";
  document.getElementById("filme").value = "";

  // console.log(filmes.length);
  event.preventDefault();
}
