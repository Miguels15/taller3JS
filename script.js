function iniciar(){
    var select = document.getElementById("selfab");
    var button = document.getElementById("enviar");

    if(select.addEventListener){
        select.addEventListener("change", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
                document.frmcar.selmod);
        }, false);
    }
    else{
        select.attachEvent("onchange", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
            document.frmcar.selmod);
            });
    }

    /*
        Al producirse un lcick sobre el boton de envio
        invocar los metodos del objeto carro que mostratan
        los valores ingresado en el formulario
    */
   var nombre2=document.getElementById("nameDueno").value;

    if(button.addEventListener){
        button.addEventListener("click", function(){
           // var seleccion = showRadioSelected(document.frmcar.radcolor);
            carro.pedido(document.frmcar.selfab.value, document.frmcar.selmod.value,
                /*seleccion*/document.frmcar.radcolor.value, document.frmcar.txtanio.value,document.frmcar.nameDueno.value, document.frmcar.duiDueno.value, document.frmcar.nitDueno.value, document.frmcar.txtplaca.value, document.frmcar.txtfalla.value);
                datos.mostrar();
                carro.mostrar();
            
        }, false);
    }
    else{
    button.attachEvent("onclik", function(){/*var seleccion = showRadioSelected(document.frmcar.radcolor);*/
            carro.pedido(document.frmcar.selfab.value, document.frmcar.selmod.value,
            /*seleccion*/document.frmcar.radcolor.value, document.frmcar.txtanio.value, document.frmcar.nameDueno.value, document.frmcar.duiDueno.value, document.frmcar.nitDueno.value, document.frmcar.txtplaca.value, document.frmcar.txtfalla.value);
            carro.mostrar();
            datos.mostrar();
        });
    }
 //FIN FUNCION
 
 

}

//Inicializando matriz para manejar las marcas y sus respectivos modelos
var marcas = new Array(7);
marcas["Toyota"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4 Runner", "Hilux"];
marcas["Nissan"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder", "Patrol", "X-Trail", "Frontier"];
marcas["Hyundai"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "i30"];
marcas["Volkswagen"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg", "Saveiro"];
marcas["Chevrolet"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy", "Avalanche", "Trailblazer"];
marcas["Honda"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot", "RidgeLine"];
marcas["Mitsubishi"] = ["Lancer", "Galant", "Eclipse", "Montero", "Nativa", "Outlander", "L200"];

//Creando el objeto carro con el constructor Object()
var carro = new Object();
var datos= new Object();
//Propiedades
carro.fabricante = "";
carro.modelo = "";
carro.color = "";
carro.anio = "";
carro.duenoName = "";
carro.duenoDui = "";
carro.duenoNit = "";
carro.placa = "";
carro.falla = "";

//Metodos del objeto
carro.pedido = function(fab, mod, col, an, duenName, duenDui, duenNit, placa, falla){
    carro.fabricante = fab;
    carro.modelo = mod;
    carro.color = col;
    carro.anio = an;
    carro.duenoName = duenName;
    carro.duenoDui = duenDui;
    carro.duenoNit = duenNit;
    carro.placa = placa;
    carro.falla = falla;
}

carro.mostrar = function(){
    var tabla = "";
    var info = document.getElementById('infocarro');
    tabla += "<table class=\"carinfo\">\n";
    tabla += "<thead>\n\t<tr>\n";
    
    tabla += "\t\t<th colspan=\"2\">Datos del carro</th>\n";
    tabla += "\t</tr>\n</thead>\n";
    tabla += "<tbody>\n\t";
    tabla += "\t<tr>\n\t\t<td>Fabricante: </td>\n";
    tabla += "\t\t<td>" + carro.fabricante + "</td>\n\t</tr>\n";
    tabla += "\t<tr>\n\t\t<td>Modelo: </td>\n";
    tabla += "\t\t<td>" + carro.modelo + "</td>\n\t</tr>\n";
    tabla += "\t<tr>\n\t\t<td>Color: </td>\n";
    tabla += "\t\t<td>" + carro.color + "</td>\n\t</tr>\n";
    tabla += "\t<tr>\n\t\t<td>Año: </td>\n";
    tabla += "\t\t<td>" + carro.anio + "</td>\n\t</tr>\n";
    tabla += "\t<tr>\n\t\t<td>Placa: </td>\n";
    tabla += "\t\t<td>" + carro.placa + "</td>\n\t</tr>\n";
    tabla += "\t<tr>\n\t\t<td>Fallas: </td>\n";
    tabla += "\t\t<td>" + carro.falla + "</td>\n\t</tr>\n";
    tabla += "\t</tbody>\n</table>\n";
    info.innerHTML = tabla;
}

datos.mostrar = function(){
    var tabla2 = "";
    var info = document.getElementById('infopersona');
    tabla2 += "<table class=\"carinfo\">\n";
    tabla2 += "<thead>\n\t<tr>\n";
    tabla2 += "\t\t<th colspan=\"2\">Datos del resgistro actual</th>\n";
    tabla2 += "\t\t<th colspan=\"2\">Datos de la persona</th>\n";
    tabla2 += "\t<tr>\n\t\t<td>Nombre: </td>\n";
    tabla2 += "\t\t<td>" + carro.duenoName + "</td>\n\t</tr>\n";
    tabla2 += "\t<tr>\n\t\t<td>Dui: </td>\n";
    tabla2 += "\t\t<td>" + carro.duenoDui + "</td>\n\t</tr>\n";
    tabla2 += "\t<tr>\n\t\t<td>Nit: </td>\n";
    tabla2 += "\t\t<td>" + carro.duenoNit + "</td>\n\t</tr>\n";
    tabla2 += "\t</tbody>\n</table>\n";
    info.innerHTML = tabla2;
}


function showRadioSelected(radiogroup){
    var seleccionado;
    var numradios = radiogroup.length;
    for(var i=0; i<numradios; i++){
        if(radiogroup[i].checked){
            seleccionado = radiogroup[i].value;
        }
    }
    return seleccionado;
}

function removeOptions(optionMenu){
    for(i=0; i<optionMenu.options.length; i++){
        optionMenu.options[i] = null;
    }
}

function addOptions(optionList, optionMenu){
    var i=0;
    removeOptions(optionMenu);
    for(i=0; i<optionList.length; i++){
        optionMenu[i] = new Option(optionList[i], optionList[i]);
    }
}



//Asociando los que manejaran los eventos load al cargar la pagina

if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
} else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}
