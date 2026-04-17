import api from "./api.js";

const ui = {
    async renderizarPensamentos(){
        const listaPensamentos = document.querySelector("#mural_pensamentos_lista");
        
        try{
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(ui.adicionarPensamentoNaLista);
        }
        catch{
            alert("Erro ao buscar pensamentos");
        }
    },

    adicionarPensamentoNaLista(pensamento){
        const listaPensamentos = document.querySelector("#mural_pensamentos_lista");
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("mural_pensamentos_lista_item");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "./assets/aspas-azuis.png";
        iconeAspas.alt = "Imagem de aspas";
        iconeAspas.classList.add("mural_pensamentos_lista_item_aspas_img");

        const pensamentoConteudo = document.createElement("p");
        pensamentoConteudo.classList.add("mural_pensamentos_lista_item_descricao");
        pensamentoConteudo.textContent = pensamento.conteudo;

        const pensamentoAutoria = document.createElement("p");
        pensamentoAutoria.classList.add("mural_pensamentos_lista_item_autor");
        pensamentoAutoria.textContent = pensamento.autoria;

        const botoes = document.createElement("div");
        botoes.classList.add("mural_pensamentos_lista_item_botoes");

        const editarBtn = document.createElement("img");
        editarBtn.src = "./assets/icone-editar.png";
        editarBtn.alt = "Botão de editar";

        const excluirBtn = document.createElement("img");
        excluirBtn.src = "./assets/icone-excluir.png";
        excluirBtn.alt = "Botão de excluir";

        botoes.appendChild(editarBtn);
        botoes.appendChild(excluirBtn);

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(botoes);

        listaPensamentos.appendChild(li);

       

        

    }
}

export default ui;