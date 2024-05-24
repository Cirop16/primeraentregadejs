
// Función para generar un número aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  // Función principal del simulador
  function adivinarNumero() {
    let numeroSecreto = generarNumeroAleatorio();
    let intentos = 3;
    let adivinanza;
  
    while (intentos > 0) {
      adivinanza = prompt("Adivina el numero entre el 1 y 10. Tenes " + intentos + " intentos:");
      adivinanza = parseInt(adivinanza, 10);
  
      // Verificar si la entrada es un número
      if (isNaN(adivinanza)) {
        alert("Ojo, ingresa un numero valido.");
        continue;
      }
  
      // Condicional para verificar si la adivinanza es correcta
      if (adivinanza === numeroSecreto) {
        alert("bien ahi! adivinaste.");
        break;
      } else {
        alert("Ooooolee. Intenta de nuevo.");
        intentos--;
      }
    }
  
    if (intentos === 0) {
      alert("Gua gua gua, perdiste. El número era " + numeroSecreto + ".");
    }
  }
  
  // Iniciar el simulador
  adivinarNumero();