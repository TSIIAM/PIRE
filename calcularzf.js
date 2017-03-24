 window.onload = function() {
     var calcInput = document.querySelector('#calcular');
     calcInput.addEventListener('click', calcular);



     function calcular() {

         //obtener valores
         //al presionar suma

         var x = Number(document.getElementById("num1").value);
         var y = Number(document.getElementById("num2").value);

         //operar
         var frec = y * 4;

         var dist = x / frec;
         var raiz = Math.sqrt(dist)
         var res = 17.32 * raiz;
         var zf = res.toFixed(2);

         //asignar resultado
         var resultado = " La Zona de Fresnel es :" + zf + "mts ";
         // mostrarlo en pantalla
         document.getElementById("resultado").innerHTML = resultado;

     };
 };