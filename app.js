function pesquisar() {
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Pesquise pelas Psis Daiane ou Ana</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    for (let dado of psis) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) ){
            resultados += ` <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Conhecer a Psi</a>
        </div>`
        }       
    }
    
if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

    section.innerHTML = resultados
} 

