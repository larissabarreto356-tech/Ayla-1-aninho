// ======================================
// CONVITE AYLA - 1 ANINHO
// script.js
// ======================================

// GALERIA

const fotos = [
"foto1.jpg"'
"foto2.jpg"'
"foto3.jpg"'
"foto4.jpg"'
"foto5.jpg"'
"foto6.jpg"'
];

let atual = 0;

const fotoPrincipal = document.getElementById("fotoPrincipal");

function trocarFoto(numero){

atual = numero-1;

fotoPrincipal.style.opacity=0;

setTimeout(()=>{

fotoPrincipal.src=fotos[atual];

fotoPrincipal.style.opacity=1;

},300);

}

setInterval(()=>{

atual++;

if(atual>=fotos.length){

atual=0;

}

fotoPrincipal.style.opacity=0;

setTimeout(()=>{

fotoPrincipal.src=fotos[atual];

fotoPrincipal.style.opacity=1;

},300);

},4000);

// CONTAGEM REGRESSIVA

const destino = new Date("2026-08-23T16:00:00").getTime();

const contador = document.createElement("section");

contador.className="presentes";

contador.innerHTML=`

<h2>⏳ Contagem Regressiva</h2>

<h1 id="tempo"></h1>

`;

document.body.insertBefore(contador,document.querySelector("footer"));

function atualizarTempo(){

const agora=new Date().getTime();

const distancia=destino-agora;

if(distancia<0){

document.getElementById("tempo").innerHTML="🎉 Chegou o grande dia!";

return;

}

const dias=Math.floor(distancia/(1000*60*60*24));

const horas=Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

const minutos=Math.floor((distancia%(1000*60*60))/(1000*60));

const segundos=Math.floor((distancia%(1000*60))/1000);

document.getElementById("tempo").innerHTML=

`${dias}d ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(atualizarTempo,1000);

atualizarTempo();

// ANIMAÇÃO

const cards=document.querySelectorAll(".card");

const aparecer=()=>{

cards.forEach(card=>{

const topo=card.getBoundingClientRect().top;

if(topo<window.innerHeight-80){

card.style.opacity=1;

card.style.transform="translateY(0px)";

}

});

}

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(40px)";

card.style.transition=".8s";

});

window.addEventListener("scroll",aparecer);

aparecer();
// ===============================
// MÚSICA AO ABRIR O CONVITE
// ===============================

const musica = new Audio("musica.mp3");
musica.loop = true;

const abrirConvite = document.querySelector(".botaoPrincipal");

if (abrirConvite) {

    abrirConvite.addEventListener("click", () => {

        musica.play().catch(() => {});

    }, { once: true });

}
// ===========================
// ABRIR CONVITE
// ===========================

const tela = document.getElementById("abertura");

const abrir = document.getElementById("abrir");

abrir.addEventListener("click",()=>{

musica.play().catch(()=>{});

tela.style.opacity="0";

setTimeout(()=>{

tela.style.display="none";

},900);

});
