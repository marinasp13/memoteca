import api from "./api.js";

const ui = {
    async renderizarPensamentos(){
        const listaPensamentos = document.querySelector("#mural_pensamentos_lista");
        
        try{
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach((pensamento) => {
                listaPensamentos.innerHTML += `
                <li class="mural_pensamentos_lista_item" data-id="${pensamento.id}>
                    <img class="mural_pensamentos_lista_item_aspas_img" src="./assets/aspas-azuis.png" alt="Imagem de aspas">
                    <p class="mural_pensamentos_lista_item_descricao">${pensamento.conteudo}</p>
                    <p class="mural_pensamentos_lista_item_autor">${pensamento.autoria}</p>
                    <div class="mural_pensamentos_lista_item_botoes">
                        <img class="mural_pensamentos_lista_item_botoes_btn editar_btn" src="./assets/icone-editar.png" alt="Botão de editar">
                        <img class="mural_pensamentos_lista_item_botoes_btn excluir_btn" src="./assets/icone-excluir.png" alt="Botão de excluir">
                    </div>
                </li>
                `
            })
        }
        catch{

        }
    }
}

export default ui;