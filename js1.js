// trabajo de Juan Manuel Tejada Bustamante 
// cracion de variables con el let
let numero1=5;
let numero2=5;
const comida="sanduche";
let ganar=true 
chech(ganar);

// inprecion por consola de las variables con 2 metodos de concatenacion 
console.log("el numero 1 es:"+numero1);
console.log(`el numero 2 es: ${numero2}`)
// con condicional if y operador logico or
if(numero1===0||numero2===0){
    console.log("no puede ser ningun numero igual a 0");
}
// condicional else 
else{
    console.log("los nuemeros estan bien");
}
// condicional if con operador logico and
if(numero1===5 && numero2===5){
 console.log("ambos son iguales");
}
else{
 console.log("los numero no son iguales")
}
// condicional switch 
switch(comida){
    case "sanduche":
        console.log("usted a escogido sanduche");
    break;
    case "banana":
        console.log("usted a escogido banana")
    break;
}
// ternary operator 
function chech(ganar){

    ganr? console.log("gano") : console.log("perdio");
}
// condicional else con if 
if(numero1===0){
    console.log("no puede ser 0")
}
else if(numero1>0){
  console.log("el numero es mayor que 0")
}
// con ciclo do while
let numero3=0;
do{
 numero3=numero3+1
}
while(numero3>10)

// ciclo for
for(let i=0;i<10;i++){
 numero3=numero3+1

}