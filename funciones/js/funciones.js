// alert("Success")

/**
 * FUNCIONES - DECLARACION
 * 
 * palabra reservada
 * nombre - camelCase
 * parametros
 * llave de inicio y fin del bloque
 * 
 */

//EJEMPLO DE FUNCION QUE NO DEVUELVE NINGUN VALOR
function nuevaFuncion (){
    console.log("Nueva función");
}

/**Declarar una funcion que calcule
 * el perimetro de un cuadrado
 * 
 * 1 de sus lados
 * 
 * Expresion matematica que resuelve
 * p = l+l+l+l
 * p = l*4
 * lado
 * 
 * AGREGAR MENSAJES PARA LA TERMINAL
 * 
 * Se pueden concatenar mensajes para que estos
 * nos permitan ver un resultado
 * 
 */

// function calcularPerimetroCuadrado(lado){
//     //Codigo que se va a ejecutar
//     let perimetro = lado*4
//     // return perimetro; 
//     console.log("El perimetro calculado es de : " + perimetro + " metros");
// }

// calcularPerimetroCuadrado(5);

/**
 * Agregar mensajes para la terminal
 * 
 * Se pueden concatenar mensajes para que estos
 * nos permitan ver un resultado mas explicito
 * de lo que trabaja nuestra funcion ya sea con 
 * los simbolos "" o ''
 * 
 * Otra forma de hacer esto es con backtics ``
 *  para colocar el valor que se debe mostrar
 * colocamos ${valor}
 */

function calcularPerimetroCuadrado(lado){
    //Codigo que se va a ejecutar
    // let perimetro = lado*4
    let perimetro = lado*4
    // return perimetro; 
    console.log(`El perimetro calculado es de: ${perimetro} metros`);
}

/**FUNCION para saludar a distintas personas
 * 
 * Como parametro vamos a recibir un nombre
 * en forma de string
 */

function saludarPersonas(nombre){
    return "Hola " + nombre.toUpperCase();
    // console.log("Hola " + nombre)
}

/**FUNCIONES FLECHA
 * 
 * palabra reservada const
 * nombre
 * operador de asignacion '='
 *  () representan parametros
 * =>
 */

//DECLARACION GENERAL de una funcion flecha
const nuevaFuncionFlecha = (parametros) => console.log("Hola " + parametros);

//CALCULAR el perimetro de un cuadrado en una funcion flecha
const perimetroFlecha = (lado) => perimetro = lado*4;
