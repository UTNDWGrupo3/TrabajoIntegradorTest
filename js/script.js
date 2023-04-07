// declaro variables 


// manejo datos de formulario de contacto 
const frmContato = document.getElementById("frmContacto");

frmContato.addEventListener("submit", function(event)  {
    // evita que se pierdan los datos del formulario al presionar el boton enviar 
    event.preventDefault();

    if (validoFrmContacto() === "OK")
    {
        // envio datos al pdf 
    }

} 
);

// valido que los campos obligatorios se encuentre cargados
function validoFrmContacto() {

    let resultado="OK";

    if (frmContato.nombre.value == "") {

        alert("Complete el campo nombre");
        resultado = "ERR";
        
    } else  if (frmContato.apellido.value == "") {

        alert("Complete el campo apellido");
        resultado = "ERR";

    } else if (frmContato.edad.value == "") {

        alert("Complete el campo edad");
        resultado = "ERR";
    } else  if (frmContato.email.value == "") {

        alert("Complete el campo email");
        resultado = "ERR";
    } else if (frmContato.comentario.value == "") {

        alert("Complete el campo comentario");
        resultado = "ERR";
    };


    return resultado;


}

