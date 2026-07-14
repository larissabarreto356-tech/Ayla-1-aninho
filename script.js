// =====================================
// CONVITE AYLA - 1 ANINHO
// =====================================

// Fotos
const fotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg"
];

let atual = 0;

const fotoPrincipal = document.getElementById("fotoPrincipal");

// ==========================
// TROCAR FOTO
// ==========================

function trocarFoto(numero){

    atual = numero - 1;

    fotoPrincipal.style.opacity = "0";

    setTimeout(()=>{

        fotoPrincipal.src = fotos[atual];

        fotoPrincipal.style.opacity = "1";

    },300);

}

// Carrossel automático

setInterval(()=>{

    atual++;

    if(atual >= fotos.length){

        atual = 0;

    }

    fotoPrincipal.style.opacity="0";

    setTimeout(()=>{

        fotoPrincipal.src = fotos[atual];

        fotoPrincipal.style.opacity="1";

    },300);

},4000);

// ==========================
// CONTAGEM REGRESSIVA
// ==========================

const destino = new Date("2026-08-23T16:00:00").getTime();

function atualizarTempo(){

    const agora = new Date().getTime();

    const distancia = destino - agora;

    if(distancia <= 0){

        document.getElementById("tempo").innerHTML =
        "🎉 Hoje é o grande dia!";

        return;

    }

    const dias = Math.floor(distancia/(1000*60*60*24));

    const horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((distancia%(1000*60*60))/(1000*60));

    const segundos = Math.floor((distancia%(1000*60))/1000);

    document.getElementById("tempo").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(atualizarTempo,1000);

atualizarTempo();

// ==========================
// MÚSICA
// ==========================

const musica = document.getElementById("musica");

// ==========================
// ABRIR ENVELOPE
// ==========================

const abrir = document.getElementById("abrir");

const abertura = document.getElementById("abertura");

const site = document.getElementById("site");

abrir.addEventListener("click",()=>{

    musica.play().catch(()=>{});

    abertura.style.opacity="0";

    setTimeout(()=>{

        abertura.style.display="none";

        site.style.display="block";

    },800);

});
