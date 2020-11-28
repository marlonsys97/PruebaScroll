<?php 
require_once "conexion.php";

function mostrarProductos_vtas()
{
	$mysql = conexionMySQL();
	$sql = "SELECT prodct_id, prodct_nombr,  left(prodct_nombr,1) AS Inicial,    prodct_valor, prodct_catgr  FROM prodcts WHERE  prodct_id IN  (SELECT prodcts.prodct_id FROM prodcts, catgrs WHERE prodcts.prodct_catgr = catgrs.catgr_id AND prodcts.prodct_suspndd = false AND catgrs.catgr_deVent= true  AND catgrs.catgr_nombr NOT IN ('MANUFACTURADOS') ) ORDER BY prodcts.prodct_nombr";


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
			$cad = "<div class='sidebar1'> ";	
				while($fila = $resultado->fetch_assoc())
				{
					$cad.="<div>";
						$cad.= sprintf(
							"<input class='txtProd' type='text'  value='%s' acceskey='%s' readonly='true'   />",
							$fila["prodct_nombr"],
							$fila["Inicial"]

						);
						$cad.="<input class='texto1' type='number'    />";

					$cad.="</div>";
					
					
				}	
				$resultado->free();

			$cad.="</div>";


		}
	}	
	// echo "$cad";
	$mysql->close();
	return printf($cad);
}
?>
