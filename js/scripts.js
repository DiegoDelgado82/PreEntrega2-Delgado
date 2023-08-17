let listaServicios=[]


class Servicio
  {
    constructor(tarea, precio,cantidad)
    {
      this.tarea=tarea;
      this.precio=parseInt(precio);
      this.cantidad=parseInt(cantidad);
      this.precioTotal=0;
    }
    calcularPrecioTotal()
    {
      this.precioTotal= this.precio*this.cantidad
    }
  }


  class Cliente
  {
    constructor(nombre,telefono,mensaje)
    {
      this.nombre=nombre;
      this.telefono=telefono;
      this.mensaje="";
      
    }
    crearMensaje()
    {
      this.mensaje= `mensaje de whatsapp al numero:${this.telefono}`
    }
  }






function seleccionServicio(servicio) {
  /*En este Switch selecciono el select que va a aparecer en base al servicio seleccionado en los botones, el cual se pasa como parámetro */
  switch (servicio) {
    case "Pintura":
      document.getElementById("Ninguno").style.display = "none";
      document.getElementById("Pintura").style.display = "none";
      document.getElementById("Albañil").style.display = "none";
      document.getElementById("Electricidad").style.display = "none";
      document.getElementById("Plomeria").style.display = "none";
      document.getElementById("Herreria").style.display = "none";
      document.getElementById("Otros").style.display = "none";

      document.getElementById("Pintura").style.display = "inline";
      break;

    case "Albañil":
      document.getElementById("Ninguno").style.display = "none";
      document.getElementById("Pintura").style.display = "none";
      document.getElementById("Albañil").style.display = "none";
      document.getElementById("Electricidad").style.display = "none";
      document.getElementById("Plomeria").style.display = "none";
      document.getElementById("Herreria").style.display = "none";
      document.getElementById("Otros").style.display = "none";
      document.getElementById("Albañil").style.display = "inline";
      break;
    case "Electricidad":
      document.getElementById("Ninguno").style.display = "none";
      document.getElementById("Pintura").style.display = "none";
      document.getElementById("Albañil").style.display = "none";
      document.getElementById("Electricidad").style.display = "none";
      document.getElementById("Plomeria").style.display = "none";
      document.getElementById("Herreria").style.display = "none";
      document.getElementById("Otros").style.display = "none";
      document.getElementById("Electricidad").style.display = "inline";
      break;
    case "Plomeria":
      document.getElementById("Ninguno").style.display = "none";
      document.getElementById("Pintura").style.display = "none";
      document.getElementById("Albañil").style.display = "none";
      document.getElementById("Electricidad").style.display = "none";
      document.getElementById("Plomeria").style.display = "none";
      document.getElementById("Herreria").style.display = "none";
      document.getElementById("Otros").style.display = "none";
      document.getElementById("Plomeria").style.display = "inline";
      break;
    case "Herreria":
      document.getElementById("Ninguno").style.display = "none";
      document.getElementById("Pintura").style.display = "none";
      document.getElementById("Albañil").style.display = "none";
      document.getElementById("Electricidad").style.display = "none";
      document.getElementById("Plomeria").style.display = "none";
      document.getElementById("Herreria").style.display = "none";
      document.getElementById("Otros").style.display = "none";
      document.getElementById("Herreria").style.display = "inline";
      break;
    case "Otros":
      document.getElementById("Ninguno").style.display = "none";
      document.getElementById("Pintura").style.display = "none";
      document.getElementById("Albañil").style.display = "none";
      document.getElementById("Electricidad").style.display = "none";
      document.getElementById("Plomeria").style.display = "none";
      document.getElementById("Herreria").style.display = "none";
      document.getElementById("Otros").style.display = "none";
      document.getElementById("Otros").style.display = "inline";
    default:
      break;
  }
}

/*Calculo el precio total de la tarea multiplicando el precio por la acantidad */
function precioTotal() {
  let precio = document.getElementById("precio").value;

  let cant = document.getElementById("cantidad").value;
  let precioTotal = document.getElementById("precioResultante");
  precioTotal.value = precio * cant;
}

function cargarFila() {
  let price = parseInt(document.getElementById("precio").value);
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let servNull = document.getElementById("Ninguno").style.display;

  /*verificar si tiene contenido cargado */
  if (!isNaN(price) && !isNaN(cantidad) && servNull != "") {
    /*Por medio del if anidado verifico cual es el combo de servicio activo*/
    let serv;
    if (document.getElementById("Pintura").style.display != "none") {
      serv = "Pintura";
    } else {
      if (document.getElementById("Albañil").style.display != "none") {
        serv = "Albañil";
      } else {
        if (document.getElementById("Electricidad").style.display != "none") {
          serv = "Electricidad";
        } else {
          if (document.getElementById("Plomeria").style.display != "none") {
            serv = "Plomeria";
          } else {
            if (document.getElementById("Herreria").style.display != "none") {
              serv = "Herreria";
            } else {
              if (document.getElementById("Otros").style.display != "none") {
                serv = "Otros";
              }
            }
          }
        }
      }
    }

    let servicio = document.getElementById(serv).value;
    let precio = document.getElementById("precio").value;
    let cant = document.getElementById("cantidad").value;
    document.getElementById("cuerpoTabla").innerHTML =
      document.getElementById("cuerpoTabla").innerHTML +
      "<tr><td>" +
      servicio +
      "</td><td>" +
      precio +
      "</td><td>" +
      cant +
      "</td><td>" +
      precio * cant +
      "</td><td><button type='button' class='btn btn-danger' onclick='borrarFila(this)'>" +
      "<i class='fa fa-trash'></i></button></td>";
    document.getElementById(serv).value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";

    crearServicio(servicio, precio, cant);

    //calcularMontoTotal();
  } 
   /*Informamos al usuario el dato faltante */
  else if (isNaN(price))
    alert("Debe cargar un precio válido, ingrese nuevamente");
  else if (isNaN(cantidad))
    alert("Debe cargar una cantidad válida, ingrese nuevamente");
  else alert("Debe cargar un servicio, ingrese nuevamente");
}

/*Permite borrar una fila de la tabla de tareas cargada */
function borrarFila(boton) {
  let fila = boton.parentNode.parentNode;
  let tabla = fila.parentNode;
  tabla.removeChild(fila);
  //llamo a la función para que re-calcule nuevamente el total del presupuesto
  calcularMontoTotal();
}

function eliminarColumna() {
  const tabla = document.getElementById("cuerpoTabla");
  const filas = tabla.getElementsByTagName("tr");

  /*Recorro la tabla para eliminar la ultima celda de cada fila  */
  for (let i = 0; i < filas.length; i++) {
    const celdas = filas[i].getElementsByTagName("td");
    if (celdas.length > 0) {
      filas[i].deleteCell(-1);
    }
  }

  /*Le borro el nombre del encabezado de la ultima celda*/
  const encabezado = tabla.getElementsByTagName("th")[4];
  encabezado.textContent = "";
}


//Calculo en monto total del presupuesto, recorriendo el array de objetos servicios y lo muestra en pantalla
function calcularMontoTotalPresupuesto() {
  
 let montoTotal = 0;

   for(let i=0;i<listaServicios.length;i++)
  {
    montoTotal+=listaServicios[i].precioTotal
  }
  
  document.getElementById("total").textContent =
    "Total Presupuesto: $"+montoTotal;
  console.log(listaServicios)
}



// funcion que me permite pasar lo que hay en pantalla a PDF
function generarPDF() {
  document.getElementById("botones").style.display = "none";
  document.getElementById("tareas").style.display = "none";
  eliminarColumna();
  const element = document.getElementById("main-print");

  //A futuro modificar el nombre del archivo para personalizarlo
  const options = {
    margin: 10,
    filename: "archivo.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(element).set(options).save();
}



//Esta función me crea el array de objetos Servicios,para poder generar el presupuesto de los mismos
function crearServicio(servicio, precio, cantidad)
{
  
  listaServicios.push(new Servicio(servicio,precio,cantidad))
  listaServicios[listaServicios.length-1].calcularPrecioTotal()
  calcularMontoTotalPresupuesto(); 
  
}


function crearCliente()
{
  let cliente= new Cliente(nombre, apellido, telefono)
}