function tablaMultiplicarArreglo() {
    const numerosTexto = document.getElementById("numeros").value;
    const salida = document.getElementById("salida");

    if (numerosTexto.trim() === "") {
        salida.innerText = "❌ Por favor ingrese al menos un número separado por comas.";
        return;
    }

    const arreglo = numerosTexto
        .split(",")
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n));

    if (arreglo.length === 0) {
        salida.innerText = "❌ Todos los valores ingresados son inválidos.";
        return;
    }

    let resultado = "";

    arreglo.forEach(num => {
        resultado += ` Tabla del ${num}:\n`;
        for (let i = 1; i <= 10; i++) {
            resultado += `   ${num} × ${i} = ${num * i}\n`;
        }
        resultado += `\n`;
    });

    salida.innerText = resultado;
}
