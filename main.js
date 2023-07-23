// FUNCIONES

function sumar(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function resta(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

function dividir(num1, num2){
    let resultado = num1 / num2;
    return resultado;
}

function impuestos(num1){
    let resultado = num1 * 1.21;
    return resultado;
}

function precioRemera(){
    return 3000;
}

function envioZonaNorte(){
    return 2000;
}
function envioZonaSur(){
    return 0;
}

function envioZonaOeste(){
    return 1500;
}

function envioZonaCapital(){
    return 1750;
}

function envioSegunZona(zona, precio){
    // sirve para saber el precio de envio de cada zona, sino tira error
    switch(zona){
        case "Norte":
            return precio + envioZonaNorte();
            break;
        case "Oeste":
            return precio + envioZonaOeste();
            break;
        case "Capital":
            return precio + envioZonaCapital();
            break;
        case "Sur":
            return precio + envioZonaSur() + " (Envio Gratis)";
            break;
        default:
            return "ERROR";
            break;
    }
}

function siEdad(edad){
    if(edad >= 18){
        pais = prompt("¿A que país perteneces?");
    } else {
        alert("Puedes pasar, pero bajo la supervicion de un adulto");
        pais = prompt("¿A que país perteneces?");
    }
}

function siEsArgentina(){
    //sirve para saber si el comprador es de argentina, si no lo es lo deja solo mirar la web.
    if (pais === "argentina" || pais === "Argentina" || pais === "ARGENTINA"){
        etiquetarSi()
    } else {
        alert("Lo sentimos, no tenemos servicio en ese país, pero puedes disfrutar de nuestras geniales remeras");  
    }
    
}

function saberZona(zona){
    //sirve para saber si la zona elegida pertenece al sistema de delivery
    if (zona === "Norte" || zona === "Sur" || zona === "Oeste" || zona === "Capital"){
        return true;
    } else {
        return false;
    }
}

function etiquetarSi(){
    // sirve para empezar el proceso de tickeo de las remeras, sino advierte que no se llega a la zona de delivery
    zona = prompt("¿A que zona de Buenos Aires perteneces? (ej: Sur, Norte, Oeste, Capital - Primera letra en Mayuscula)");
    if (saberZona(zona)) {
        procesoEtiquetado();
    } else {
        alert("Lo sentimos, todavía no llegamos a tu zona"); 
    }
}

function armarListaRemeras(cantidadRemeras){
    // multiplica, y pone en una lista los detalles de la compra    
    
    let listaDePrecios= "";
        
    for (let i = 1; i <= cantidadRemeras; i++){
            
        listaDePrecios += (`Remera ${i} x ${precioRemera()}`) + "\n";
    }    
    return listaDePrecios;
}


function procesoEtiquetado(){
    // funcion que hace el proceso de tickeado
    let cantidadRemeras = parseInt(prompt("Ingrese la cantidad de remeras a comprar"));
    let listaDeRemeras = armarListaRemeras(cantidadRemeras);
    let precioPorCantidad = multiplicar(cantidadRemeras, precioRemera());
    let precioConImpuesto = impuestos(precioPorCantidad);
    let precioImpuesto = resta(precioConImpuesto,precioPorCantidad);
    let total = envioSegunZona (zona, precioConImpuesto);
    
    alert (`${nombre}, te dejamos los detalles de tu compra: \n\n${listaDeRemeras} \nTotal: $${precioPorCantidad} \nImpuestos: $${precioImpuesto} \nTotal con impuestos: $${precioConImpuesto} \nEnvio: $${envioSegunZona(zona,0)} \n\nPrecio Final: $${total}`)

    alert( "Gracias por comprar en Reiwa Style")
}

// PROMPT

alert("HOLA! Bienvenido a Reiwa Style, Ecommerce de Remeras")

let pais = "";
let zona = "";

let nombre = prompt("Por favor ingrese su nombre");
let edad = parseInt(prompt("Por favor ingrese su edad"));

siEdad(edad);
siEsArgentina();















