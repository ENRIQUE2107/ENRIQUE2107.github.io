function checkAnswer() {
    var answer = document.getElementById("answerInput").value.toLowerCase();
    var result = document.getElementById("resultado");

    if (answer === "un anillo") {
        result.innerText = "¡Respuesta correcta FELICIDADES! La respuesta es un calcetin.";
        function insertarHTML() {
            document.write('<p><center>¡Respuesta correcta FELICIDADES! La respuesta es un anillo.</center></p>');
            document.write('<a href="proyecto2.html"><p><center>siguiente </center></p></a>');
          }
          
          insertarHTML();
         
    } else {
        result.innerText = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
    
}


