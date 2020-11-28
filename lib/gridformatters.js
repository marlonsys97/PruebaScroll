$(function() {
    $.extend(true, window, {
        "Slick": {
            "Formatters": {
                "ColorFormatter": ColorFormatter,
                "CurrencyFormatter": CurrencyFormatter
                // "asyncSubcategoryNameFormatter": asyncSubcategoryNameFormatter 
            }
        }
    });

    function ColorFormatter(row, cell, value, columnDef, dataContext) {
        if (value == null || value == "") return "";
        else {
            var color;
            switch (value) {
                case "Black":
                    color = "#000000";
                    break;
                case "Red":
                    color = "#ee0000";
                    break;
                case "White":
                    color = "#ffffff";
                    break;
                case "Blue":
                    color = "#0000ee";
                    break;
                case "Multi":
                    return value;
                    break;
                default:
                    color = value;
            }
            return "<div style=\"width:80%; height:80%; background-color:" + color + "; border:solid 1px black\"></div>";
        }
    }

    function CurrencyFormatter(row, cell, value, columnDef, dataContext) {
        if (value == null) return "";
        else return value.toLocaleString() + " &euro;";
    }

   
});