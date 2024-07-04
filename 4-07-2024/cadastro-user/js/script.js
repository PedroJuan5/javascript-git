let form = document.querySelector("#cadastroForm");
let cadastroList = document.querySelector("#cadastroList");
//obtém os valores do campos de entrada 
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let cidade = document.querySelector("#cidade");
//adiciona um evento de formulario
//submit

form.addEventListener("submit", function(event){
    
    //ptevine o comportamentto padrão
    event.preventDefault();
    
   //cria um novo intem de lista com os valores
   let listItem = document.createElement("li");
   listItem.innerHTML = `<strong>Nome:</strong> ${nome.value}<br><strong>Email:</strong> ${email.value}<br><strong>Cidade:</strong> $`;

   //Adiciona o novo item na lista
   cadastroList.appendChild(listItem);

   //   Limpa os campos de entrada
   form.reset();


})