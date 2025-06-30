function dividirOracion() {
    debugger;
    let oracion = document.getElementById("oracion").value;
    let palabras = oracion.split(" ");
    let salida = "";

    for (let i = 0; i < palabras.length; i++) {
        salida += `Palabra ${i + 1}: ${palabras[i]}<br>`;
    }

    document.getElementById("salida").innerHTML = salida;
}