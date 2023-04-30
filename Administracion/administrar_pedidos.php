

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Panel de administración</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js"></script>

  </head>


  <body>

  <?php include('header.php'); ?>

  <table class="table" id="tablaProductos">
  <thead> 
    <tr>
      <th>ID Pedido</th>
      <th>Fecha</th>
      <th>Cliente</th>
      <th>Total</th>
      <th>Metodo de Pago</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <!-- Aquí se mostrarán los registros de la tabla de pedidos -->
  </tbody>
</table>

<script src="/Administracion/js/administrar_pedidos.js"></script>
  </body>
</html>