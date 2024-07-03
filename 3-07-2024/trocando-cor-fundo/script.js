// obtém os butões do DOM
let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

//Adiciona um evento de clique ao botão 'mudar cor de fundo'
btnMudarCor.addEventListener("click", function(){
    document.body.style.background = "#B22222";
})

//adiciona um evento de clique no botão 'voltar cor normal'
btnVoltarCor.addEventListener("click",function(){
    document.body.style.background = "#8B795E";
})
