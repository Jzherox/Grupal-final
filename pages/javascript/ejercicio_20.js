function contarNumeros() {
    debugger
    let numero;
    let contador = 0;

    while (numero !== 0) {
        numero = parseFloat(prompt("Ingrese un número (0 para terminar):"));
        contador++;
    }

    document.getElementById("salida").innerText = "Cantidad de números ingresados: " + (contador - 1);
}