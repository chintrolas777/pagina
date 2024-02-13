  function redirectToOtraPagina() {
    window.location.href = 'secundaria.html';
  }
  var escalado=1
  function moverBoton() {
    var botonNo = document.getElementById('botonNo');
    var anchoVentana = window.innerWidth - 150; // Consideramos el ancho del botón
    var altoVentana = window.innerHeight - 50; // Consideramos el alto del botón
  
    var nuevoX = Math.floor(Math.random() * anchoVentana);
    var nuevoY = Math.floor(Math.random() * altoVentana);
  
    botonNo.style.position = 'absolute';
    botonNo.style.left = nuevoX + 'px';
    botonNo.style.top = nuevoY + 'px';
  
    botonNo.disabled = true;

 // Aumentar tamaño del botón "Sí" progresivamente
 var intervalo = setInterval(function() {
  escalado += 0.2; // Ajusta la velocidad de agrandamiento según lo desees
  botonSi.style.transform = 'scale(' + escalado + ')';
  botonSi.style.transition = 'transform 0.1s ease';

  if (escalado >= 1.2) {
    clearInterval(intervalo);
  }
}, 2); // Ajusta el tiempo del temporizador según lo desees
  }
  