const nomes = ['João Grilo','Chicó','Rosinha'];

let htmlTemplate = '';

for(let i = 0; i < nomes.length; i++){
    htmlTemplate += `<li>${nomes[i]}</li>`;
}
console.log(htmlTemplate);