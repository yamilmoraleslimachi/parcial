document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var danza = document.getElementById('danza').value;
    
    alert('¡Felicidades ' + nombre + '! Ya estás inscrita para la danza de ' + danza + '.');
    
    document.getElementById('formulario').reset();
});