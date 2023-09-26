const referencia=document.getElementById('root');
const lista = document.createElement('ul');
lista.id="listaR";
//const li1= document.createElement('li');
const nombres=['ver Spiderverse','ver doctor house','acerca de nosotros'];
const links=['#spidervers','#temporada4','#TF'];
const hr1=document.createElement('hr');
referencia.appendChild(hr1);
for (let i= 0; i < nombres.length; i++) {
    li1=document.createElement('li');
    articulos=document.createElement('a');
    articulos.innerHTML=nombres[i];
    articulos.href=links[i];
    articulos.className="articuloB";
    li1.appendChild(articulos);
    lista.appendChild(li1);
}
referencia.appendChild(lista);
const hr2=document.createElement('hr');
referencia.appendChild(hr2);


