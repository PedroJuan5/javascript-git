// Obtém os elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

//Botões
const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicação = document.getElementById("btnMultiplicação");
const btnDivisão = document.getElementById("btnDivisão");
//botão Resultado
const resultado = document.getElementById("resultado");


// Adiciona um evento de clique no botão 

btnSomar.addEventListener("click",function(){
    // converte os valores do input para numeros e somas
    let soma = Number(valor1.value) + Number(valor2.value);

    //Exibe o resultado na tela

    resultado.textContent = soma;

    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
        resultado.innerHTML = 0;
    }, 2000);
});
btnSubtrair.addEventListener("click",function(){
    let sub = Number(valor1.value)-Number(valor2.value);

    resultado.textContent = sub;
    valor1.value = "";
    valor2.value = "";

    setTimeout(function(){
        resultado.innerHTML = 0;
    }, 2000);
});
btnMultiplicação.addEventListener("click",function(){
    let mult = Number(valor1.value) * Number(valor2.value);

    resultado.textContent = mult;
    valor1.value = "";
    valor2.value = "";
    setTimeout(function(){
        resultado.innerHTML = 0;
    },2000 )
        
    });
    btnDivisão.addEventListener("click",function(){
        let div = Number(valor1.value) / Number(valor2.value);
    
        resultado.textContent = div;
        valor1.value = "";
        valor2.value = "";
        setTimeout(function(){
            resultado.innerHTML = 0;
        },2000 )
            
        });
    
