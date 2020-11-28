$(function() {
  var columnas= [
            // {id: "id", name: "ID", field: "id"},
            {id: "nompro",  field: "nompro", width: 300, headerCssClass: "headColumn", resizable: false,headerCssClass: "headColumn" },
            // {id: "valor", name: "Valor", field: "valor"},
            // {id: "inicial", name: "Inicial.", field: "inicial"},
            // {id: "categ", name: "Categ..", field: "categ"},
            {id: "cant",  field: "cant", width: 60, headerCssClass: "headColumn", resizable: false, editor: Slick.Editors.Numeric, cssClass: "numericCell" },

            ];

            var options = {
               // enableCellNavigation: false,
               // enableColumnReorder: false,
               editable: true,
               autoEdit: true,
             };

             var datos=[ <?php echo obtenerProductos_vtas();?> ]  
         // console.log datos[];

         // grid = new Slick.Grid($("#sidebar1"), datos, columnas, options); 
         var grid = new Slick.Grid("#sidebar1", datos, columnas,options);
         grid.onCellChange.subscribe(function(e, args) {
          var grid = args.grid;
          if (grid.getColumns()[args.cell].field == "cant") {
                // alert(args.row);
                alert(datos[(args.row)].valor * datos[(args.row)].cant) ;
                // alert(args.row);
                grid.invalidateRow(0);
                grid.render();
              }
            });
       });


<script type="text/javascript" >
$(function() {
  var columnas= [
            // {id: "id", name: "ID", field: "id"},
            {id: "nompro",  field: "nompro", width: 300, headerCssClass: "headColumn", resizable: false,headerCssClass: "headColumn" },
            // {id: "valor", name: "Valor", field: "valor"},
            // {id: "inicial", name: "Inicial.", field: "inicial"},
            // {id: "categ", name: "Categ..", field: "categ"},
            {id: "cant",  field: "cant", width: 60, headerCssClass: "headColumn", resizable: false, editor: Slick.Editors.Numeric, cssClass: "numericCell" },

            ];

            var options = {
               // enableCellNavigation: false,
               // enableColumnReorder: false,
               editable: true,
               autoEdit: true,
             };

         // console.log datos[];

        // if (typeof(Storage)) !== "undefined" {
        // } else {
        //     alert("No soporta Web Storage");
        // }

        // console.log "localStorage.datos";
         // grid = new Slick.Grid($("#sidebar1"), datos, columnas, options); 
         // var dataProvider = new ProductsDataProvider() ;
         var datos=[ <?php echo obtenerProductos_vtas();?> ]  
         var grid = new Slick.Grid("#divprodcts", datos, columnas,options);

         grid.onCellChange.subscribe(function(e, args) {
          var grid = args.grid;
          if (grid.getColumns()[args.cell].field == "cant") {
                // alert(args.row);
                alert(datos[(args.row)].valor * datos[(args.row)].cant) ;
                // alert(args.row);
                grid.invalidateRow(0);
                grid.render();
              }
            });
       });

</script>

.container div{
  border-width:4px;
  border-style:solid;
  border-color:blue;
  width:50%;


}


.container{
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 10px;

  grid-template-rows: 100px 360px 230px;
  grid-template-columns: 200px 3fr 200px; 
  grid-template-areas: "head head head"
  "side1 main side2"
  "side1 foot foot"
}

.header {
  grid-area: head;
}

.sidebar1 {
  grid-area:side1;
  height: 600px;
  /*width: 600px;*/

  border: 2px solid blue;
  overflow-y: scroll;
  /*margin-left: 100px;*/
}

.main {
  grid-area: main;
}

.sidebar2 {
  grid-area: side2;
}

.footer {
  grid-area: foot;
}


#global {
  height: 600px;
  width: 600px;
  border: 2px solid blue;
  background: #E8E8E8;
  overflow-y: scroll;
  margin-left: 100px;
}


var grid; var columns = [{ id: "time", name: "Date", field: "time" }, { id: "rating", name: "Rating", formatter: starFormatter // custom formatter } ]; 
var options = { enableColumnReorder: false, multiColumnSort: true };
 // When user clicks button, fetch data via Ajax, and bind it to the grid.
  $('#mybutton').click(function() { $.getJSON(my_url, function(data) { grid = new Slick.Grid("#myGrid", data, columns, options); }); }); 

  