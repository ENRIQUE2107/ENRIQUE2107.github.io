function checkAnswer() {
    var answer = document.getElementById("answerInput").value.toLowerCase();
    var result = document.getElementById("resultado");

    if (answer === "si") {
        function insertarHTML() {
            
            document.write('<a href="proyecto.html"><p><h1><center>JUGAR OTRA VEZ</center><h1></p> </a>');
          }
          
          insertarHTML();
         
    } else {
        result.innerText = "gracias por jugar ";
    }
    
}

