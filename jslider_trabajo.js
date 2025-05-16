window.addEventListener('load', iniciar, false);
/* Contador inicializado en cero */
var contador = 0;
var obj2;

function iniciar() {
    var obj = document.getElementById('slider');
    obj2 = obj.getElementsByTagName('img');

    // Ocultamos todas menos la primera
    for (var i = 1; i < obj2.length; i++) {
        obj2[i].style.opacity = 0;
    }

    // Cambio automático cada 3 segundos
    setInterval(cambiarImg, 3000);
}

function cambiarImg() {
    obj2[contador].style.opacity = 0;
    contador = (contador + 1) % obj2.length;
    obj2[contador].style.opacity = 1;
}