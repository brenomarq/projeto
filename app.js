function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  let resultados = "";
  let titulo = "";
  let descricao = "";

  if (!campoPesquisa) {
    section.innerHTML = `
        <p>Nada foi encontrado. Você precisa
        digitar o título de um livro.</p>
    `;

    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  for (let livro of livros) {
    titulo = livro.titulo.toLowerCase();
    descricao = livro.descricao.toLowerCase();
    tags = livro.tags.toLowerCase();

    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${livro.titulo}</a>
            </h2>
            <p class="descricao-meta">${livro.descricao}</p>
            <a
                href=${livro.link}
                target="_blank"
                >Saber mais</a
            >
        </div>
        `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  section.innerHTML = resultados;
}
