// ======================================
// CONVITE AYLA - 1 ANINHO
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTOS
    const abertura = document.getElementById("abertura");
    const site = document.getElementById("site");
    const botao = document.getElementById("abrirConvite");
    const tampa = document.querySelector(".tampa");
    const musica = document.getElementById("musica");
    const fotoPrincipal = document.getElementById("fotoPrincipal");
    const tempo = document.getElementById("tempo");

    // FOTOS
    const fotos = [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg",
        "foto6.jpg"
    ];

    let atual = 0;

    // GALERIA
    window.trocarFoto = function(numero){
        atual = numero - 1;
        fotoPrincipal.src = fotos[atual];
    }

    setInterval(() => {

        atual++;

        if(atual >= fotos.length){
            atual = 0;
        }

        fotoPrincipal.style.opacity = "0";

        setTimeout(() => {

            fotoPrincipal.src = fotos[atual];
            fotoPrincipal.style.opacity = "1";

        },300);

    },4000);

    // CONTAGEM
    function atualizarTempo(){

        const destino = new Date("2026-08-23T16:00:00").getTime();

        const agora = new Date().getTime();

        const distancia = destino - agora;

        if(distancia <= 0){

            tempo.innerHTML = "🎉 Chegou o grande dia!";

            return;

        }

        const dias = Math.floor(distancia / (1000*60*60*24));

        const horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

        const minutos = Math.floor((distancia%(1000*60*60))/(1000*60));

        const segundos = Math.floor((distancia%(1000*60))/1000);

        tempo.innerHTML =
        `${dias} dias<br>${horas}h ${minutos}m ${segundos}s`;

    }

    atualizarTempo();

    setInterval(atualizarTempo,1000);

    // BOTÃO ABRIR

    botao.addEventListener("click", () => {

        tampa.style.transform = "rotateX(180deg)";

        if(musica){

            musica.play().catch(()=>{});

        }

        setTimeout(()=>{

            abertura.style.display="none";

            site.style.display="block";

        },800);

    });

});
