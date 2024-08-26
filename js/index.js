const inicio = document.getElementById('loading-screen');
const conteiner = document.getElementById('conteiner');
const user = document.getElementById('user');
const senha = document.getElementById('senha');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    tiraLogin();
    setTimeout(function() {
        inicio.style.opacity = '0';
    }, 5000);
    inicio.addEventListener('transitionend', function() {
        this.style.display = 'none'
    });
})

function iniciou() {
    setTimeout(function () {
        inicio.style.opacity = '0';
    }, 5000);
}

// iniciou();

function tiraLogin() {
    conteiner.style.display = 'none';
}

// function trocaClasse() {
//     setTimeout(function () {
//         btn.setAttribute("class", "btn");
//     }, 1000);
// }

setInterval(function () {
    sessionStorage.setItem('jsReloaded', 'true');
    location.reload();
}, 180000);

var currentImg = 0;
var imgArray = [
    'painel2',
    'painel',
    'malte'
]

const img = document.getElementById('imagem');
img.className = imgArray[0];
const titulo = document.getElementById('titulo');

function nextImg() {
    currentImg++;
    if (currentImg == imgArray.length) {
        currentImg = 0;
    }
    img.className = imgArray[currentImg];
    if (img.className === 'malte') {
        titulo.textContent = 'Malte e Maltose';
    } else if (img.className === 'painel') {
        titulo.textContent = 'Adega Cerveja Filtrada';
    } else if (img.className === 'painel2') {
        titulo.textContent = 'Adega Cerveja Concentrada';
    }
}

function prevImg() {
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgArray.length - 1;
    }
    img.className = imgArray[currentImg];
    if (img.className === 'malte') {
        titulo.textContent = 'Malte e Maltose';
    } else if (img.className === 'painel') {
        titulo.textContent = 'Adega Cerveja Filtrada';
    } else if (img.className === 'painel2') {
        titulo.textContent = 'Adega Cerveja Concentrada';
    }
}

document.getElementById('direita').addEventListener('click', nextImg);
document.getElementById('esquerda').addEventListener('click', prevImg);

setInterval(nextImg, 60000);

window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "ArrowRight":
            nextImg();
            break;
        case "ArrowLeft":
            prevImg();
            break;
    }
});