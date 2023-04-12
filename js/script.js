
// manejo datos de formulario de contacto 
const frmContato = document.getElementById("frmContacto");

frmContato.addEventListener("submit", function(event)  {
    // evita que se pierdan los datos del formulario al presionar el boton enviar 
    event.preventDefault();

    if (validoFrmContacto() === "OK")
    {
        // envio datos al pdf 
        crearPDF();
    
        frmContato.reset();
    }
} 
);


// valido que los campos obligatorios se encuentre cargados
function validoFrmContacto() {

    let resultado="OK";

    if (frmContato.nombre.value == "") {
        alert("Complete el campo nombre");
        resultado = "ERR";
        
    } else if (frmContato.apellido.value == "") {
        alert("Complete el campo apellido");
        resultado = "ERR";

    } else if (frmContato.edad.value == "") {
        alert("Complete el campo edad");
        resultado = "ERR";

    } else  if (frmContato.email.value == "") {
        alert("Complete el campo email");
        resultado = "ERR";

    } else if(frmContato.telefono.value == ""){
        alert("Complete su número de teléfono");
        resultado = "ERR";

    } else if (frmContato.comentario.value == "") {
        alert("Complete el campo comentario");
        resultado = "ERR";
    };
    
    // controlo rango de edad
    if (frmContato.edad.value != "")
    {
        if (parseInt(frmContato.edad.value) < 5 || parseInt(frmContato.edad.value) > 90)
        {
            alert("Debe ingresar una edad  valida. (rango 5 a 90). Gracias")
            resultado = "ERR";
        }
    }

    return resultado;
    

     
    
}


// funcion para generar PDF
function crearPDF()
{
    // guardo en variables los campos del formulario 
    let nombre = document.querySelector("#nombre").value,
        apellido = document.querySelector("#apellido").value,
        edad = document.querySelector("#edad").value,
        email = document.querySelector("#email").value,
        telefono = document.querySelector("#telefono").value,
        comentario = document.querySelector("#comentario").value;

     // obtengo la fecha y hora actual
    
     // creo un objeto nuevo date 
     let today = new Date();

     // Obtengo la fecha y hora 
     let fecha = today.toLocaleDateString("en-GB");
     let date = new Date();
     let horas , minutos, segundos, milisegundos;
     horas = date.getHours();
     minutos = date.getMinutes();
     segundos = date.getSeconds();
      
    var doc = new jsPDF();
    
    let y = 10;

    doc.text(0,y = y + 10,"_______________________________________________________________________________");
    doc.text(20,y = y + 20, "G R U P O   I I I   F I T N E S S")
    doc.text(0,y = y + 10,"________________________________________________________________________________");
    
    
    doc.text(20,y = y + 10,"Nombre          : " + nombre);
    doc.text(20,y = y + 10,"Apellido          : " + apellido);
    doc.text(20,y = y + 10,"Edad              : " + edad);
    doc.text(20,y = y + 10,"Email             : " + email);
    doc.text(20,y = y + 10,"Telefono        : " + telefono);
    doc.text(20,y = y + 10,"Comentario   : " + comentario);
    doc.text(0,y = y + 10,"_________________________________________________________________________________");
    doc.text(20,y = y + 10, "Mensaje generado el: " + fecha + ' a las ' + horas + ":" + minutos + ":" + segundos);

    doc.save('DatosContacto'+'_'+apellido+nombre+'_'+fecha+'_'+horas+minutos+segundos+'.pdf');

}
