function sumaNumeros() {
    debugger;
    let numero = parseInt(document.getElementById("numero").value);
    let suma = 0;

    while (numero >= 0) {
        suma += numero;
        numero = parseFloat(prompt("Ingrese un número (negativo para terminar):"));
    }

    document.getElementById("salida").innerText = "La suma total es: " + suma;
}