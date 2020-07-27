var pesoUsuario = prompt("cual es tu peso")
var planet = parseInt (prompt("Elige un planeta. Es marte y 2 es jupiter"))

var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso = parseInt(pesoUsuario);
var peso_final;


if(planet === 1){
    peso_final = peso * g_marte / g_tierra;
    planetinsky = "marte";
}else if(planet ===2){
    peso_final = peso * g_jupiter / g_tierra;
    planetinsky = "jupiter"

}else{
    peso_final = 100000000;
    planetinsky = "seas mamon "
}

peso_final = peso * g_marte / g_tierra;
peso_final = parseInt(peso_final);
document.write(`tu peso final en ${planetinsky}  es ${peso_final} kilos`)