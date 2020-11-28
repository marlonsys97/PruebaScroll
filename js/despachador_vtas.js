var READY_STATE_COMPLETE = 4;
var OK = 200;
//Variables
var ajax = null;
// var botones = document.querySelector("#botones");

var grid;

var btnClick;

var tabla = document.getElementById("tabla_detalle");
var subto = document.getElementById("subto");
var ipcon = document.getElementById("ipcon");
var total = document.getElementById("total");
var btnLimpiar = document.getElementById("btnlimpiar");

// var totales=document.querySelectorAll(".redondeado");

var respuesta = document.querySelector("#botones2");

// var mar1=document.getElementById("mar1");

// var btnsCta=document.querySelectorAll(".btnCta");

var $sub = 0;

function objetoAjax() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function ejecutarAJAX(datos) {
  ajax = objetoAjax();
  ajax.onreadystatechange = enviarDatos;
  ajax.open("POST", "controlador_vtas.php", true);
  ajax.responseType = "text";
  /*
     http://es.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions
     http://sites.utoronto.ca/webdocs/HTMLdocs/Book/Book-3ed/appb/mimetype.html
     */
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  ajax.send(datos);
}

function enviarDatos() {
  if (ajax.readyState == READY_STATE_COMPLETE) {
    if (ajax.status == OK) {
      // respuesta.style.display = "inline";
      // respuesta.style.color = "black";

      // respuesta.innerHTML = ajax.responseText;

      if (ajax.responseText.indexOf("insertarDetalle") > -1) {
        let datosRecib = JSON.parse(ajax.responseText);

        btnClick.dataset.idVta = datosRecib.idMaster;

        insertarDetalle(datosRecib.idMaster);
      }

      if (ajax.responseText.indexOf("insertDetll_OK") > -1) {
        limpiarPedido();
      }

      if (ajax.responseText.indexOf("traeDetllVentaOK") > -1) {
        // let datosRecib= JSON.parse(ajax.responseText);
        let r = ajax.responseText.slice(0, -16); //quitamos la cadena "traeDetllVentaOK" del response
        let det = JSON.parse(r);
        eliminarFilasDetll();
        // add_row_TabDetll($ite, $id, $nom, $cat, $can, $val)
        for (x = 0; x < det.length; x++) {
          add_row_TabDetll(
            x + 1,
            det[x].ventD_id,
            det[x].prodct_nombr,
            det[x].prodct_catgr,
            det[x].ventD_cantdd,
            det[x].ventD_valor
          );
        }
      }

      // if (ajax.responseText.indexOf("m12") > -1) {
      //   respuesta = document.querySelector("#botones1");
      //   respuesta.innerHTML = ajax.responseText;
      // }
    } else {
      //console.log(ajax);
      //alert("nooo");
      alert(
        "El servidor NO contestó\nError " + ajax.status + ": " + ajax.statusText
      );
    }
  }
}

function limpiarPedido() {
  grid.destroy();
  crearGrid();
  eliminarFilasDetll();
  // tabla.innerHTML="";
  // let filas = tabla.getElementsByTagName("tr");
  // tabla.removeChild(filas);
}

function eliminarFilasDetll() {
  tabla.innerHTML = "";

  subto.value = "";
  ipcon.value = "";
  total.value = "";

  subto.dataset.estado = 0;
  ipcon.dataset.estado = 0;
  total.dataset.estado = 0;

  $sub = 0;
}

function crearBotonesVenta() {
  // let datos = "";
  // datos = "transaccion=crearBotonesVenta";
  // ejecutarAJAX(datos);


  

     for (var x =  1; x <= 32; x++) {
        // var boton = document.createElement('input');
        var bt = document.getElementById("m0");
        var boton = bt.cloneNode(true);
        boton.dataset.estado = 0;
        // boton.type = 'button';
        boton.id = 'm'+ x;
        // boton.className = "btnCta";
        boton.value = x;
        document.getElementById("botones1").appendChild(boton);
    }
}

function add_row_TabDetll($ite, $id, $nom, $cat, $can, $val) {
  var fila = tabla.insertRow();

  // fila.style.paddingLeft="85px"

  var campo1 = document.createElement("input"); //---ite
  campo1.type = "text";
  campo1.style.backgroundColor = "Lavender";
  // campo1.style.borderCollapse = "collapse";
  campo1.style.border = "0px";
  campo1.style.borderBottom = "blue 1px  solid";
  campo1.style.color = "blue";
  campo1.className = "celdaDtll";

  var campo2 = campo1.cloneNode(true); //---non
  var campo3 = campo1.cloneNode(true); //---cat
  var campo4 = campo1.cloneNode(true); //---can
  var campo5 = campo1.cloneNode(true); //---val
  var campo6 = campo1.cloneNode(true); //---id

  campo1.style.textAlign = "center";
  campo1.style.width = "30px";
  campo1.style.backgroundColor = "blue";
  campo1.style.color = "white";

  campo1.value = $ite;

  campo2.style.textAlign = "left";
  campo2.style.width = "320px";
  campo2.style.paddingLeft = "5px";
  campo2.value = $nom;

  campo3.style.width = "0px";
  campo3.value = $cat;

  campo4.style.textAlign = "center";
  campo4.style.width = "30px";
  campo4.value = $can;

  campo5.style.textAlign = "right";
  campo5.style.width = "80px";
  campo5.style.paddingRight = "15px";
  campo5.value = accounting.formatNumber($val * parseInt($can));
  $sub += $val * parseInt($can);

  campo6.value = $id;
  campo6.style.width = "0px";

  var celda1 = fila.insertCell(0);
  var celda2 = fila.insertCell(1);
  var celda3 = fila.insertCell(2);
  var celda4 = fila.insertCell(3);
  var celda5 = fila.insertCell(4);
  var celda6 = fila.insertCell(5);

  // var campo4 = document.createElement("input");

  // campo4.type = "button";
  // campo4.value = "Borrar Fila";
  // campo4.onclick = function() {

  // 	var fila = this.parentNode.parentNode;
  // 	var tbody = tabla.getElementsByTagName("tbody")[0];

  // 	tbody.removeChild(fila);

  celda1.appendChild(campo1); //---item
  celda2.appendChild(campo2); //---nom
  celda3.appendChild(campo3); //---cat
  celda4.appendChild(campo4); //---can
  celda5.appendChild(campo5); //---val
  celda6.appendChild(campo6); //---id

  subto.style.textAlign = "right";
  subto.style.paddingRight = "15px";
  // subto.style.height = "5px";
  subto.value = accounting.formatNumber($sub);

  ipcon.style.textAlign = "right";
  ipcon.style.paddingRight = "15px";

  total.style.textAlign = "right";
  total.style.paddingRight = "15px";
  total.style.marginTop = "5px";
  total.style.fontSize = "1.5em";
  total.style.fontWeight = "bold";

  total.value = accounting.formatNumber($sub);
}

function vaciar_campo(input) {
  input.value = "";
}

function ventaClick(evento) {
  evento.preventDefault();
  btnClick = document.querySelector("#m" + evento.target.value);
  // var fec = new Date();
  let filas = tabla.getElementsByTagName("tr");
  let datos = "";
  // if (evento.button==0 && btnClick.dataset.idVta == 0)    // evento,button = 0  significa que dio click con el izq

  if (evento.button == 0 && filas.length >= 1) {
    // evento,button = 0  significa que dio click con el izq
    if (evento.target.dataset.estado == 0) {
      //la mesa recibe y crea cuenta 1a vez

      btnClick.dataset.estado = 1; //activa el boton
      datos =
        "cue=" +
        btnClick.value +
        "&" +
        "val=" +
        accounting.unformat(total.value) +
        "&" +
        "usr=" +
        1 +
        "&";
      datos += "transaccion=insertarVentaM";
      ejecutarAJAX(datos);
    } 
    else {
      //la mesa ya ha sido creada, tiene items y se le esta adicionando
      insertarDetalle(btnClick.dataset.idVta); //por lo tanto el boton ya tiene ID de venta
    }
  }
  else if (evento.button == 2) {
    //click con el boton derecho
    if (evento.target.dataset.estado == 1) {
      //la cuenta ya ha recibido
      datos = "idVta=" + btnClick.dataset.idVta + "&";
      datos += "transaccion=traerVenta";
      ejecutarAJAX(datos);
    }
  }
}

//  Cell(0); //---item
//  Cell(1); //---nom
//  Cell(2); //---cat
//  Cell(3); //---can
//  Cell(4); //---val
//  Cell(5); //---id

function insertarDetalle(idM) {
  let filas = tabla.getElementsByTagName("tr");
  let detalle = {};
  let datos = "";
  let cantdd;
  for (let i = 0; i < filas.length; i++) {
    // var var1=tabla.tBodies[i].rows[i].cells[0].childNodes[0].value;
    cantdd = parseInt(tabla.tBodies[0].rows[i].cells[3].childNodes[0].value);
    idProd = parseInt(tabla.tBodies[0].rows[i].cells[5].childNodes[0].value);
    valor =
      accounting.unformat(
        tabla.tBodies[0].rows[i].cells[4].childNodes[0].value
      ) / cantdd;
    // detalle['itm'+i] =
    detalle[i] = {
      idM,
      idProd,
      cantdd,
      valor
    };
  }
  // console.log(detalle);
  let jsonDetll = JSON.stringify(detalle);
  // console.log(jsonDetll);
  // datos = "cue="+btnClick.value+"&"+"val="+accounting.unformat(total.value)+"&"+"usr="+ 1 +"&";
  // datos = "detll="+ jsonDetll +"&";
  datos = "detll=" + jsonDetll + "&";

  datos += "transaccion=insertarVentasD";
  ejecutarAJAX(datos);
}
// var nom=tabla.tBodies[0].rows[i].cells[1].childNodes[0].value;
// var cat=tabla.tBodies[0].rows[i].cells[2].childNodes[0].value;
// var can=parseInt(tabla.tBodies[0].rows[i].cells[3].childNodes[0].value);
// var val=(accounting.unformat(tabla.tBodies[0].rows[i].cells[4].childNodes[0].value)/can);
// var id= tabla.tBodies[0].rows[i].cells[5].childNodes[0].value;

function crearGrid() {
  var columnas = [
    // {id: "id", name: "ID", field: "id"},
    {
      id: "nompro",
      field: "nompro",
      width: 350,
      headerCssClass: "headColumn",
      cssClass: "textCell"
    },
    // {id: "valor", name: "Valor", field: "valor", cssClass: "textCell"},
    // {id: "inicial", name: "Inicial.", field: "inicial"},
    // {id: "categ", name: "Categ..", field: "categ"},
    {
      id: "cant",
      field: "cant",
      width: 50,
      headerCssClass: "headColumn",
      resizable: false,
      editor: Slick.Editors.Numeric,
      cssClass: "numericCell"
    }
  ];

  var options = { 
    // enableCellNavigation: false,
    // enableColumnReorder: false,
    editable: true,
    autoEdit: true,
    enableTextSelectionOnCells: true
    // explicitInitialization : true,
  };
  var dataProvider = new ProductsDataProvider

  grid = new Slick.Grid("#prodcts", dataProvider, columnas, options);
  // $('.slick-cell:first').click();
  grid.gotoCell(0, 1);
  grid.onKeyDown.subscribe(dataProvider.onKeyDown);
  grid.onCellChange.subscribe(dataProvider.onCellChange);
}

function alCargarElDocumento(evento) {
  crearGrid();
  // grid.init();
  // console.log(grid.getData());
  window.oncontextmenu = function() {
    return false;
  };

  crearBotonesVenta();
  var btnsCta = document.querySelectorAll(".btnCta");

  for (var i = 1; i < btnsCta.length; i++) {
    btnsCta[i].addEventListener("mousedown", ventaClick);
  }

  btnLimpiar.addEventListener("click", limpiarPedido);
}
//Prodct
window.addEventListener("load", alCargarElDocumento);
