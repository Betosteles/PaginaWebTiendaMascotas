<?php

require_once "..\config\database.php";

$db = new Database();

switch ($_SERVER['REQUEST_METHOD']){

    case 'GET':
        if($_GET['id']!=0){
            echo json_encode( $db->getPedido($_GET['id']));
        }else{
            echo json_encode( $db->getPedidoAll());
        }
        break;
    case 'POST':
        try{
        $datos = json_decode(file_get_contents('php://input'));
        $fecha_actual = date('Y-m-d H:i:s');
        $db->InsertPedido($fecha_actual,$datos->cliente_id,$datos->metodo_pago_id);

        echo json_encode( $db->getPedidoAll());
    }catch(PDOException $e){
        // Manejo del error
        echo $e->getMessage();
      }

        break;
    case 'PUT':
        http_response_code(404);
        break;
    case 'DELETE':

        $db->DeletePedido($_GET['id']);
        break;

    default:
    #code...
        break;
}