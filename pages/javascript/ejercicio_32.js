function ejercicio32(){
    let texto=document.getElementById('arreglo').value
    let arreglo=texto.split(',').map(Number);
    let resultado=document.getElementById('salida');
    let contador=0;
    for(let c=0;c<arreglo.length;c++){
        if (!isNaN(arreglo[c]) && arreglo[c] % 2 !== 0) {
          contador++;
        }
      }
      resultado.innerHTML=`hay ${contador} impares <br>`
    }
