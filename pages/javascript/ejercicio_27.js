function verificarPalindromo() {
    const palabra = document.getElementById("palabra").value.trim().toLowerCase();
    const salida = document.getElementById("salida");

    if (palabra === "") {
        salida.innerText = "❌ Por favor ingrese una palabra.";
        return;
    }

    const invertida = palabra.split("").reverse().join("");

    if (palabra === invertida) {
        salida.innerText = `✅ "${palabra}" es un palíndromo.`;
    } else {
        salida.innerText = `❌ "${palabra}" no es un palíndromo.`;
    }
}