function factorialArreglo() {
    const numerosTexto = document.getElementById("numeros").value;
    const salida = document.getElementById("salida");

    if (numerosTexto.trim() === "") {
        salida.innerText = "❌ Por favor ingrese al menos un número separado por comas.";
        return;
    }

    const arreglo = numerosTexto
        .split(",")
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n) && n >= 0); // Solo factorial de enteros no negativos

    if (arreglo.length === 0) {
        salida.innerText = "❌ Todos los valores ingresados son inválidos o negativos.";
        return;
    }

    let resultado = "";

    arreglo.forEach(num => {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        resultado += `🧮 Factorial de ${num} = ${fact}\n`;
    });

    salida.innerText = resultado;
}
