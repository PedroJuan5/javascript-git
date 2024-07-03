//obtém o botão e a imagem do DOM
let btnMoverImagem =document.getElementById("btnMoverImagem");
let imagem = document.getElementById("imagem");

//variavel para rastrear o estado atual da posição da imagem 
let isMoved = false;



//Adiciona um evento de clique ao botão
btnMoverImagem.addEventListener("click",function(){
    if(isMoved) {
        imagem.style.left = "0"; //move a imagem para a posição original
        
    }else{
        imagem.style.left = "500px"; //move a imagem para a direita
    }
    //alterna o estado da posição da imagem
     isMoved = !isMoved;
});



