var products = [
{ ProductID: 514, ProductNumber: "SA-M198", Name: "LL Mountain Seat Assembly", Color: null, StandardCost: 98.77, ProductSubcategoryID: null },
{ ProductID: 515, ProductNumber: "SA-M237", Name: "ML Mountain Seat Assembly", Color: null, StandardCost: 108.99, ProductSubcategoryID: null },
{ ProductID: 516, ProductNumber: "SA-M687", Name: "HL Mountain Seat Assembly", Color: null, StandardCost: 145.87, ProductSubcategoryID: null },
{ ProductID: 517, ProductNumber: "SA-R127", Name: "LL Road Seat Assembly", Color: null, StandardCost: 98.77, ProductSubcategoryID: null },
{ ProductID: 518, ProductNumber: "SA-R430", Name: "ML Road Seat Assembly", Color: null, StandardCost: 108.99, ProductSubcategoryID: null },
{ ProductID: 519, ProductNumber: "SA-R522", Name: "HL Road Seat Assembly", Color: null, StandardCost: 145.87, ProductSubcategoryID: null },
{ ProductID: 520, ProductNumber: "SA-T467", Name: "LL Touring Seat Assembly", Color: null, StandardCost: 98.77, ProductSubcategoryID: null },
{ ProductID: 521, ProductNumber: "SA-T612", Name: "ML Touring Seat Assembly", Color: null, StandardCost: 108.99, ProductSubcategoryID: null },
{ ProductID: 522, ProductNumber: "SA-T872", Name: "HL Touring Seat Assembly", Color: null, StandardCost: 145.87, ProductSubcategoryID: null },
{ ProductID: 680, ProductNumber: "FR-R92B-58", Name: "HL Road Frame - Black, 58", Color: "Black", StandardCost: 1059.31, ProductSubcategoryID: 14 },
{ ProductID: 706, ProductNumber: "FR-R92R-58", Name: "HL Road Frame - Red, 58", Color: "Red", StandardCost: 1059.31, ProductSubcategoryID: 14 },
{ ProductID: 707, ProductNumber: "HL-U509-R", Name: "Sport-100 Helmet, Red", Color: "Red", StandardCost: 13.09, ProductSubcategoryID: 31 },
{ ProductID: 708, ProductNumber: "HL-U509", Name: "Sport-100 Helmet, Black", Color: "Black", StandardCost: 13.09, ProductSubcategoryID: 31 },
{ ProductID: 709, ProductNumber: "SO-B909-M", Name: "Mountain Bike Socks, M", Color: "White", StandardCost: 3.40, ProductSubcategoryID: 23 },
{ ProductID: 710, ProductNumber: "SO-B909-L", Name: "Mountain Bike Socks, L", Color: "White", StandardCost: 3.40, ProductSubcategoryID: 23 },
{ ProductID: 711, ProductNumber: "HL-U509-B", Name: "Sport-100 Helmet, Blue", Color: "Blue", StandardCost: 13.09, ProductSubcategoryID: 31 },
{ ProductID: 712, ProductNumber: "CA-1098", Name: "AWC Logo Cap", Color: "Multi", StandardCost: 6.92, ProductSubcategoryID: 19 },
{ ProductID: 713, ProductNumber: "LJ-0192-S", Name: "Long-Sleeve Logo Jersey, S", Color: "Multi", StandardCost: 38.49, ProductSubcategoryID: 21 },
{ ProductID: 714, ProductNumber: "LJ-0192-M", Name: "Long-Sleeve Logo Jersey, M", Color: "Multi", StandardCost: 38.49, ProductSubcategoryID: 21 },
{ ProductID: 715, ProductNumber: "LJ-0192-L", Name: "Long-Sleeve Logo Jersey, L", Color: "Multi", StandardCost: 38.49, ProductSubcategoryID: 21 },
{ ProductID: 716, ProductNumber: "LJ-0192-X", Name: "Long-Sleeve Logo Jersey, XL", Color: "Multi", StandardCost: 38.49, ProductSubcategoryID: 21 },
{ ProductID: 717, ProductNumber: "FR-R92R-62", Name: "HL Road Frame - Red, 62", Color: "Red", StandardCost: 868.63, ProductSubcategoryID: 14 },
{ ProductID: 718, ProductNumber: "FR-R92R-44", Name: "HL Road Frame - Red, 44", Color: "Red", StandardCost: 868.63, ProductSubcategoryID: 14 },
{ ProductID: 719, ProductNumber: "FR-R92R-48", Name: "HL Road Frame - Red, 48", Color: "Red", StandardCost: 868.63, ProductSubcategoryID: 14 },
{ ProductID: 720, ProductNumber: "FR-R92R-52", Name: "HL Road Frame - Red, 52", Color: "Red", StandardCost: 868.63, ProductSubcategoryID: 14 },
{ ProductID: 721, ProductNumber: "FR-R92R-56", Name: "HL Road Frame - Red, 56", Color: "Red", StandardCost: 868.63, ProductSubcategoryID: 14 },
{ ProductID: 722, ProductNumber: "FR-R38B-58", Name: "LL Road Frame - Black, 58", Color: "Black", StandardCost: 204.63, ProductSubcategoryID: 14 },
{ ProductID: 723, ProductNumber: "FR-R38B-60", Name: "LL Road Frame - Black, 60", Color: "Black", StandardCost: 204.63, ProductSubcategoryID: 14 },
{ ProductID: 724, ProductNumber: "FR-R38B-62", Name: "LL Road Frame - Black, 62", Color: "Black", StandardCost: 204.63, ProductSubcategoryID: 14 },
{ ProductID: 725, ProductNumber: "FR-R38R-44", Name: "LL Road Frame - Red, 44", Color: "Red", StandardCost: 187.16, ProductSubcategoryID: 14 },
{ ProductID: 726, ProductNumber: "FR-R38R-48", Name: "LL Road Frame - Red, 48", Color: "Red", StandardCost: 187.16, ProductSubcategoryID: 14 },
{ ProductID: 727, ProductNumber: "FR-R38R-52", Name: "LL Road Frame - Red, 52", Color: "Red", StandardCost: 187.16, ProductSubcategoryID: 14 },
{ ProductID: 728, ProductNumber: "FR-R38R-58", Name: "LL Road Frame - Red, 58", Color: "Red", StandardCost: 187.16, ProductSubcategoryID: 14 },
{ ProductID: 729, ProductNumber: "FR-R38R-60", Name: "LL Road Frame - Red, 60", Color: "Red", StandardCost: 187.16, ProductSubcategoryID: 14 },
{ ProductID: 730, ProductNumber: "FR-R38R-62", Name: "LL Road Frame - Red, 62", Color: "Red", StandardCost: 187.16, ProductSubcategoryID: 14 },
{ ProductID: 731, ProductNumber: "FR-R72R-44", Name: "ML Road Frame - Red, 44", Color: "Red", StandardCost: 352.14, ProductSubcategoryID: 14 },
{ ProductID: 732, ProductNumber: "FR-R72R-48", Name: "ML Road Frame - Red, 48", Color: "Red", StandardCost: 352.14, ProductSubcategoryID: 14 },
{ ProductID: 733, ProductNumber: "FR-R72R-52", Name: "ML Road Frame - Red, 52", Color: "Red", StandardCost: 352.14, ProductSubcategoryID: 14 },
{ ProductID: 734, ProductNumber: "FR-R72R-58", Name: "ML Road Frame - Red, 58", Color: "Red", StandardCost: 352.14, ProductSubcategoryID: 14 },
{ ProductID: 735, ProductNumber: "FR-R72R-60", Name: "ML Road Frame - Red, 60", Color: "Red", StandardCost: 352.14, ProductSubcategoryID: 14 }
];

var subcategories = [
{ ProductSubcategoryID: 1, Name: "Mountain Bikes" },
{ ProductSubcategoryID: 2, Name: "Road Bikes" },
{ ProductSubcategoryID: 3, Name: "Touring Bikes" },
{ ProductSubcategoryID: 4, Name: "Handlebars" },
{ ProductSubcategoryID: 5, Name: "Bottom Brackets" },
{ ProductSubcategoryID: 6, Name: "Brakes" },
{ ProductSubcategoryID: 7, Name: "Chains" },
{ ProductSubcategoryID: 8, Name: "Cranksets" },
{ ProductSubcategoryID: 9, Name: "Derailleurs" },
{ ProductSubcategoryID: 10, Name: "Forks" },
{ ProductSubcategoryID: 11, Name: "Headsets" },
{ ProductSubcategoryID: 12, Name: "Mountain Frames" },
{ ProductSubcategoryID: 13, Name: "Pedals" },
{ ProductSubcategoryID: 14, Name: "Road Frames" },
{ ProductSubcategoryID: 15, Name: "Saddles" },
{ ProductSubcategoryID: 16, Name: "Touring Frames" },
{ ProductSubcategoryID: 17, Name: "Wheels" },
{ ProductSubcategoryID: 18, Name: "Bib-Shorts" },
{ ProductSubcategoryID: 19, Name: "Caps" },
{ ProductSubcategoryID: 20, Name: "Gloves" },
{ ProductSubcategoryID: 21, Name: "Jerseys" },
{ ProductSubcategoryID: 22, Name: "Shorts" },
{ ProductSubcategoryID: 23, Name: "Socks" },
{ ProductSubcategoryID: 24, Name: "Tights" },
{ ProductSubcategoryID: 25, Name: "Vests" },
{ ProductSubcategoryID: 26, Name: "Bike Racks" },
{ ProductSubcategoryID: 27, Name: "Bike Stands" },
{ ProductSubcategoryID: 28, Name: "Bottles and Cages" },
{ ProductSubcategoryID: 29, Name: "Cleaners" },
{ ProductSubcategoryID: 30, Name: "Fenders" },
{ ProductSubcategoryID: 31, Name: "Helmets" },
{ ProductSubcategoryID: 32, Name: "Hydration Packs" },
{ ProductSubcategoryID: 33, Name: "Lights" },
{ ProductSubcategoryID: 34, Name: "Locks" },
{ ProductSubcategoryID: 35, Name: "Panniers" },
{ ProductSubcategoryID: 36, Name: "Pumps" },
{ ProductSubcategoryID: 37, Name: "Tires and Tubes" }
];


var ss=[{"id":"7","nompro":"AGUA BOTELLA","valor":2500,"inicial":"A","categ":"6","cant":""},
        {"id":"19","nompro":"AJIACO","valor":5000,"inicial":"A","categ":"1","cant":""},
        {"id":"15","nompro":"CERVEZA","valor":2500,"inicial":"C","categ":"6","cant":""},{"id":"16","nompro":"CERVEZA LIGHT","valor":2500,"inicial":"C","categ":"6","cant":""},{"id":"14","nompro":"CONSOME","valor":3000,"inicial":"C","categ":"2","cant":""},{"id":"3","nompro":"GASEOSA 1 1/4 LTO VIDRIO","valor":3500,"inicial":"G","categ":"6","cant":""},{"id":"5","nompro":"GASEOSA 3 LTOS PLASTICA","valor":7000,"inicial":"G","categ":"6","cant":""},{"id":"2","nompro":"GASEOSA 350 VIDRIO","valor":2000,"inicial":"G","categ":"6","cant":""},{"id":"8","nompro":"GASEOSA 400 ML PLASTICA","valor":2200,"inicial":"G","categ":"6","cant":""},{"id":"6","nompro":"JUGO DEL VALLE 1.5 LTO PLASTICO","valor":4000,"inicial":"J","categ":"6","cant":""},{"id":"9","nompro":"JUGO DEL VALLE 400 ML PLASTICO","valor":1800,"inicial":"J","categ":"6","cant":""},{"id":"1","nompro":"POLLO ENTERO","valor":16000,"inicial":"P","categ":"2","cant":""},{"id":"10","nompro":"POLLO POR CUARTO (1/4)","valor":4500,"inicial":"P","categ":"2","cant":""},{"id":"18","nompro":"POLLO Y MEDIO","valor":24000,"inicial":"P","categ":"2","cant":""},{"id":"11","nompro":"PORCION ARROZ","valor":2000,"inicial":"P","categ":"2","cant":""},{"id":"13","nompro":"PORCION MADURO","valor":2000,"inicial":"P","categ":"2","cant":""},{"id":"12","nompro":"PORCION PAPA","valor":2000,"inicial":"P","categ":"2","cant":""},{"id":"20","nompro":"SSSS","valor":15000,"inicial":"S","categ":"1","cant":""}]"
function subcategoryNameFormatter(row, cell, value, columnDef, dataContext) {
    if (value == null) return "";

    var name;
    for (var subcat in subcategories) {
        if (value == subcategories[subcat].ProductSubcategoryID)
            return subcategories[subcat].Name;
    }
    return "";
}

function getSubcatNameFromBBDD(subcategory) {
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
    var name = "";
    for (var subcat in subcategories) {
        if (subcategory == subcategories[subcat].ProductSubcategoryID) {
            name = subcategories[subcat].Name;
            break;
        }
    }
    sleep(200);
    return name;
}


// ******  Sin Caché ******funciona con pr_4_CargaCeldaAsinc.html***********
// function asyncSubcategoryNameFormatter(row, cell, value, columnDef, dataContext) {
//         if (value==null) return "";


//         return "Cargando...";

//     }

// ******  Sin Caché *****funciona con pr_4_CargaCeldaAsinc.html************
// function getSubcategoryName(cellNode, row, dataContext, colDef) {
//     // console.log(cellNode);
//     var cell = $(cellNode);
//     if (cell.text() !== "Cargando...") return;

//     var value = dataContext[colDef.field];
//     var name = getSubcatNameFromBBDD(value);

//     cell.text(name);
// }

// ******  Con Caché *****funciona con pr_5_CargaConCahe.html************
function asyncSubcategoryNameFormatter(row, cell, value, columnDef, dataContext) {
    if (value == null) return "";

    // Comprobamos si el valor existe en la cache
    if (columnDef.cache[value] !== undefined)
        return columnDef.cache[value];

    return "Cargando...";
}

// ******  Con Caché *****funciona con pr_5_CargaConCahe.html************
function getSubcategoryName(cellNode, row, dataContext, colDef) {
    var cell = $(cellNode);
    if (cell.text() !== "Cargando...") return;

    var value = dataContext[colDef.field];
    var name;
    // Comprobamos si el valor existe en la cache
    if (colDef.cache[value] === undefined) {
        name = getSubcatNameFromBBDD(value);
        // Introducimos el valor en la cache
        colDef.cache[value] = name;
    }
    else
        name = colDef.cache[value];

    $(cellNode).text(name);
}
