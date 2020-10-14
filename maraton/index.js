/*
Bienvenido/a!!
Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, 
podes continuar con otro de forma independiente. 
Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. 
Algunos te piden solo tocar JS otros, JS + HTML.
Exitos! Happy coding! - Guayerd

------
----------         RELIZADOS          01 02 03 04 05 06 07 08 09
-------------      INCOMPLETOS        10
----------         SIN COMENZAR        
------


*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/
alert("Bievenidas/os al Maratón Guayerd");

/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando, 
el foco este puesto en el input.ej2-nombre. 
Y cuando el foco se pierda (evento blur), borrar el contenido del div.
luis
blur        —Este evento se desencadena cuando la ventana pierde foco (también se
              desencadena por los elementos).
focus       —Este evento se desencadena cuando la ventana se enfoca de nuevo (también se
              desencadena por los elementos)
*/
//												div.ej2-nombre
const ej2Nombre       =document.querySelector(".ej2-nombre");
const ej2Resultado    =document.querySelector(".ej2-resultado"); //Se rompe lindo, no?
ej2Nombre.addEventListener("focus", focusHandler);
ej2Resultado.addEventListener("blur", blurHandler);

function focusHandler(e){
  ej2Resultado.innerText = "El input nombre tiene el foco.-"; // antes estaba El input nombre tiene el foco"
}// me ayudadaron estes era ej2Nombre
function blurHandler(e){
  ej2Resultado.innerText = "";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div          =document.querySelector(".ej3-resultado");
ej3Div.addEventListener("click", mostrarSaludo);

function mostrarSaludo(){
  ej3Div.innerHTML=txtSaludo;
}
const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos  ** al value del input --->value "",ej 2 tambien. input.value="";
luis
getElementById(id) —Este método devuelve una referencia al objeto Element que
representa el elemento identificado con el valor especificado por el atributo (el valor
asignado al atributo id ).
querySelector() -Este método devuelve solo la referencia al
primer elemento encontrado. Si queremos obtener una lista de todos los
elementos que coinciden con el selector, tenemos que usar el método
querySelectorAll() 
luis
blur        —Este evento se desencadena cuando la ventana pierde foco (también se
            desencadena por los elementos).
focus       —Este evento se desencadena cuando la ventana se enfoca de nuevo (también se
            desencadena por los elementos
*/

let show    =document.querySelector(".ej4-resultado");  /// Lugar mostraré el rdo
let mail    =document.querySelector(".ej4-email");
let mens    =document.querySelector(".ej4-mensaje");

mens.addEventListener("blur", toShow);

function toShow(){
  let mostrarMail       =mail.value;
  let mostrarMensaje    =mens.value;
  show.innerText=`Ahi el mail:   ${mostrarMail} ahi el mensaje:   ${mostrarMensaje}`
  mail.value="";  //solo eso para dejar en blanco
  mens.value="";
}

//function clear (){
//        classList.remove()
//}

/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y 
    mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) 
    informar en div.ej5-resultado "Ingreso erróneo"
*/
let divRdo    =document.querySelector(".ej5-resultado");
let inp1      =document.querySelector(".input1");
let inp2      =document.querySelector(".input2");
let btSuma    =document.querySelector(".sumar");

btSuma.addEventListener("click", sumatoria);
/*
function sumatoria(){
  let rdo             =parseInt( inp1.value)+parseInt( inp2.value);
  divRdo.innerText    =`El rdo es la suma es ${rdo}`
}
*/
function sumatoria(){
  console.log("Si, estoy ehecutando la func del ej. 5to")//debug
  if(isNaN(inp1.value)||isNaN(inp2.value)){
    divRdo.innerText    ="INGRESO ERRÓNEO"
  }else{
    let rdo             =parseInt( inp1.value)+parseInt( inp2.value);
    divRdo.innerText    =`El rdo es la suma es ${rdo}`
  }
}

/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes.
        Recorrerlos y crear los <option> según corresponda
*/
const paises        =["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana    =["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let select01        =document.querySelector(".ej6-paises");
let select02        =document.querySelector(".ej6-diasSemana");

paises.forEach(function(pais){
  let option        =document.createElement("option");
  option.innerHTML  =pais;
  option.value      =pais;
  select01.appendChild(option);

});

diasSemana.forEach(function(dia){
  let option        =document.createElement("option");
  option.innerHTML  =dia;
  option.value      =dia;
  select02.appendChild(option);
});


/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado 
el valor del select cuando el usuario selecciona un valor
*/
const momento       =["Mañana","Tarde","Noche"];
let sel             =document.querySelector(".momentos");  ////sel.value 

momento.forEach(function(instante){
  let option        =document.createElement("option");
  option.value      =instante;
  option.innerHTML  =instante;
  sel.appendChild(option);
});

sel.addEventListener("change", rdoHandler);

function rdoHandler(){
  alert("holaaaaaaaa es el ej7");// DEBUG, para verif si se ejecuta la func.
  const rdo			=document.querySelector(".ej7-resultado");
  rdo.innerText		=sel.value;
  console.log( "aqui ej 7");
}


/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. 
Mostrar en div.ej8-resultado "OK" o "Error".
 El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario

let pass    =document.querySelector("#password");//  es un ID
let boto    =document.querySelector(".ej8 button"); //NO HAY ID ME POSICIONO EN EL EJ8 y su button
let resu    =document.querySelector(".ej8-resultado");

boto.addEventListener("click", botoHandler);

function botoHandler(){
  if(localStorage.getItem("password")===pass.value){
    resu.innerText="OKI DOKI Bienvenido/a";
  }else{                      // la contraseña es    js2020   !!!!!!!!!
    resu.innerText="3RRoR.-";
  }
}

/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array 
utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];

let divContenedor     =document.querySelector(".ej9-resultado");
let juntarUsuarios="";

usuarios.forEach(function(usuario){
  alert(usuario.nombre);// lo utilizo para verif que nombre llega
//  concateno dentro de la memoria
  juntarUsuarios+=`
  <div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre: ${usuario.nombre}</span><span>valor</span>
    <span class="title">NroCliente: ${usuario.nroCliente}</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI: ${usuario.dni}</span><span>valor</span>
    <span class="title">Fecha Nacimiento: ${usuario.fechaNacimiento}</span><span>valor</span>
  </div>
</div>
  `
});
divContenedor.innerHTML=juntarUsuarios; //asigno al final, mejora la performance.

/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar
una base de datos de contactos para poder vender productos. 
Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a)ok  Crear el <form> dentro del elemento div.ej10-form
  b)ok  Crear los elementos input, select, button que correspondan
  c)ok Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d)ok Limpiar los elementos del form
  e)ok Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.

  Paciencia: RAE
  Capacidad de padecer o soportar algo sin alterarse.
  Constancia: RAE
  Firmeza y perseverancia del ánimo en las resoluciones y en los propósitos.
 */

let divParaForm          =document.querySelector(".ej10-form");
let form                 =document.createElement("form");
let rdofinal             =document.querySelector(".ej10-resultado");

let inputNombre          =document.createElement("input");
inputNombre.type         ="text";
inputNombre.placeholder  ="NOMBRE..."

let inputTel             =document.createElement("input");
inputTel.type            ="number";
inputTel.placeholder     ="TELEFONO";

let inputMail            =document.createElement("input");
inputMail.placeholder    ="MAIL";

let selectHorario        =document.createElement("select");
let optH01               =document.createElement("option");
let optH02               =document.createElement("option");
let optH03               =document.createElement("option");
optH01.innerText         ="MAÑANA";
optH02.innerText         ="TARDE";
optH03.innerText         ="NOCHE";
selectHorario.appendChild(optH01);
selectHorario.appendChild(optH02);
selectHorario.appendChild(optH03);

let selectProduc        =document.createElement("select");
let optP01              =document.createElement("option");
let optP02              =document.createElement("option");
let optP03              =document.createElement("option");
optP01.innerText        ="nnn01";
optP02.innerText        ="nnn02";
optP03.innerText        ="nnn03";
selectProduc.appendChild(optP01);
selectProduc.appendChild(optP02);
selectProduc.appendChild(optP03);

let botonSave           =document.createElement("button");
botonSave.innerText     ="GUARDAR";
botonSave.type          ="submit";// no sé si es necesario el SUBMIT..
botonSave.classList.add ="unClassAqui"// como se agraga una clase o id

let botonFinish         =document.createElement("button"); //.ej10 button
botonFinish.innerText   ="FINALIZAR";

form.appendChild(inputNombre);
form.appendChild(inputTel);
form.appendChild(inputMail);
form.appendChild(selectHorario);
form.appendChild(selectProduc);
form.appendChild(botonSave);
form.appendChild(botonFinish);

divParaForm.appendChild(form);


const contactos=[];

//if(localStorage.getItem("arrayUsuarios")){
//  contactos=JSON.parse(localStorage.getItem("contactos"))
//};

//boton: nunca realizara un submit
form.addEventListener("submit", btnSaveHandler);
//botonFinish.addEventListener("click", btnFinishHandler);
function btnSaveHandler(e){
  e.preventDefault();// sino se recarga la pág  y tengo que detenerlo
  console.log("funcion del ejercicio 10");
  const usuario ={
    nombre:   inputNombre.value,
    telefono: inputTel.value,
    mail:     inputMail.value
  }
  contactos.push(usuario);
  localStorage.setItem("arrayUsuarios", JSON.stringify(contactos));
  form.reset();
}

form.addEventListener("click",btnFinish );

// con ayuda 
function btnFinish(e){
  e.preventDefault();
  contactos.forEach(function(contacto, index){
    let ul        =createElement("ul");
    ul.innerText  =`CLIENTE: ${index+1}`
    let liName    =createElement("li");
    il.innerText  =`NOMBRE: ${contacto.nombre}`

    ul.appendChild(liName)
    rdofinal.appendChild(ul);
  })
}












/*
// 01-COMPRENDIENDO LO BÁSICO.
let divParaForm         =document.querySelector(".ej10-form");
let form                =document.createElement("form");

let inputNombre         =document.createElement("input");
inputNombre.type        ="text";
inputNombre.placeholder ="NOMBRE..."

let inputTel            =document.createElement("input");
inputTel.type           ="number";
inputTel.placeholder    ="TELEFONO";

let selectHorario       =document.createElement("select");
let opt01               =document.createElement("option");
let opt02               =document.createElement("option");
let opt03               =document.createElement("option");
opt01.innerText         ="MAÑANA";
opt02.innerText         ="TARDE";
opt03.innerText         ="NOCHE";

selectHorario.appendChild(opt01);
selectHorario.appendChild(opt02);
selectHorario.appendChild(opt03);

form.appendChild(inputNombre);
form.appendChild(inputTel);

divParaForm.appendChild(form);
divParaForm.appendChild(selectHorario);
*/
/*
// 02- FORMULARIOS
let divParaForm         =document.querySelector(".ej10-form");
let form                =document.createElement("form");

let inputNombre         =document.createElement("input");
inputNombre.type        ="text";
inputNombre.placeholder ="NOMBRE..."

let inputTel            =document.createElement("input");
inputTel.type           ="number";
inputTel.placeholder    ="TELEFONO";

let inputMail           =document.createElement("input");
inputMail.placeholder   ="MAIL";

form.appendChild(inputNombre);
form.appendChild(inputTel);
form.appendChild(inputMail);

let selectHorario       =document.createElement("select");
let opt01               =document.createElement("option");
let opt02               =document.createElement("option");
let opt03               =document.createElement("option");
opt01.innerText         ="MAÑANA";
opt02.innerText         ="TARDE";
opt03.innerText         ="NOCHE";
selectHorario.appendChild(opt01);
selectHorario.appendChild(opt02);
selectHorario.appendChild(opt03);

let selectProduc        =document.createElement("select");
let opt01P              =document.createElement("option");
let opt02P              =document.createElement("option");
let opt03P              =document.createElement("option");
opt01P.innerText        ="XBOX";
opt02P.innerText        ="PS4";
opt03P.innerText        ="NINTENDO SWITCH";
selectProduc.appendChild(opt01P);
selectProduc.appendChild(opt02P);
selectProduc.appendChild(opt03P);

divParaForm.appendChild(form);
divParaForm.appendChild(selectHorario);
divParaForm.appendChild(selectProduc);
*/
