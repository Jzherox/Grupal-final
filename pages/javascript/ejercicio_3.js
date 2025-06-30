function funcion() {
    const nota = parseFloat(document.getElementById("entrada").value);
    const resultadoDiv = document.getElementById("salida");

    if (isNaN(nota)) {
        resultadoDiv.textContent = "Por favor, ingresa una nota válida.";
        return;
    }

    if (nota >= 7) {
        resultadoDiv.textContent = "✅ Aprobado";
    } else if (nota >= 5) {
        resultadoDiv.textContent = "⚠️ Supletorio";
    } else {
        resultadoDiv.textContent = "❌ Reprobado";
    }
}
