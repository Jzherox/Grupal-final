function invertirCadena() {
    const texto = document.getElementById("entrada").value;
    const resultadoDiv = document.getElementById("salida");

    if (texto.trim() === "") {
        resultadoDiv.textContent = "❌ Ingresa una cadena válida.";
        return;
    }

    const invertida = texto.split("").reverse().join("");
    resultadoDiv.textContent = `🔁 Cadena invertida: ${invertida}`;
}