// ======================================
// AYLA - 1 ANINHO
// SCRIPT.JS
// ======================================

// =======================
// FOTOS
// =======================

const fotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg"
];

let fotoAtual = 0;

const fotoPrincipal = document.getElementById("fotoPrincipal");

// =======================
// TROCAR FOTO MANUAL
// =======================

function trocarFoto(numero){

    fotoAtual = numero - 1;

    fotoPrincipal.style.opacity = "0";

    setTimeout(()=>{

        fotoPrincipal.src = fotos[fotoAtual];

        fotoPrincipal.style.opacity = "1";

    },300);

}

// =======================
// CARROSSEL AUTOMÁTICO
// =======================

setInterval(()=>{

    fotoAtual++;

    if(fotoAtual >= fotos.length){

        fotoAtual = 0;

    }

    fotoPrincipal.style.opacity = "0";

    setTimeout(()=>{

        fotoPrincipal.src = fotos[fotoAtual];

        fotoPrincipal.style.opacity = "1";

    },300);

},4000);

// =======================
// CONTAGEM REGRESSIVA
// =======================

const dataEvento = new Date("2026-08-23T16:00:00").getTime();

function atualizarTempo(){

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;

    if(distancia <= 0){

        document.getElementById("tempo").innerHTML =
        "🎉 Chegou o grande dia!";

        return;

    }

    const dias =
    Math.floor(distancia/(1000*60*60*24));

    const horas =
    Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

    const minutos =
    Math.floor((distancia%(1000*60*60))/(1000*60));

    const segundos =
    Math.floor((distancia%(1000*60))/1000);

    document.getElementById("tempo").innerHTML =

    `${dias} dias<br>
    ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(atualizarTempo,1000);

atualizarTempo();
// =======================
// MÚSICA
// =======================

const musica = document.getElementById("musica");

// =======================
// ABERTURA DO CONVITE
// =======================

const abertura = document.getElementById("abertura");
const site = document.getElementById("site");
const botaoAbrir = document.getElementById("abrirConvite");
const tampa = document.querySelector(".tampa");

botaoAbrir.addEventListener("click", () => {

    // Abre a tampa do envelope
    tampa.style.transform = "rotateX(180deg)";

    // Inicia a música
    musica.play().catch(() => {});

    // Aguarda a animação
    setTimeout(() => {

        abertura.style.opacity = "0";

        setTimeout(() => {

            abertura.style.display = "none";
            site.style.display = "block";

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        },800);

    },900);

});

// =======================
// ANIMAÇÃO DOS CARDS
// =======================

const cards = document.querySelectorAll(".card");

cards.forEach((card, index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".7s";

    setTimeout(()=>{

        card.style.opacity="1";
        card.style.transform="translateY(0px)";

    },600 + (index*250));

});
// ======================================
// SCRIPT PARTE 3
// EFEITOS PREMIUM
// ======================================

// =======================
// FLORES CAINDO
// =======================

function criarFlor(){

    const flor = document.createElement("div");

    flor.innerHTML = "🌸";

    flor.style.position = "fixed";
    flor.style.left = Math.random()*100 + "vw";
    flor.style.top = "-50px";
    flor.style.fontSize = (18 + Math.random()*22) + "px";
    flor.style.opacity = Math.random();

    flor.style.pointerEvents = "none";
    flor.style.zIndex = "999";

    document.body.appendChild(flor);

    let y = -50;
    let x = parseFloat(flor.style.left);

    const velocidade = 1 + Math.random()*2;
    const vento = (Math.random()-0.5)*1.5;

    const queda = setInterval(()=>{

        y += velocidade;
        x += vento;

        flor.style.top = y + "px";
        flor.style.left = x + "px";

        if(y > window.innerHeight + 80){

            clearInterval(queda);

            flor.remove();

        }

    },20);

}

setInterval(criarFlor,800);

// =======================
// BRILHO NOS BOTÕES
// =======================

document.querySelectorAll(".btn").forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.transform="scale(1.06)";

    });

    botao.addEventListener("mouseleave",()=>{

        botao.style.transform="scale(1)";

    });

});

// =======================
// ANIMAÇÃO DA FOTO
// =======================

setInterval(()=>{

    fotoPrincipal.animate(

        [

            {transform:"scale(1)"},

            {transform:"scale(1.03)"},

            {transform:"scale(1)"}

        ],

        {

            duration:3000

        }

    );

},4000);

// =======================
// MENSAGEM FINAL
// =======================

console.log("🌸 Convite da Ayla carregado com sucesso! 💖");
