let contador = 0;
let terminado = false;

function pedirNombres() {
    const input = document.getElementById('nombre');
    const nombre = input.value.trim();
    const salida = document.getElementById('salida');

    if (terminado) return;

    if (nombre === "Messi") {
        terminado = true;
        salida.innerText = `📝 Ingresó ${contador} nombre(s) antes de escribir "Messi".`;
    } else if (nombre !== "") {
        contador++;
        input.value = '';
        input.focus();
    }
}