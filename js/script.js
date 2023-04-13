
// manejo datos de formulario de contacto 
const frmContacto = document.getElementById("frmContacto");
const frmPaso1 = document.getElementById("step-1");
const frmPaso2 = document.getElementById("step-2");
 
 
const nextBtnP1 = document.querySelector("#btnPlan-1");
const nextBtnP2 = document.querySelector("#btnPlan-2");
const nextBtnP3 = document.querySelector("#btnPlan-3");

const nextBtnCotizar = document.querySelector("#next-btn-coti");

const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");







// evento que escucha si se presiona boton asociarse plan 1
nextBtnP1.addEventListener("click", function() {
    let planSelecc =  document.querySelector("#lbl-plan-coti");  
    
    let planSeleccionado = "";
    planSeleccionado =  document.getElementById("Plan1Descripcion").textContent;
    planSelecc.innerHTML = document.getElementById("p-plan-1-titulo").textContent;
    
    step1.style.display = "block";  
    step2.style.display = "none";
    frmPaso1.reset(); 
   

});


// evento que escucha si se presiona boton asociarse plan 2
nextBtnP2.addEventListener("click", function() {
    let planSelecc =  document.querySelector("#lbl-plan-coti");
    
    let planSeleccionado = "";
    planSeleccionado =  document.getElementById("Plan2Descripcion").textContent;
    planSelecc.innerHTML = document.getElementById("p-plan-2-titulo").textContent;
     
    step1.style.display = "block";  
    step2.style.display = "none";
    frmPaso1.reset(); 
      
    
   

});

// evento que escucha si se presiona boton asociarse plan 2
nextBtnP3.addEventListener("click", function() {
    let planSelecc =  document.querySelector("#lbl-plan-coti");          
    
    let planSeleccionado = "";
    planSeleccionado =  document.getElementById("Plan3Descripcion").textContent;
    planSelecc.innerHTML = document.getElementById("p-plan-3-titulo").textContent;
     
    step1.style.display = "block";  
    step2.style.display = "none";
    frmPaso1.reset(); 
   
    
   

});



// evento del boton cotizar 
nextBtnCotizar.addEventListener("click", function() {
    let resultado;
    
    let nombre =  document.querySelector("#name-coti").value;
    let email =  document.querySelector("#email-coti").value;
    let planSeleccionado = document.getElementById("lbl-plan-coti").textContent;
     
    resultado = validoDatosFrmCotizacionPaso1(nombre, email, planSeleccionado);
    if (resultado === "OK")
    {
        step1.style.display = "none";  
        step2.style.display = "block";  
        muestroCotizacion(nombre, email, planSeleccionado);
    };


});

function muestroCotizacion(nombre, email, planSeleccionado)
{
    
   let cotizacionDetalle;
   let valorPlan;
   let descuentoPlan;
   let precioFinalPlan;

   if (planSeleccionado=="Plan Black Individual")
   {  
        valorPlan = 90000;
        descuentoPlan = 30;
        precioFinalPlan =  valorPlan - (valorPlan * (descuentoPlan/100));
         

   };

   if (planSeleccionado=="Plan Grupal")
   {  
        valorPlan = 150000;
        descuentoPlan = 10;
        precioFinalPlan =  valorPlan - (valorPlan * (descuentoPlan/100));
         

   };

   if (planSeleccionado=="Plan Corporativo")
   {  
        valorPlan = 110000;
        descuentoPlan = 5;
        precioFinalPlan =  valorPlan - (valorPlan * (descuentoPlan/100));
         

   };

   cotizacionDetalle = "Plan en promoción vigiente, precio anual del plan $" + valorPlan + " , descuento especial del " + descuentoPlan + "%. Precio final con descuento incluido: $" + precioFinalPlan; 

    
    summary.innerHTML = `Nombre: ${nombre} 
                    <br> Email: ${email} 
                    <br> Plan seleccionado ${planSeleccionado} 
                    <br> ${cotizacionDetalle}` ;
 
    // ocultar el primer paso y mostrar el segundo 
    step1.style.display = "none";
    step2.style.display = "block";

};



frmPaso2.addEventListener("click", function(event){

    crearPDFCotizacion();





});

frmContacto.addEventListener("submit", function(event)  {
    // evita que se pierdan los datos del formulario al presionar el boton enviar 
    event.preventDefault();

    if (validoFrmContacto() === "OK")
    {
        // envio datos al pdf 
        crearPDF();
<<<<<<< HEAD
    
        frmContato.reset();
    }
=======

        // fuerzo limpieza de los campos del formulario

        frmContacto.reset();
    };

>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716
} 
);


<<<<<<< HEAD
=======
// valido datos ingresados del formulario cotizacion de producto

function validoDatosFrmCotizacionPaso1(nombre, email)
{

    let resultado="OK";

    
    if (nombre == "") {
        alert("Complete el campo nombre");
        resultado = "ERR";
          
    } else if (email == "") {
        alert("Complete el campo email");
        resultado = "ERR";


    };
    
    return resultado;


};


>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716
// valido que los campos obligatorios se encuentre cargados
function validoFrmContacto() {

    let resultado="OK";

<<<<<<< HEAD
    if (frmContato.nombre.value == "") {
        alert("Complete el campo nombre");
        resultado = "ERR";
        
    } else if (frmContato.apellido.value == "") {
        alert("Complete el campo apellido");
        resultado = "ERR";

    } else if (frmContato.edad.value == "") {
        alert("Complete el campo edad");
        resultado = "ERR";
=======
    if (frmContacto.nombre.value == "") {

        alert("Complete el campo nombre");
        resultado = "ERR";
        
    } else  if (frmContacto.apellido.value == "") {

        alert("Complete el campo apellido");
        resultado = "ERR";

    } else if (frmContacto.edad.value == "") {

        alert("Complete el campo edad");
        resultado = "ERR";
    } else  if (frmContacto.email.value == "") {
>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716

    } else  if (frmContato.email.value == "") {
        alert("Complete el campo email");
        resultado = "ERR";
<<<<<<< HEAD
=======
    } else if (frmContacto.comentario.value == "") {
>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716

    } else if(frmContato.telefono.value == ""){
        alert("Complete su número de teléfono");
        resultado = "ERR";

    } else if (frmContato.comentario.value == "") {
        alert("Complete el campo comentario");
        resultado = "ERR";
    };
    
    // controlo rango de edad
    if (frmContacto.edad.value != "")
    {
<<<<<<< HEAD
        if (parseInt(frmContato.edad.value) < 5 || parseInt(frmContato.edad.value) > 90)
=======
        if (parseInt(frmContacto.edad.value) < 1 || parseInt(frmContacto.edad.value) > 110)
>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716
        {
            alert("Debe ingresar una edad  valida. (rango 5 a 90). Gracias")
            resultado = "ERR";
        }
<<<<<<< HEAD
    }
=======
        
    };
>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716

    return resultado;
    

<<<<<<< HEAD
     
    
}
=======

};
>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716


// funcion para generar PDF
function crearPDF()
{
    // guardo en variables los campos del formulario 
    let  nombre = document.querySelector("#nombre").value,
        apellido = document.querySelector("#apellido").value,
        edad = document.querySelector("#edad").value,
        email = document.querySelector("#email").value,
        telefono = document.querySelector("#telefono").value,
        comentario = document.querySelector("#comentario").value;
<<<<<<< HEAD
=======
    
    let imgLogo = new Image();
    imgLogo.src = "./image/logo.jpg";

    
    // creo un objeto nuevo date 
    let today = new Date();

    // Obtengo la fecha y hora 
    let fecha = today.toLocaleDateString("en-GB");
    let date = new Date();
    let horas , minutos, segundos, milisegundos;
    horas = date.getHours();
    minutos = date.getMinutes();
    segundos = date.getSeconds();
    milisegundos = date.getMilliseconds();

>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716

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
    doc.addImage(imgLogo,"JPEG", 5, y = y + 5, 30,30); 
    doc.text(50,y = y + 20, "G R U P O   I I I   F I T N E S S");
    doc.text(0,y = y + 10,"________________________________________________________________________________");
    
    
    doc.text(20,y = y + 10,"Nombre          : " + nombre);
    doc.text(20,y = y + 10,"Apellido          : " + apellido);
    doc.text(20,y = y + 10,"Edad              : " + edad);
    doc.text(20,y = y + 10,"Email             : " + email);
    doc.text(20,y = y + 10,"Telefono        : " + telefono);
    doc.text(20,y = y + 10,"Comentario   : " + comentario);
    doc.text(0,y = y + 10,"_________________________________________________________________________________");
    doc.text(20,y = y + 10, "Mensaje generado el: " + fecha + ' a las ' + horas + ":" + minutos + ":" + segundos);

<<<<<<< HEAD
    doc.save('DatosContacto'+'_'+apellido+nombre+'_'+fecha+'_'+horas+minutos+segundos+'.pdf');

}
=======
    doc.save('DatosContacto'+'_'+apellido+nombre+'_'+fecha+'_'+horas+minutos+segundos+milisegundos+'.pdf');
 
};

function crearPDFCotizacion()
{
    // guardo en variables los campos del formulario 
    let summary = document.querySelector("#summary").textContent,
        apellido = document.querySelector("#apellido").value,
        edad = document.querySelector("#edad").value,
        email = document.querySelector("#email").value,
        telefono = document.querySelector("#telefono").value,
        comentario = document.querySelector("#comentario").value;
    
    let imgLogo = new Image();
    imgLogo.src = "./image/logo.jpg";

    
    // creo un objeto nuevo date 
    let today = new Date();

    // Obtengo la fecha y hora 
    let fecha = today.toLocaleDateString("en-GB");
    let date = new Date();
    let horas , minutos, segundos, milisegundos;
    horas = date.getHours();
    minutos = date.getMinutes();
    segundos = date.getSeconds();
    milisegundos = date.getMilliseconds();


    
    
    var doc = new jsPDF('landscape');
    
    let y = 10;

    doc.setFontSize(10);
    doc.text(0,y = y + 10,"_____________________________________________________________________________________________________________________________________________________");
    doc.addImage(imgLogo,"JPEG", 5, y = y + 5, 30,30); 
    
    doc.text(50,y = y + 20, "G R U P O   I I I   F I T N E S S");
    doc.text(50,y = y + 20, "Solicitud de cotización");
    doc.text(0,y = y + 10,"_____________________________________________________________________________________________________________________________________________________");
    
    
    doc.text(1,y = y + 10, summary);
    doc.text(1,y = y + 80,"_____________________________________________________________________________________________________________________________________________________");
    doc.text(20,y = y + 10, "Mensaje generado el: " + fecha + ' a las ' + horas + ":" + minutos + ":" + segundos );

    doc.save('Cotizacion'+fecha+'_'+horas+minutos+segundos+milisegundos+'.pdf');
 
};
>>>>>>> 1a9a7ad9ae70c58dda72a973d161a292d7166716
