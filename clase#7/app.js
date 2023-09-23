const usersChoice =document.createElement('h1');
const computersChoice =document.createElement('h1');
const resultDisplay =document.createElement('h1') ;
//encontrando el section del HTML que tiene un id = root
const gameGrid = document.getElementById('root');
gameGrid.appendChild(usersChoice);
const br =document.createElement('br');
gameGrid.appendChild(br);
gameGrid.appendChild(computersChoice);
gameGrid.appendChild(resultDisplay);

const Choice=['piedra','papel','tijera'];
let userChoice;
let computerchoice;

const generarteComputerPlay = () =>{
    const randomChoice=Choice[Math.floor(Math.random()*Choice.length)];
    computerchoice=randomChoice;
    computersChoice.innerHTML='la jugada de la computadora es: '+computerchoice;
}

generateresult=()=>{
    switch(userChoice+computerchoice){
        case'tijerapapel':
        case'piedratijera':
        case'papelpiedra':
        resultDisplay.innerHTML='Gano usuario';
         break;
        case'piedrapapel':
        case'tijerapiedra':
        case'papeltijera':
        resultDisplay.innerHTML='perdio el usuario';
         break;

      default:
        resultDisplay.innerHTML='empate';
        break;
    }
}
const handleCLick = e =>{
    userChoice = e.target.id;
    usersChoice.innerHTML='su juagada es: '+userChoice;
    generarteComputerPlay();
    generateresult();
} 
for (let i = 0; i< Choice.length; i++) {
  const button=  document.createElement('button');
  button.id=Choice[i];
  button.innerHTML= Choice[i];
  //cuado le hagan click va a llamar a la fucnion handleCLick
  button.addEventListener('click',handleCLick);
  gameGrid.appendChild(button);
}
