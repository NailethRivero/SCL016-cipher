import cipher from './cipher.js';

console.log(cipher);
let cypher = document.getElementById("cipher");
cypher.addEventListener("click", function(){
inicio.style.display ="none";
let paginaCifrado = document.getElementById("paginaCifrado");
paginaCifrado.style.display="block";
});

let decipher = document.getElementById("decipher");
let paginaDescifrado = document.getElementById("paginaDescifrado");
decipher.addEventListener("click", function(){
inicio.style.display ="none";
paginaDescifrado.style.display ="block";
});

let volver = document.getElementById('volver');
volver.addEventListener("click", function(){
    paginaCifrado.style.display = "none";
let inicio = document.getElementById("inicio");
inicio.style.display = "block";
});

let volver1 = document.getElementById('volver1');
volver1.addEventListener("click", function(){
    paginaDescifrado.style.display = "none";
let inicio = document.getElementById("inicio");
inicio.style.display = "block";
});

let cifrar = document.getElementById('cifrarMensaje'); 
cifrar.addEventListener("click", function () {
let box1 = document.getElementById("box1"); 
let valor = box1.value; 
let select = document.getElementById("select"); 
let valor2 = parseInt(select.value);
document.getElementById("resultado").innerHTML = "" +  cipher.encode(valor, valor2); 
});

let descifrar = document.getElementById('descifrarMensaje'); 
descifrar.addEventListener("click", function () {
let box2 = document.getElementById("box2"); 
let valor3 = box2.value; 
let select2 = document.getElementById("select2"); 
let valor4 = parseInt(select2.value);
document.getElementById("resultado2").innerHTML = "" +  cipher.decode(valor3, valor4); 
});