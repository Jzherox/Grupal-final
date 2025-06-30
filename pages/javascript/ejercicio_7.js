function ejecutarsaludo() {
    const hora = parseInt(document.getElementById("hora").value);
    const salida = document.getElementById("salida");

    if (isNaN(hora) || hora < 0 || hora > 23) {
        salida.innerText = "❌ Por favor ingrese una hora válida entre 0 y 23.";
        return;
    }

    let saludo = "";

    if (hora >= 0 && hora <= 11) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora <= 17) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    salida.innerText = `✅ Hora ingresada: ${hora}\n💬 Saludo: ${saludo}`;
}
