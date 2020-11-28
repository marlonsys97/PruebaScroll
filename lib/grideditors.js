$(function () {
    $.extend(true, window, {
        "Slick": {
            "Editors": {
                "Text": TextEditor,
                "Color": ColorEditor,
                "Subcategoría":subcategoryEditor,
                "Numeric": NumericEditor
            }
        }
    });

    function NumericEditor(args) {
         var input;
         var oldValue;

         var init = function () {
          var inputElement = document.createElement("input");
          inputElement.setAttribute("type", "numeric");
          inputElement.className = "gridTextEditor";
          args.container.appendChild(inputElement);
          input = $(inputElement);
          input.bind("keydown", function (e) {
           if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
            e.stopImmediatePropagation();
           }
          })
           .focus()
           .select();
         }();

         this.destroy = function () { input.remove(); }

         this.focus = function () { input.focus(); }

         this.getValue = function () { return input.val(); }

         this.setValue = function (value) { input.val(value); }

         this.loadValue = function (item) {
          oldValue = item[args.column.field] || "";
          input.val(oldValue).attr("defaultValue", oldValue);
          input.select();
         }

         this.serializeValue = function () {
          return parseFloat(input.val()) || 0;
         }

         this.applyValue = function (item, state) { item[args.column.field] = state; }

         this.isValueChanged = function () { return (input.val() != oldValue); }

         this.validate = function () {
            if (isNaN(input.val())) {
               return {
                valid: false,
                msg: "Introduzca un valor numérico válido"
               };
            }

            return {
                valid: true,
                msg: null
            };
        }
    }

    function TextEditor(args) {
        var input;
        var oldValue;

        var init = function () {
            var inputElement = document.createElement("input");
            inputElement.setAttribute("type", "text");
            inputElement.className = "gridTextEditor";
            args.container.appendChild(inputElement);
            input = $(inputElement);
            input.bind("keydown", function (e) {
                if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                    e.stopImmediatePropagation();
                }
            })
          .focus()
          .select();
        }();

        this.handleKeyDown = function (e) {
          if (e.which == $.ui.keyCode.ENTER && e.ctrlKey) {
            scope.save();
          } else if (e.which == $.ui.keyCode.ESCAPE) {
            e.preventDefault();
            scope.cancel();
          } else if (e.which == $.ui.keyCode.TAB && e.shiftKey) {
            e.preventDefault();
            args.grid.navigatePrev();
          } else if (e.which == $.ui.keyCode.TAB) {
            e.preventDefault();
            args.grid.navigateNext();
          }
        };

        this.destroy = function () { input.remove(); }

        this.focus = function () { input.focus(); }

        this.getValue = function () { return input.val(); }

        this.setValue = function (value) { input.val(value); }

        this.loadValue = function (item) {
            oldValue = item[args.column.field] || "";
            input.val(oldValue).attr("defaultValue", oldValue);
            input.select();
        }

        this.serializeValue = function () { return input.val(); }

        this.applyValue = function(item, state){ item[args.column.field] = state; }

        this.isValueChanged = function () { return (input.val() != oldValue); }

        this.validate = function () { return { valid: true, msg: null }; }
    }

    function ColorEditor(args) {
        var input;
        var oldValue;

        var init = function () {
        var inputElement = document.createElement("input");
            inputElement.setAttribute("type", "color");
            inputElement.className = "editor-text";
            args.container.appendChild(inputElement);
            input = $(inputElement);
            input.bind("keydown", function (e) {
                if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                    e.stopImmediatePropagation();
                }
            })
          .focus()
          .select();
        }();

        this.destroy = function () { input.remove(); }

        this.focus = function () { input.focus(); }

        this.getValue = function () { return input.val(); }

        this.setValue = function (value) { input.val(color); }

        this.loadValue = function (item) {
            oldValue = item[args.column.field] || "";
            switch (oldValue) {
                case "Black":
                    oldValue = "#000000";
                    break;
                case "Red":
                    oldValue = "#ee0000";
                    break;
                case "White":
                    oldValue = "#ffffff";
                    break;
                case "Blue":
                    oldValue = "#0000ee";
                    break;
            }
            input.val(oldValue).attr("defaultValue", oldValue);
            input.select();
        }

        this.serializeValue = function () { return input.val(); }

        this.applyValue = function (item, state) { item[args.column.field] = state; }

        this.isValueChanged = function () { return (input.val() != oldValue); }

        this.validate = function () { return { valid: true, msg: null }; }
    }

    function subcategoryEditor(args) {
        var input;
        var oldValue;

        var init = function () {
            var inputElement = document.createElement("input");
            inputElement.setAttribute("type", "text");
            inputElement.className = "gridTextEditor";
            args.container.appendChild(inputElement);
            input = $(inputElement);
            input.bind("keydown", function (e) {
                if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
                    e.stopImmediatePropagation();
                }
            })
            .focus()
            .select();
        }();

        this.destroy = function () { input.remove(); }

        this.focus = function () { input.focus(); }

        this.getValue = function () { return input.val(); }

        this.setValue = function (value) { input.val(value); }

        this.loadValue = function (item) {
            oldValue = item[args.column.field] || "";
            input.val(oldValue).attr("defaultValue", oldValue);
            input.select();
        }

        this.serializeValue = function () { return input.val(); }

        this.applyValue = function (item, state) { item[args.column.field] = state; }

        this.isValueChanged = function () { return (input.val() != oldValue); }

        this.validate = function () {
            var value = input.val();
            var valid = (value == null || value == "");
            if (!valid) {
                for (var subcat in subcategories) {
                    if (value == subcategories[subcat].ProductSubcategoryID)
                    {
                        valid = true;
                        break;
                    }
                }
            }
            return {
                valid: valid,
                msg: (valid ? null : "La subcategoría " + value + " no existe.")
            };
        }
}


});
