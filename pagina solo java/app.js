const manipulacion = document.getElementById('root');
const sectionH= document.createElement('section');
sectionH.classList="container";
const lista1= document.createElement('ul')
lista1.classList="listas";
const ils=[{nombre:"Ver Spiderman",ip:"#spidervers"},{nombre:"Ver Doctor House",ip:"#DRH"},{nombre:"Acerca de nosotros",ip:"#TF"}];
for (let i = 0; i< ils.length; i++) {
   const li1= document.createElement('li');
   li1.classList="articulosHeader";
   const link= document.createElement('a');
   link.innerHTML=ils[i].nombre;
   link.href=ils[i].ip;
   link.classList="links";
   li1.appendChild(link);
   lista1.appendChild(li1);
}
sectionH.appendChild(lista1);
manipulacion.appendChild(sectionH)

const section2 = document.createElement('section');
section2.id="contentSection";
const contenido=`
 <!--Seccion de las peliculas de  Spiderman -->

<section class="subsection">
    <ul class="listaC">
      <img src="imagenes/spiderman1.jpg" alt="" class="imagenes">
      <ul class=sublista>
        <li class="articuloT">El hombre araña 1</li>
        <li class="articulo">Para mayores de 12 años</li>
        <li class="articulo"> 3 horas</li>
      </ul>
    </ul>

    <ul class="listaC">
      <img src="imagenes/spiderman2.jpg" alt="" class="imagenes">
      <ul class=sublista>
        <li class="articuloT">El hombre araña 2</li>
        <li class="articulo">Para mayores de 16 años</li>
        <li class="articulo"> 2 horas 30 minutos</li>
      </ul>
    </ul>

    <ul class="listaC">
    <img src="imagenes/spiderman3.jpg" alt="" class="imagenes">
    <ul class=sublista>
      <li class="articuloT">El hombre araña 3</li>
      <li class="articulo">Para mayores de 18 años</li>
      <li class="articulo"> 1h 30 minutos</li>
    </ul>
   </ul>

   <ul class="listaC">
   <img src="imagenes/spi2.jpg" alt="" class="imagenes">
   <ul class=sublista>
     <li class="articuloT" id="spidervers">Spidervers</li>
     <li class="articulo">Para mayores de 18 años</li>
     <li class="articulo"> 1h 30 minutos</li>
   </ul>
  </ul>
 </section>

  </section class="subsection"> 
  <hr>
  <!--Seccion de las temporadas de DR.House -->
  <ul class="listaC">
  <img src="imagenes/drhouse.jpg" alt="" class="imagenes">
  <ul class=sublista>
    <li class="articuloT" id="DRH">Doctor House</li>
    <li class="articulo">Temporada 1</li>
    <li class="articulo">48 capitulos</li>
    <li class="articulo">+18</li>
  </ul>
 </ul>

 <ul class="listaC">
 <img src="imagenes/drhouse.jpg" alt="" class="imagenes">
 <ul class=sublista>
   <li class="articuloT" id="DRH">Doctor House</li>
   <li class="articulo">Temporada 2</li>
   <li class="articulo">24 capitulos</li>
   <li class="articulo">+18</li>
 </ul>
 </ul>

  <ul class="listaC">
   <img src="imagenes/drhouse.jpg" alt="" class="imagenes">
   <ul class=sublista>
     <li class="articuloT" id="DRH">Doctor House</li>
     <li class="articulo">Temporada 3</li>
     <li class="articulo">58 capitulos</li>
     <li class="articulo">+18</li>
   </ul>
 </ul>  
 <footer>
 <section id="TF">
   <section class="fsection">
     <h2>correo</h2>
     <p>jtejadabustamante@gmail.com</p>
    </section>
    <section class="fsection">
      <h2>creador</h2>
      <p>juan Manuel Tejada Bustamante</p>
     </section>
     <section class="fsection">
      <h2>institucion</h2>
      <p>Institucion universitaria pascual bravo</p>
     </section>
 </section>
</footer>
</section>
`
section2.innerHTML=contenido;
document.body.appendChild(section2);

