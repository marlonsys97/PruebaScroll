<?php 
require_once "conexion.php";

function obtenerProductos_vtas()
{
	$mysql = conexionMySQL();
	$sql = "SELECT prodct_id, prodct_nombr,  left(prodct_nombr,1) AS Inicial,    prodct_valor, prodct_catgr  FROM prodcts WHERE  prodct_id IN  (SELECT prodcts.prodct_id FROM prodcts, catgrs WHERE prodcts.prodct_catgr = catgrs.catgr_id AND prodcts.prodct_suspndd = false AND catgrs.catgr_deVent= true  AND catgrs.catgr_nombr NOT IN ('MANUFACTURADOS') ) ORDER BY prodcts.prodct_nombr";

	// var_export($sql,false);
	
	if($resultado = $mysql->query($sql))
	{
		//Compruebo que el query me regrese registros
		$totalRegistros = mysqli_num_rows($resultado);

		if($totalRegistros==0)
		{
			$respuesta = "<div class='error'>No existe registros de Productos. La Base de Datos esta vacía.</div>";	
		}
		else
		{
			// $cad = "<div class='sidebar1'> ";	
			$data = '';
			$i = 0;

			while($fila = $resultado->fetch_assoc())
			{
				$data .= '
				 {
					id: '.$fila['prodct_id'].',
					nompro: "'.$fila['prodct_nombr'].'",
					valor: '.$fila['prodct_valor'].',
					inicial: "'.$fila['Inicial'].'",
					categ: '.$fila['prodct_catgr'].',
					cant:"",
				},
				';

				$i++;
			}
			$resultado->free();

			// echo $data;
			// $cad.="</div>";

			
		}
	}	
	// echo "$data";
	$mysql->close();
	return "$data";


}

function crearBotonesVenta()
{
	// <input type="submit" class="btnCta" id="m0" value="0" data-estado=99 data-idVta=0 >
	$txt="";
	// for ($i =  1; $i < 50; $i++) {
	// 	$txt .= "<input type='submit' class='btnCta' id='m".$i."' value='$i' data-estado=0 data-idVta=0 >";
		
	// }	
	$i=1;
	while ($i <= 12){
		$txt .= "<input type='button' class='btnCta' id='m".$i."' value='$i' data-estado=0 data-idVta=0 >";
		$i++;
	}

	return printf($txt);
}



?>
