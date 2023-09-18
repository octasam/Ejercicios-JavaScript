/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

//PERIMETRO CIRCULO


function perimetroCirculo(diametro){
    let perimetroC = Math.PI*diametro
    // return perimetro; 
    console.log(`El perimetro calculado es de: ${perimetroC} centimetros`);
}

const nPerimetroCirculo = (diametro) => perimetroCirculo = Math.PI*diametro;

//AREA RECTANGULO

function areaRec(base,altura){
    let areaR = base*altura
    console.log(`El area del rectangulo es de: ${areaR} centimetros cuadrados`);
}

const nAreaRec = (base,altura) => areaR = base*altura;

//CUADRADO NUMERO

function cuadradoN(n){
    let cuadradoN = Math.pow(n,2)
    console.log(`El cuadrado del numero ${n} es igual a = ${cuadradoN}`);
}

const nCuadradoN = (n) => cuadradoN = Math.pow(n,2);

//CELSIUS A FARENHEIT

function celsiusToF(c){
    let cToF = c * (9/5) + 32
    console.log(`${c} Celsius es igual a ${cToF} Farenheit`);
}

const nCelsiusToF = (c) => cToF = c * (9/5) + 32;

//VOLTAJE

function voltaje(res,corr){
    let volt = res*corr
    console.log(`El voltaje es igual a ${volt} volts`);
}

const nVoltaje = (res,corr) => volt = res*corr;

//ESFERA

function volEsfera(radio){
    let vEsfera = (4/3) * Math.PI * Math.pow(radio,3)
    console.log(`El volumen de la esfera es: ${vEsfera} centimetros cubicos`);
}

const nVolEsfera = (radio) => vEsfera = (4/3) * Math.PI * Math.pow(radio,3);


