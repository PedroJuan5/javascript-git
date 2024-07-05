const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

//exemplo de includes
const calssListArray = ["teste","oi"];
console.log(calssListArray.includes("teste"));



button.addEventListener("click", function(){
    popup.classList.add("d-block");
});


popup.addEventListener("click", function(event){
    const classLisClick = event.target.classList[0];
    const classNameArray = ["popup-close", "popup-link", "popup-wrapper"];
    
    if(classNameArray.includes(classLisClick)) {
      popup.classList.remove('d-block');
    }
    
});