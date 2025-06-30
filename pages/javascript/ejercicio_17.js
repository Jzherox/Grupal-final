function pedirNombres() {
    let contador = 0;
    let nombre = "";
    const salida = document.getElementById("salida");

    while (nombre !== "Messi") {
        nombre = prompt("Ingrese un nombre (escriba 'Messi' para terminar):");
        if (nombre !== null && nombre !== "Messi") {
            contador++;
        }
    }

    const mensaje = `📝 Ingresó ${contador} nombre(s) antes de escribir "Messi".`;
    salida.innerText = mensaje;
}
