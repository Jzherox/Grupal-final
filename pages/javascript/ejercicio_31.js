function ejercicio31(){
    let n1 = Number(document.getElementById('num1').value);
      let n2 = Number(document.getElementById('num2').value);
      let n3 = Number(document.getElementById('num3').value);
      let n4 = Number(document.getElementById('num4').value);
      let n5 = Number(document.getElementById('num5').value);
      let suma = n1 + n2 + n3 + n4 + n5;
      let promedio = suma / 5;
      document.getElementById('salida').innerHTML = `El promedio es: ${promedio}`;
    }