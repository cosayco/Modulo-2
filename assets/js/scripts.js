//Formulario Contacto - Respuesta
function redireccionar() {
    setTimeout("location.href='index.html'", 2000);
}

//Index Movimientos
function mostrarDIV(ID){ 
    document.getElementById(ID).style.display = "block";
}

function ocultarDIV(ID){ 
    document.getElementById(ID).style.display = "none";
}

//Reloj
function actualizarHora() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    const horas = agregarCero(ahora.getHours());
    const minutos = agregarCero(ahora.getMinutes());
    const segundos = agregarCero(ahora.getSeconds());
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

function agregarCero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

setInterval(actualizarHora, 1000);
actualizarHora();