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

function calcularMontoTotal() {
  const tabla = document.getElementById("cuerpoTabla");
  const filas = tabla.getElementsByTagName("tr");
  let montoTotal = 0;

  /*Recorro la tabla para calcular el monto total del presupuesto  */
  for (let i = 0; i < filas.length; i++) {
    const celdas = filas[i].getElementsByTagName("td");
    if (celdas.length >= 4) {
      montoTotal = montoTotal + parseInt(celdas[3].innerText);
    }
  }

  document.getElementById("total").textContent =
    "Total Presupuesto: $" + montoTotal;
}
