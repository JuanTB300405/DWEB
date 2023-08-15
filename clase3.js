// forEach
const nums = [1,5,10,30,50];
let replica=0;

nums.forEach((item)=>{
 replica=replica+item;
})

console.log(replica)

//map 
//multiplica por 2 cada valor del vector  original, lo guarda en double 
const double =nums.map((valor)=>valor*2)
console.log(double);


// vector de objetos o arreglo de objetos 

const estudiantes=[
{nombre:'juan', apellido:'tejada'},
{nombre:'juan', apellido:'perez'},
{nombre:'juan',apellido:'montoya'}
]

const nombrecompleto=estudiantes.map((student)=>{
    return `${student.nombre} ${student.apellido} `
})
console.log(nombrecompleto)

//filter, filtrado y se coloca la condicion para que se filtre 

const numerosfiltrados=nums.filter((numero)=>numero<30)
console.log(numerosfiltrados);

const objetosfiltrados= estudiantes.filter((estudiante)=> estudiante.nombre==='juan'|| estudiante.apellido==='montoya')
console.log(objetosfiltrados)

//Every 

const frutas = ['banano','papaya','mango','fresa'];

const cumple = frutas.every((word)=> word.length >3);
console.log("");
console.log(cumple);

const cumpleO=estudiantes.every((estudiante)=>estudiante.nombre==='juan');
console.log(cumpleO);
const OF=[
    {nombre:'banano', buena:true},
    {nombre:'mandarina', buena:true},
    {nombre:'uva', buena:false},

]
const pruebaOF= OF.every((of)=>of.buena===true);
console.log(pruebaOF);

// cantidad de oropiedades fijas
const auto={
color:'azul',
 año:'1987',
 cpuertas:4,
 marca:'Mazda',
 reviciones:{
 fechaIngreso:'10/01/2020',
 fechaSalida:'20/01/2020',
 estadoSalida:'bueno',
 entregadoPor:'juan perez'
 },
tieneSeguro:true,
registrotransito:true

};
let autos=[];
autos.push(auto);
console.log(autos)

// trabajo de la clase

// construir array con minimo 2 objetos, cada uno debe de tener otro objeto, van a usar 3 metodos de arreglos sobre el array 


//1.array con 3 objetos y cada uno tiene otro adentro 
const comida=[
    {nombre:'sanduche', 
    bueno:true,
    distribuidor:{
      nombre:'filling',
      ciudad:'Medellin'
     }
    },
    {nombre:'coca',
     bueno:false,
     distribuidor:{
        nombre:'filling',
        ciudad:'cali'
     }
    },
    {nombre:'boliqueso',
     bueno:true,
     distribuidor:{
      nombre:'filling',
      ciudad:'barranquilla'
     }
    
    }
]

//metodo 1 every
const cumpleC=comida.every((comida)=>comida.distribuidor.nombre==='filling');
console.log("resuktado del every con el array comida= "+cumpleC)


//metodo 2 map 
let contador=0;
const mapeoC=comida.map((comida)=>{
    if(comida.nombre==='boliqueso'){
        contador=contador+1;
    }
})
console.log("el contador termino en:"+contador)


//metodo 3
const prueba= comida.filter((comida)=>(comida.distribuidor.nombre==='filling'));
console.log("el resultado del filter es: ")
console.log(prueba);

