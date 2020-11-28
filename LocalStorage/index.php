
<?php require "vista_vtas.php";?> 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ventas CABBera</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link href="slick.grid.css" rel="stylesheet"/>
    <!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="css/main.css">

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->

    <!-- <script src="http://code.jquery.com/jquery-1.8.3.min.js" rel="stylesheet"/></script> -->

    <link href="https://code.jquery.com/ui/1.11.4/themes/blitzer/jquery-ui.css" rel="stylesheet"/>
    <!-- <link href="slick-default-theme.css" rel="stylesheet"/> -->
    <link href="css/slick-default-theme.css" rel="stylesheet"/>
    <link href="css/pildorasgrid.css" rel="stylesheet"/>

    <!-- <link rel="stylesheet" href="style.css" /> -->

    
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    <script src="lib/jquery.event.drag-2.2.js"></script>
    <script src="lib/gridformatters.js"></script>
    <!-- <script src="lib/productdatasource.js"></script> -->
    <script src="lib/ProductsDataProvider.js"></script>
    <script src="slick.core.js"></script>
    <script src="lib/slick.grid.js"></script>
    <script src="lib/grideditors.js"></script>
    <script src="lib/accounting.js"></script>

</head>
<body>
<!-- inicio pagina     -->
<main class="container-fluid">
    <div id = "header" >
        <nav class="navbar navbar-expand navbar-dark bg-primary">
          <a href="#" class="navbar-brand" >
            CABBera
        </a>
        <small class="text-white">Control de Alimentos y Bebidas</small>
        <div class="navbar-collapse">
            <ul class="navbar-nav ml-auto" > 
              <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Service</a></li>
          </ul>

      </div>
      </nav>

    </div>
    
    <div id = "prodcts" style="width:auto; height:500px;" ></div>

    <div id = "detalle">Section 
        <div id ="det1">
            <br><br>
            <table id="tabla_detalle" with="auto" height="auto">

            </table>
        </div>
        <div id="det2">
            <!-- <button>  Boton1  </button> -->
            <label for="subto" id="lab1" class="text-white">Subtotal</label>
            <input type="text" id="subto" class="totales" data-estado=0><br>

            <label for="ipcon" id="lab2" class="text-white">Imp. Cons.</label>
            <input type="text" id="ipcon" class="totales" data-estado=0><br>

            <label for="total" id="lab3" class="text-white">Total</label>
            <input type="text" id="total" class="totales" data-estado=0>
        </div>
    </div>
    <div id = "botones" >
        <div id="botones1" > 
        </div>
        <div id="botones2">
            <input type="submit" class="btnCta" id="m0" value="0" data-estado=99 data-idVta=0 >
        </div>   
    </div>    
    <!-- <div id = "botones"> -->
        <div id = "pie" class="  ">">
            <!-- <input type="submit" class="btnsVarios" id="btnLimpiar" value="Limpiar"  > -->
            <!-- <button class="btn btn-primary">Limpiar</button> -->

            <a class="btn btn-primary btn-h-1" id="btnlimpiar">Limpiar </a>
            <a class="btn btn-danger  " id="btnsalir">Salir </a>

        </div>
</main>
<!-- fin pagina -->
<script type="text/javascript" >
       // $(function() {



        if (typeof(Storage) !== "undefined"){
            var products = localStorage.getItem("prodctsJson"); 
            products = JSON.parse(products);
            if (products == null) {
              var datos = JSON.stringify([ <?php echo obtenerProductos_vtas();?> ]);
              // console.log datos;
              localStorage.setItem('prodctsJson', datos );
            } 
            // else alert("localstorage ocupado ya");
           
          } 
          else {
           alert("No soporta Web Storage");
          }



      // }

  </script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="js/despachador_vtas.js"></script>

</body>
</html>

