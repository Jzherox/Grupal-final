function verificarDia() {
    const dia = document.getElementById("entrada").value.trim().toLowerCase();
    const resultadoDiv = document.getElementById("salida");

    if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
        resultadoDiv.textContent = "✅ Es fin de semana";
    } else if (["lunes", "martes", "miércoles", "miercoles", "jueves", "viernes"].includes(dia)) {
        resultadoDiv.textContent = "📅 Es un día entre semana";
    } else {
        resultadoDiv.textContent = "❌ Día no válido. Intenta con: lunes, martes, etc.";
    }
}
