/*
class animal{

    constructor(especie,color,sonido,habitad ){
        this.especie=especie;
        this.color=color;
        this.sonido=sonido;
        this.habitad=habitad;
    }

    moverse(tipoMOvimiento){
         console.log(`Mi movimiento es: ${tipoMOvimiento}`)
    }
    determinarespecie(){
      return  this.especie
    }
    sonidocaracteristico(){
       return this.sonido
    }

    DondeSeEncuentra(){
      return this.habitad
    }

}


class perro extends animal{
    
  constructor(raza,color,sonido){
    super(raza,color,sonido,'casa')
  }

  ladrar(){
    return this.sonido;
  }

  sentarse(){
    console.log('me he sentado')
  }
}

const labrador= new perro('labrador','blanco','woof');
console.log(labrador.sonidocaracteristico());
console.log(labrador.ladrar());

//clase que reciban objetos 
//clase padre 
class Musica{

    constructor(info) {
      this.fechalanzamiento = info.fechalanzamiento
      this.artista= info.artista;
      this.genero= info.genero;
      this.titulo= info.titulo;
    }

    reproducir(){
      console.log(`se esta reproduciendo ${this.titulo} del artista ${this.artista}`)
    }
    pausar(){
      return `se ah pasusado ${this.titulo} del artista ${this.artista}`
    }
}
// creo el objeto 
const informacion={
    fechalanzamiento: 1989,
    artista:'madona',
    genero:'pop',
    titulo:'like a virgin ',
    
}
const rock = new Musica(informacion)
console.log(rock.reproducir());

const pop = new Musica({fechalanzamiento:1989,artista:'skillet',genero:'pop',titulo:'moster'})

pop.reproducir();
*/

//trabajo de hoy:  crera un Clase Padre
//crear una clase que herede de la padre 
//Ambas clases deben de tener minimo 2 metodos 
//deben recibir objetos
//los objetos recibidos deben de tener otro objeto como propiedad

//clase padre 
class arbol{
 constructor(tipo,habitad,color,fruto,dureza,infoCuidado){
  this.tipo=tipo;
  this.habitad=habitad;
  this.color=color;
  this.fruto=fruto;
  this.dureza=dureza;
  this.tiempoC=infoCuidado.tiempoC
  this.tipoTierra=infoCuidado.tipoTierra
  this.infoNutriTierra=infoCuidado.infoNutriTierra
  this.lugarCrecimiento=infoCuidado.lugarCrecimiento

 }
  //metodo 1 clase padre
  mostrartipoarbol(){
    return `el tipo de arbol es ${this.tipo}`
  }
  //metodo 2 clase padre 
  mostrarcolor(){
    return `el color del arbol es ${this.color }`
  }
}

 //clase hija 
class roble extends arbol{
  constructor(tipo,habitad,color,fruto,dureza,infoCuidado){
     super(tipo,habitad,color,fruto,dureza,infoCuidado)

    }
  //metodo 1 clase hija 
  mostrardureza(){
    return `dureza: ${this.dureza}`
  }
  //metodo 2 clase hija 
  info(){
   return `tipo ${this}`
  }

}

infoCuidado={
  tiempoC:'2 años',
  tipoTierra:'nutriTierra(ejemplo de marca)',
  infoNutriTierra:{
    minerales:4,
    filtracionAgua:100
  },
  lugarCrecimiento:'x'



}
fruto={
  color:'rojo ',
  sabor:'dulce',
  proteinas:{
    a:true,
    b:true,
    c:true
  }
}

const roblea = new roble('roble','bosque','cafe',fruto,'alta',infoCuidado);
console.log(roblea.mostrardureza());
console.log(roblea.mostrarcolor());
console.log(roblea.mostrartipoarbol())
console.log(roblea.info)

