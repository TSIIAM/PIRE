 window.onload = function() {
     var sumInput = document.querySelector('#calcular');
     sumInput.addEventListener('click', suma);



     function suma() {

         //obtener valores
         //al presionar suma

         var x = parseInt(document.getElementById("num1").value);
         var y = parseInt(document.getElementById("num2").value);
         var z = parseInt(document.getElementById("num3").value);
         //operar
         var res = x - y + z;
         //asignar resultado
         var resultado = " La Potencia Isotrópica Radiada Equivalente es: " + res + " (dBm)";
         // mostrarlo en pantalla
         document.getElementById("resultado").innerHTML = resultado;

     };
 };