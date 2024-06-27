const hora = 14
const isbomDia =hora >= 6 && hora <12;
const isboaTarde = hora >=12 && hora < 18;

if(isbomDia){
    console.log("Bom Dia!");

}else if (isboaTarde){
    console.log("Boa Tarde");

}else{
    console.log("Boa Noite");

}
