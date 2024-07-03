//Obtém o elemento do DOM com o ID 'idNome'
let nome = document.getElementById("idNome");
let city = document.getElementById("idCity");

function mudar(event) {
   // previne o coportamento padrão do evento, como o envio de um formulario
   event.preventDefault();


   document.getElementById("titulo").innerHTML = nome.value;
   document.getElementById("titulo2").innerHTML = city.value;

   nome.value = '';
   city.value = '';



}