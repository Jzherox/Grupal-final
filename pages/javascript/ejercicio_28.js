function compararFrases() {
    const frase1 = document.getElementById("frase1").value.trim();
    const frase2 = document.getElementById("frase2").value.trim();
    const salida = document.getElementById("salida");

    if (frase1 === "" || frase2 === "") {
        salida.innerText = "❌ Por favor ingrese ambas frases.";
        return;
    }

    if (frase1.length > frase2.length) {
        salida.innerText = "🟣 La primera frase tiene más caracteres.";
    } else if (frase2.length > frase1.length) {
        salida.innerText = "🔵 La segunda frase tiene más caracteres.";
    } else {
        salida.innerText = " Ambas frases tienen la misma cantidad de caracteres.";
    }
}