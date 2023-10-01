const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
botao.addEventListener("click", () => {

    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");

    // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");

    //passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    personagens[indice].classList.add("selecionado");
})
})