function seleccionServicio(servicio)
{
    

/*En este Switch  */    
    switch (servicio) {
        case "Pintura":
            document.getElementById("Ninguno").style.display="none";
            document.getElementById("Pintura").style.display="none";
            document.getElementById("Albañil").style.display="none";
            document.getElementById("Electricidad").style.display="none";
            document.getElementById("Plomeria").style.display="none";
            document.getElementById("Herreria").style.display="none";
            document.getElementById("Otros").style.display="none";

            document.getElementById("Pintura").style.display="inline"            
            break;
        
        case "Albañil":
            document.getElementById("Ninguno").style.display="none";
            document.getElementById("Pintura").style.display="none";
            document.getElementById("Albañil").style.display="none";
            document.getElementById("Electricidad").style.display="none";
            document.getElementById("Plomeria").style.display="none";
            document.getElementById("Herreria").style.display="none";
            document.getElementById("Otros").style.display="none";
            document.getElementById("Albañil").style.display="inline"
            break;
        case "Electricidad":
            document.getElementById("Ninguno").style.display="none";
            document.getElementById("Pintura").style.display="none";
            document.getElementById("Albañil").style.display="none";
            document.getElementById("Electricidad").style.display="none";
            document.getElementById("Plomeria").style.display="none";
            document.getElementById("Herreria").style.display="none";
            document.getElementById("Otros").style.display="none";
            document.getElementById("Electricidad").style.display="inline"
            break;
        case "Plomeria":
            document.getElementById("Ninguno").style.display="none";
            document.getElementById("Pintura").style.display="none";
            document.getElementById("Albañil").style.display="none";
            document.getElementById("Electricidad").style.display="none";
            document.getElementById("Plomeria").style.display="none";
            document.getElementById("Herreria").style.display="none";
            document.getElementById("Otros").style.display="none";
            document.getElementById("Plomeria").style.display="inline"
            break;
        case "Herreria":
            document.getElementById("Ninguno").style.display="none";
            document.getElementById("Pintura").style.display="none";
            document.getElementById("Albañil").style.display="none";
            document.getElementById("Electricidad").style.display="none";
            document.getElementById("Plomeria").style.display="none";
            document.getElementById("Herreria").style.display="none";
            document.getElementById("Otros").style.display="none";
            document.getElementById("Herreria").style.display="inline"
            break;
        case "Otros":
            document.getElementById("Ninguno").style.display="none";
            document.getElementById("Pintura").style.display="none";
            document.getElementById("Albañil").style.display="none";
            document.getElementById("Electricidad").style.display="none";
            document.getElementById("Plomeria").style.display="none";
            document.getElementById("Herreria").style.display="none";
            document.getElementById("Otros").style.display="none";
            document.getElementById("Otros").style.display="inline"
        default:
            break;
    }

}

function precioTotal()
{
    let precio= document.getElementById("precio").value;
    
    let cant= document.getElementById("cantidad").value;
let precioTotal= document.getElementById("precioResultante");
precioTotal.value=precio*cant 
}


function cargarFila()
{

    /*Por medio del if anidado verifico cual es el combo de servicio activo*/
    let serv;
    if(document.getElementById("Pintura").style.display!="none")
    {
        serv="Pintura"
    }
    else 
        {
            if(document.getElementById("Albañil").style.display!="none")
            {
                serv="Albañil"
            }
            else
            {
                if(document.getElementById("Electricidad").style.display!="none")
                {
                    serv="Electricidad"
                }
                else
                {
                    if(document.getElementById("Plomeria").style.display!="none")
                    {
                        serv="Plomeria"
                    }
                    else
                    {
                        if(document.getElementById("Herreria").style.display!="none")
                        {
                            serv="Herreria"
                        }
                        else
                        {
                            if(document.getElementById("Otros").style.display!="none")
                            {
                                serv="Otros"
                            }
                        }
                    }
                }
                
            }

            
        }

    



    let servicio= document.getElementById(serv).value;
    let precio= document.getElementById("precio").value;
    let cant= document.getElementById("cantidad").value;
    document.getElementById("cuerpoTabla").innerHTML=document.getElementById("cuerpoTabla").innerHTML+ "<tr><td>"+servicio+"</td><td>"+
    precio+"</td><td>"+cant+"</td><td>"+
    precio*cant+"</td><td><button type='button' class='btn btn-danger' onclick='borrarFila(this)'>"+
    "<i class='fa fa-trash'></i></button></td>"
    document.getElementById(serv).value=""
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";
    calcularMontoTotal()
}

function borrarFila(boton) {
    let fila = boton.parentNode.parentNode;
    let tabla = fila.parentNode;
    tabla.removeChild(fila);
  }
  

