// =====================================
// CONVITE AYLA - 1 ANINHO
// script.js
// =====================================

// Aguarda a página carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // Elementos da página
    const abertura = document.getElementById("abertura");
    const site = document.getElementById("site");
    const botaoAbrir = document.getElementById("abrirConvite");
    const tampa = document.querySelector(".tampa");
    const musica = document.getElementById("musica");
    const fotoPrincipal = document.getElementById("fotoPrincipal");
    const tempo = document.getElementById("tempo");

    // Lista de fotos
    const fotos = [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg",
        "foto6.jpg"
    ];

    let fotoAtual = 0;

    // ==========================
    // Troca de foto
    // ==========================
    window.trocarFoto = function(numero){

        fotoAtual = numero - 1;

        if(fotoPrincipal){
            fotoPrincipal.src = fotos[fotoAtual];
        }

    };

    // ==========================
    // Carrossel automático
    // ==========================
    setInterval(function(){

        fotoAtual++;

        if(fotoAtual >= fotos.length){
            fotoAtual = 0;
        }

        if(fotoPrincipal){
            fotoPrincipal.src = fotos[fotoAtual];
        }

    },4000);
        // ==========================
    // Abrir o convite
    // ==========================

    if(botaoAbrir){

        botaoAbrir.addEventListener("click", function(){

            // Anima a tampa
            if(tampa){
                tampa.style.transform = "rotateX(180deg)";
            }

            // Toca a música (se existir)
            if(musica){
                musica.play().catch(function(){
                    console.log("A música não pôde iniciar automaticamente.");
                });
            }

            // Esconde a tela de abertura
            abertura.style.opacity = "0";

            setTimeout(function(){

                abertura.style.display = "none";
                site.style.display = "block";

                window.scrollTo({
                    top:0,
                    behavior:"smooth"
                });

            },800);

        });

    }

    // ==========================
    // Contagem regressiva
    // ==========================

    function atualizarContagem(){

        const dataEvento = new Date("2026-08-23T16:00:00");

        const agora = new Date();

        const diferenca = dataEvento - agora;

        if(diferenca <= 0){

            if(tempo){
                tempo.innerHTML = "🎉 Chegou o grande dia!";
            }

            return;

        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

        const segundos = Math.floor((diferenca / 1000) % 60);

        if(tempo){

            tempo.innerHTML =
                dias + " dias<br>" +
                horas + "h " +
                minutos + "m " +
                segundos + "s";

        }

    }

    atualizarContagem();

    setInterval(atualizarContagem,1000);
        // ==========================
    // EFEITOS
    // ==========================

    // Animação suave na foto principal
    if (fotoPrincipal) {

        setInterval(function () {

            fotoPrincipal.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.03)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 3000,
                    iterations: 1
                }
            );

        }, 4000);

    }

    // Mensagem no console
    console.log("🌸 Convite da Ayla carregado com sucesso!");

}); // <-- FECHA O DOMContentLoaded
