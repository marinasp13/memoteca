import ui from "./ui.js"
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const formularioPensamento = document.getElementById("form_adicionar_pensamento");
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
})

async function manipularSubmissaoFormulario(event){
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value;
    const conteudo = document.getElementById("pensamento_descricao").value;
    const autoria = document.getElementById("pensamento_autor").value;

    try{
        await api.salvarPensamento({conteudo, autoria})
        ui.renderizarPensamentos()
    }
    catch{
        alert("Erro ao salvar pensamento");
    }

}