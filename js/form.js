var registroForm = document.getElementById("registroForm");
registroForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var celular = document.getElementById("celular").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var password = document.getElementById("password").value.trim();
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    if (nombre === "" || apellido === "" || celular === "" || correo === "" || password === "" || fechaNacimiento === "") {
        alert("Error: Por favor, llena todos los campos.");
        return; 
    }
    if (!generoSeleccionado) {
        alert("Error: Por favor, selecciona tu género.");
        return;
    }
    var fechaNac = new Date(fechaNacimiento);
    var fechaActual = new Date();
    fechaNac.setMinutes(fechaNac.getMinutes() + fechaNac.getTimezoneOffset());
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    var mesActual = fechaActual.getMonth() + 1;
    var diaActual = fechaActual.getDate();
    var mesNac = fechaNac.getMonth() + 1;
    var diaNac = fechaNac.getDate();
    if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
        edad--;
    }
    if (edad < 18) {
        alert("Error: Debes ser mayor de edad (18 años o más) para registrarte.");
        return;
    }
    alert("¡Cuenta creada con éxito!\n\nBienvenido: " + nombre + " " + apellido);
    registroForm.reset();
});