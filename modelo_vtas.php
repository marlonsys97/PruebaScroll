<?php 
require_once "conexion.php";
// require "vendor/autoload.php";
// $x="";
function insertVentaMaster($cuenta,$valor,$usuario)
{
	$mysql = conexionMySQL();
	$sql = "INSERT INTO ventsM(ventM_cuent, ventM_valor, ventM_user)
	VALUES ($cuenta,$valor,$usuario)";
	// echo $sql;	       

	if($resultado = $mysql->query($sql))
	{
		$sql="SELECT MAX(ventM_id) AS idM FROM ventsM";
		if($resul = $mysql->query($sql))
		{
			$data = '';
			while($fila = $resul->fetch_assoc())
			{
				$id=$fila['idM'];

				$data = '{"idMaster": '.$id.', "idBoton": '.$cuenta.', "transaccion":"insertarDetalle"}';
			}		
		}
			else
			{
		// $data = 'x: sin exito';
			}
			// $resultado->free();
			$mysql->close();
	   // return $data;
		// echo json_encode($id);;
		// return "$data";
			echo ($data);
	}
}

function insertVentaDetll($jsDetll)
{
	
	$mysql = conexionMySQL();
	$arrayD = json_decode($jsDetll);
	$rr="";

	$rr = "INSERT INTO ventsD(ventM_id, ventD_prodct, ventD_cantdd, ventD_valor) VALUES  \n";
	// $respuesta = "<div id='botones2'>";
	foreach($arrayD as $valor){
		$rr.="(";
		foreach($valor as $campo => $valor2 ){
			$rr.=  $valor2 . ", ";
		}
		$rr=trim($rr,", ");
		$rr.="), \n";	
	}
	$rr=trim($rr,"\n ,");

	// var_dump($rr);
	// $respuesta = "<div id='botones2'>Variable sql = <b>$rr</b></div>";

	if($resultado = $mysql->query($rr))
	{
		$data = '{"transaccion":"insertDetll_OK"}';
	}
	else
	{
		$data = '{"transaccion":"Fallo_insertDetll"}';
	}
	// $resultado->free();
	$mysql->close();
	echo ($data);
}

function traerDetllVenta($idVenta)
{
	$mysql = conexionMySQL();
	$sql = "SELECT ";
	// echo $sql;	       

	$sql="SELECT  D.ventM_id, D.ventD_id, D.ventD_prodct, D.ventD_cantdd , D.ventD_valor, P.prodct_nombr, P.prodct_catgr FROM ventsD D, prodcts P   WHERE (D.ventD_prodct = P.prodct_id) AND (D.ventM_id = $idVenta)";

	if($resultado = $mysql->query($sql))
	{
		
			$data = '';
			$arr = array();
			$i=0;
			// while($fila = $resultado->fetch_assoc())
			while($fila = mysqli_fetch_array($resultado))
			{
				$arr[$i]=$fila;

				$i++;
			}	
			$resultado->free();		
			// $arr[i+1]="transaccion":"insertarDetalle"	
			// array_push($arr,'"transaccion":"insertarDetalle"');
	}
	// $resultado->free();
	$data = json_encode($arr);
	$mysql->close();
	echo ($data."traeDetllVentaOK");
}





?>