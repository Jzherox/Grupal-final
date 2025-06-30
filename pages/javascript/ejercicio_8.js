function calcularMontoBono(numhijos, tieneEmpleo) {
    let bonoporhijo = tieneEmpleo ? 50 : 30;
    return numhijos * bonoporhijo;
}

function calcularBono() {
    const numhijos = parseInt(document.getElementById("numhijos").value);
    const empleoTexto = document.getElementById("tieneEmpleo").value.trim().toLowerCase();
    const salida = document.getElementById("salida");

    if (isNaN(numhijos) || numhijos < 0) {
        salida.innerText = "❌ Por favor ingrese un número válido de hijos.";
        return;
    }

    const tieneEmpleo = empleoTexto === "si" || empleoTexto === "sí";

    const bonoPorHijo = tieneEmpleo ? 50 : 30;
    const bonoTotal = calcularMontoBono(numhijos, tieneEmpleo);
    const estado = tieneEmpleo ? "con trabajo" : "sin trabajo";

    const mensaje = `✅ Resultado del cálculo:
👶 Hijos: ${numhijos}
💼 Estado: ${estado}
💰 Bono por hijo: $${bonoPorHijo}
🧾 Bono total: $${bonoTotal}`;

    salida.innerText = mensaje;
}
