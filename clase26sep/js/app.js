import { personas } from "./persona.js";
import { computerschoiceDisplay } from "./dom.js";


const sectionmain =document.createElement('section');
const parrafoprincipal=document.createElement('P');
parrafoprincipal.innerHTML=personas[0].primerNombre+' '+personas[0].Apellido;
sectionmain.classList.add("main");
document.body.appendChild(sectionmain);
document.body.appendChild(parrafoprincipal);