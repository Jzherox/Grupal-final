function contarLetras() {
    debugger;
    let texto = document.getElementById("texto").value;
    let letra = document.getElementById("letra").value;
    // Validar que la letra tenga un solo carácter
    if (letra.length !== 1) {
        alert("Por favor, ingrese solo una letra.");
        return;
    }

    // Contar las ocurrencias de la letra en el texto
    let regex = new RegExp(letra, "gi");
    let coincidencias = texto.match(regex);
    let cantidad = coincidencias ? coincidencias.length : 0;

    // Mostrar el resultado
    document.getElementById("salida").innerText = `La letra "${letra}" aparece ${cantidad} veces en el texto.`;
}