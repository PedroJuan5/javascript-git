console.log("Bem Vindo");
const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");
//criando uma funçaõ par criar o campo
function clearForm(){
    inputNota.value = "";
}

//criando uma função
button.addEventListener("click", function(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value;
    //console.log(inputNotaValue);

    //validação de formulario
if(inputNotaValue === ''){
   alert("campo obrigatorio");
    return false;

}

//logica
    if (inputNotaValue >=6){
        alert("aprovado");

    }else{
            alert("reprovado");

    }
//chamando função limpar campo
clearForm();

});

