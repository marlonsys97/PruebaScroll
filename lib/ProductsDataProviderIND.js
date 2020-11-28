var x = 1;
var dataBase = null;
var indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

var elements = [];

var _data;


// dataBase.onsuccess = function(e) {
//   // alert('CABBERA onsuccess');
//   // loadAll();
//   // dataBase= e.target.result;
//   ProductsDataProvider();
// };

function ProductsDataProviderLS() {
  // for (x=0; x<=localStorage.length-1; x++)  {
  //  clave = localStorage.key(x);
  //  document.write("La clave " + clave + "contiene el valor " + localStorage.getItem(clave) + "<br />");
  // }
  // // var _data = products;

  // var _data = localStorage.getItem("prodctsJson");
  dataBase = indexedDB.open("CABBERA", 1);

  // dataBase.onupgradeneeded = function(e) {
  //   alert("CABBERA onupgradeneeded ProdctsDataProvider");
  //   // var active = dataBase.result;
  //   var dataBase = e.target.result;
  //   var object = dataBase.createObjectStore("prodcts", {
  //     keyPath: "serl",
  //     autoIncrement: true
  //   });
    // var object = dataBase.createObjectStore("prodcts");
  // };

  dataBase.onsuccess = function(e) {
      var active = dataBase.result;

      var data = active.transaction(["prodcts"], "readonly");
      var object = data.objectStore("prodcts");

      // var _data = object.getAll();

      object.openCursor().onsuccess = function(e) {
        var result = e.target.result;

        if (result === null) {
          return;
        }

        elements.push(result.value);
        result.continue();
      };

      data.oncomplete = function() {
        _data = JSON.stringify(elements);
        _data = JSON.parse(_data);
        elements = [];
      };

      // _data = JSON.parse(_data);

      // for(var n=0; n < json["datosJson"].length; n++){
      //  console.log
      // }

      this.getLength = function() {
        return _data.length;
      };

      this.getItem = function(index) {
        return _data[index];
      };

      this.focus = function() {
        $input.focus();
      };

      this.onCellChange = function(e, args) {
        // console.log(e);
        var grid = args.grid;

        if (grid.getColumns()[args.cell].field == "cant") {
          // var celda= grid.getActiveCell();
          // console.log (celda);

          add_row_TabDetll(
            x++,
            // _data[args.row].id,
            // _data[args.row].nompro,
            // _data[args.row].categ,
            // _data[args.row].cant,
            // _data[args.row].valor

            _data[args.row].id,
            _data[args.row].nompro,
            _data[args.row].categ,
            _data[args.row].cant,
            _data[args.row].valor
          );
          // alert(args.row);
          // grid.invalidateRow(0);
          // grid.render();
        }
      };

      this.onKeyDown = function(e, args) {
        // var grid = args.grid;

        if ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)) {
          // alert("Ha tecleado una letra");
          // this.gotoCell(i,0);
          // console.log (_data);
          for (var i = 0; i < _data.length; i++) {
            if (_data[i].inicial == e.key.toUpperCase()) {
              this.gotoCell(i, 0);
              // this.resetActiveCell();
              // this.setActiveCell(i,0);
              // grid.invalidateRow(0);
              // grid.render();
            }
          }
        } else if (e.which >= 49 && e.which <= 57) {
          this.gotoCell(args.row, 1);
        }
      };
    }    
    _dat='';
}

