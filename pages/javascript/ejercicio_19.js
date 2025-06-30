let suma = 0;
let terminado = false;

function agregarNumero() {
    if (terminado) return;

    const input = document.getElementById("numero");
    const numero = parseFloat(input.value);

    if (isNaN(numero)) return;

    if (numero < 0) {
        terminado = true;
        document.getElementById("salida").innerText = "La suma total es: " + suma;
    } else {
        suma += numero;
        input.value = "";
        input.focus();
    }
}