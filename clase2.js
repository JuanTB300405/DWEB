
//                                       FUNCIONES

/*funciones anonimas*/
function restar(num1,num2){
 return (num1-num2);
}
const sumarDosNumeros=function(num1,num2){
    return num1+num2;
}
console.log(sumarDosNumeros(4,7));
/*Arrow function*/
const multiplicar=(n1,n2) =>{
    return n1*n2
}
console.log("el resultado es: "+multiplicar(5,5));

// no recibe parametros 
const multiplicar2=() =>{
    return 4*5
}
//con solo un parametro 
const nom="juan";
const nombrar= nom =>{
 return ("el nombre suyo es: "+nom);
}
console.log(nombrar (nom));
// return implicito (regresa de inmediato la funcion sin el return o funcion)
const multi3 =(n1,n2) => n1*n2;
console.log("multi 3 da: "+multi3(5,5));
//CALLBACK FUNCTION 
const dividir=(num1,num2) => num1/num2;
const operacionesMatematicas=(num1,num2,operacion) =>{
 return operacion(num1,num2);
}
console.log("el resultado es: "+ operacionesMatematicas(2,2,dividir))

 //                      ARREGLOS 
 let userdata=['Juan',1234,'@gmail.com']
 const Userdata2=[{name:'juan', pass:1234, mail:'@gmail.com'}];
 /*length  longitud (cantidad de datos)

 *index posicion en el arreglo

 *push  ingresar un dato al final del arreglo(al final)

 *pop sacar el ultimo dato
 
 */

 console.log("\n \n");


 // trabajo minimo 2 trabajos tipo flecha , usar una callback function ( usar lo antes escrito)
 // funcion 1
let numeros = [88,2234,1223,234];

//fucnion 1
const eliminar= (array) => array.pop();


//fucion 2
const colocar =(array,num) => array.push(num);



//funcion 3 
const asignar =(array,funcion, num) => funcion(array,num)

/* 
const mostrar=(array) => {
    for(let i=0; i<array.length; i++){
        console.log("array en posicion"+i+"="+array[i])
     }
 } */

const mostrar=(array) => array



    console.log("Elemento añadido en la posicion: " + asignar(numeros, colocar, 300))

console.log("Se elimino el elemento: "  + asignar(numeros, eliminar))

console.log( mostrar(numeros));

// *****************************************************************
// clase 3 






 



 
