function checkAnswer() {
    var answer = document.getElementById("answerInput").value.toLowerCase();
    var result = document.getElementById("resultado");

    if (answer === "el silencio") {
        result.innerText = "¡Respuesta correcta FELICIDADES! La respuesta es el silencio.";
        function insertarHTML() {
            document.write('<p><center>¡Respuesta correcta FELICIDADES! La respuesta es el silencio.</center></p>');
            document.write('<a href="gracias.html"><p><center>siguiente</center> </a>');
          }
          
          insertarHTML();
         
    } else {
        result.innerText = "Respuesta incorrecta. Inténtalo de nuevo.";
    }
    
}


