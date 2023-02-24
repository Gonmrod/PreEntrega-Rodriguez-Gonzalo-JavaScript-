
//Anunciamos el modo de entrada de datos
alert("Bienvenid@s al sistema de reservas. Acontinuación deberá seleccionar una fecha de entrada, otra de salida, la cantidad de personas para hospedaje y nombre completo.");

//Creación de un objeto que contendrá las reservas

const reservas = {
  listaReservas : []
}

// Creación de una función que permita agregar reservas

function agregarReserva(){
  let reserva = {
    fechaIngreso: "",
    fechaEgreso: "",
    cantPersonas: "",
    titularNombre: "",
    titularApellido: "",
    titularDNI: ""
  }

  reserva.fechaIngreso = prompt("Ingrese fecha de ingreso  - DD/MM/AAAA");
  reserva.fechaEgreso = prompt("Ingrese fecha de egreso - DD/MM/AAAA");
  reserva.cantPersonas = Number(prompt("Ingrese la cantidad de personas para hospedaje"));
  reserva.titularNombre = prompt("Ingrese su nombre");
  reserva.titularApellido = prompt("Ingrese su apellido");
  reserva.titularDNI = prompt("Ingrese su DNI (sin puntos)");

//Genero un bucle while en caso de completar un dato vacío
  while (fechaIngreso === "" || fechaEgreso === "" || cantPersonas === "" || titularNombre === "" || titularApellido === "" || titularDNI === ""){
    alert("No ha completado algún dato, por favor revea los ingresos.")
    reserva.fechaIngreso = prompt("Ingrese fecha de ingreso  - DD/MM/AAAA");
    reserva.fechaEgreso = prompt("Ingrese fecha de egreso - DD/MM/AAAA");
    reserva.cantPersonas = Number(prompt("Ingrese la cantidad de personas para hospedaje"));
    reserva.titularNombre = prompt("Ingrese su nombre");
    reserva.titularApellido = prompt("Ingrese su apellido");
    reserva.titularDNI = prompt("Ingrese su DNI (sin puntos)");
  }

// Si contiene datos se utiliza el metodo push para añadir los elementos al Objeto array y se alerta que se ha agregado
reservas.listaReservas.push(reserva);
alert(`Registro de reserva exitoso - Datos - Titular: ${titularNombre}, ${titularApellido} con DNI: ${titularDNI}. Para la fecha: ${fechaIngreso} hasta el día ${fechaEgreso}. Cantidad de personas: ${cantPersonas}`);
}