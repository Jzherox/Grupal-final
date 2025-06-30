    let contador = 0;
    let terminado = false;

    function contarNumeros() {
      if (terminado) return;

      const input = document.getElementById("numero");
      const numero = parseFloat(input.value);

      if (isNaN(numero)) return;

      if (numero === 0) {
        terminado = true;
        document.getElementById("salida").innerText = "Cantidad de números ingresados: " + contador;
      } else {
        contador++;
        input.value = "";
        input.focus();
      }
    }