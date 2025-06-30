function compararTextos() {
    const texto1 = document.getElementById("texto1").value.trim();
    const texto2 = document.getElementById("texto2").value.trim();
    const resultadoDiv = document.getElementById("salida");

    if (texto1 === "" || texto2 === "") {
        resultadoDiv.textContent = "❌ Por favor, ingresa ambos textos.";
        return;
    }

    const len1 = texto1.length;
    const len2 = texto2.length;

    if (len1 > len2) {
        resultadoDiv.textContent = `📝 El primer texto tiene más letras (${len1} vs ${len2}).`;
    } else if (len2 > len1) {
        resultadoDiv.textContent = `📝 El segundo texto tiene más letras (${len2} vs ${len1}).`;
    } else {
        resultadoDiv.textContent = `✅ Ambos textos tienen la misma cantidad de letras (${len1}).`;
    }
}