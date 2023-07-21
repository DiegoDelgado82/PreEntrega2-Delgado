function eliminarColumna() {
    const tabla = document.getElementById('cuerpoTabla');
    const filas = tabla.getElementsByTagName('tr');
  
    // Eliminar la última celda (columna) de cada fila
    for (let i = 0; i < filas.length; i++) {
      const celdas = filas[i].getElementsByTagName('td');
      if (celdas.length > 0) {
        filas[i].deleteCell(-1);
      }
    }
  
    // Eliminar la última celda del encabezado (thead)
    const encabezado = tabla.getElementsByTagName('th')[4];
    encabezado.textContent=""
  }

  function calcularMontoTotal() {
    const tabla = document.getElementById('cuerpoTabla');
    const filas = tabla.getElementsByTagName('tr');
    let montoTotal = 0;
  
    for (let i = 0; i < filas.length; i++) {
      const celdas = filas[i].getElementsByTagName('td');
      if (celdas.length >= 4) {
        const prTotal = parseFloat(celdas[3].innerText);
        if (!isNaN(prTotal)) {
          montoTotal += prTotal;
        }
      }
    }
  
    document.getElementById("total").textContent= "Total Presupuesto: $"+ montoTotal;
  }
  
  


  