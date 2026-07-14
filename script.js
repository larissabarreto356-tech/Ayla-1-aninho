// =======================================
// CONVITE AYLA - 1 ANINHO
// Parte 1
// =======================================

document.addEventListener("DOMContentLoaded", () => {

const fotos = [
"imagens/foto1.jpg",
"imagens/foto2.jpg",
"imagens/foto3.jpg",
"imagens/foto4.jpg",
"imagens/foto5.jpg",
"imagens/foto6.jpg"
];

let fotoAtual = 0;

// ----------------------------
// CRIA GALERIA
// ----------------------------

const galeria = document.createElement("section");
galeria.className = "galeria";

const titulo = document.createElement("h2");
titulo.innerText = "Momentos Especiais da Ayla";

const imagem = document.createElement("img");
imagem.src = fotos[0];
imagem.className = "fotoPrincipal";

galeria.appendChild(titulo);
galeria.appendChild(imagem);

document.body.appendChild(galeria);

// ----------------------------
// CARROSSEL
// ----------------------------

function trocarFoto(){

fotoAtual++;

if(fotoAtual >= fotos.length){

fotoAtual = 0;

}

imagem.style.opacity = 0;

setTimeout(()=>{

imagem.src = fotos[fotoAtual];

imagem.style.opacity = 1;

},500);

}

setInterval(trocarFoto,4000);

// ----------------------------
// CONTAGEM REGRESSIVA
// ----------------------------

const contador = document.createElement("section");

contador.className = "contador";

contador.innerHTML = `

<h2>Faltam...</h2>

<div id="tempo"></div>

`;

document.body.appendChild(contador);

const destino = new Date("2026-08-23T16:00:00").getTime();

function atualizarTempo(){

const agora = new Date().getTime();

const diferenca = destino - agora;

if(diferenca < 0){

document.getElementById("tempo").innerHTML =
"🎉 Hoje é o grande dia!";

return;

}

const dias =
Math.floor(diferenca / (1000*60*60*24));

const horas =
Math.floor((diferenca%(1000*60*60*24))/(1000*60*60));

const minutos =
Math.floor((diferenca%(1000*60*60))/(1000*60));

const segundos =
Math.floor((diferenca%(1000*60))/1000);

document.getElementById("tempo").innerHTML =

`${dias} dias<br>
${horas} horas<br>
${minutos} minutos<br>
${segundos} segundos`;

}

setInterval(atualizarTempo,1000);

atualizarTempo();
  // ===========================
// MÚSICA (estrutura)
// ===========================

const musica = new Audio("musica.mp3");
musica.loop = true;

const botaoMusica = document.createElement("button");

botaoMusica.innerHTML = "🎵 Ligar Música";

botaoMusica.className = "botao";

document.body.appendChild(botaoMusica);

let tocando = false;

botaoMusica.addEventListener("click", () => {

    if (!tocando) {

        musica.play();
        botaoMusica.innerHTML = "🔇 Desligar Música";
        tocando = true;

    } else {

        musica.pause();
        botaoMusica.innerHTML = "🎵 Ligar Música";
        tocando = false;

    }

});

// ===========================
// FECHA O DOMContentLoaded
// ===========================

});
