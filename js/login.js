const principal = document.getElementById("principal");
const conteiner = document.getElementById('conteiner');
const user = document.getElementById('user');
const senha = document.getElementById('senha');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    if(user.value != "admin" && senha.value != "admin") {
        btn.setAttribute("class", "btnErrado");
        trocaClasse()
    } else if(user.value == "admin" && senha.value == "admin") {
        tiraLogin();
    }
})

function tiraLogin() {
    setTimeout(function() {
        conteiner.style.opacity = '0';
        conteiner.style.zIndex = '1';
        principal.style.opacity = '100%'
        principal.style.zIndex = '99999'
    }, 1000);
    conteiner.addEventListener('transitionend', function() {
        this.style.display = 'none'
        principal.style.display = 'flex'
    });
}

function trocaClasse() {
    setTimeout(function() {
        btn.setAttribute("class", "btn");
    }, 1000);
}