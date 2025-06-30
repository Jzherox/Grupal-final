function contarMayoresEdad() {
    const entrada = document.getElementById("entrada").value;
    const resultadoDiv = document.getElementById("salida");

    if (entrada.trim() === "") {
        resultadoDiv.textContent = "❌ Ingresa al menos una edad.";
        return;
    }

    const edades = entrada.split(",").map(e => parseInt(e.trim()));
    let mayores = 0;
    let validas = true;

    for (let edad of edades) {
        if (isNaN(edad)) {
            validas = false;
            break;
        }
        if (edad >= 18) {
            mayores++;
        }
    }

    if (!validas) {
        resultadoDiv.textContent = "❌ Solo se permiten números separados por comas.";
    } else {
        resultadoDiv.textContent = `👥 Hay ${mayores} persona(s) mayor(es) de edad (18 o más).`;
    }
}
