<?php
require "vista_vtas.php";
require "modelo_vtas.php";

// require "vendor/autoload.php";


/*
Aplicación CreateReadUpdateDelete
PHP tiene 2 métodos de envío de datos: POST y GET
Create  Afecta BD     INSERT (SQL)  POST  Modelo
Read    No Afecta BD  SELECT (SQL)  GET   Vista
Update  Afecta BD     UPDATE (SQL)  POST  Modelo
Delete  Afecta BD     DELETE (SQL)  POST  Modelo
*/
$transaccion = $_POST["transaccion"];
// var_export ($transaccion);
// echo $transaccion." recuerden que AJAX se ejecuta en el servidor";
function ejecutarTransaccion($transaccion)
{
	if($transaccion=="insertarVentaM")    //insertar Maestro ventas (ventasM)
	{
		//Procesar los datos del formulario de alta e insertarlos en MySQL
		insertVentaMaster($_POST["cue"],$_POST["val"],$_POST["usr"]);
		//insertarHeroe() se encuentra en modelo.php

	}
	else if($transaccion=="insertarVentasD")   //insertar Detalle ventas (ventasD)
	{
		// d($_POST["detll"]);
		insertVentaDetll($_POST["detll"]);		 
	}
	else if($transaccion=="traerVenta")
	{
		traerDetllVenta($_POST["idVta"]);
	}
	else if($transaccion=="crearBotonesVenta")
	{
		crearBotonesVenta();
	}

	else if($transaccion=="actualizar")
	{
		//Modificar en MySQL los datos del registro modificado
		// actualizarHeroe($_POST["idHeroe"],$_POST["nombre_txt"],$_POST["imagen_txt"],$_POST["descripcion_txa"],$_POST["editorial_slc"]);
	}
}
ejecutarTransaccion($transaccion);

?>