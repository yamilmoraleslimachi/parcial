var btnCalc = document.getElementById("btnCalc");
btnCalc.addEventListener("click", function() {
    var baseOrigen = parseInt(document.getElementById("baseOrigen").value);
    var numero = document.getElementById("numeroInput").value.trim();
    var baseDestino = parseInt(document.getElementById("baseDestino").value);
    var resultadoBox = document.getElementById("resultadoBox");
    if (isNaN(baseOrigen) || numero === "" || isNaN(baseDestino)) {
        alert("Error: Todos los campos son obligatorios.");
        return;
    }
    if (baseOrigen < 2 || baseOrigen > 36 || baseDestino < 2 || baseDestino > 36) {
        alert("Las bases deben estar entre 2 y 36.");
        return;
    }
    var numeroDecimal = parseInt(numero, baseOrigen);

    if (isNaN(numeroDecimal)) {
        alert("Error: El número no pertenece a la base de origen ingresada.");
        resultadoBox.innerText = "";
        return;
    }
    var resultadoFinal = numeroDecimal.toString(baseDestino).toUpperCase();
    resultadoBox.innerText = resultadoFinal;
});