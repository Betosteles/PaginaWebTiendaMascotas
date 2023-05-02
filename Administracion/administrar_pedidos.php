

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Panel de administración</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js"></script>

  </head>


  <body class="m-1">

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
  <tbody id="tablaProductosBody">
    <!-- Aquí se mostrarán los registros de la tabla de pedidos -->
  </tbody>

  <tfoot id="tablaProductosFoot">

  </tfoot>
 <!-- <tfoot>
    <tr>
      <td colspan="3">
        <button class="btn btn-primary" onclick="cargarPedidosAnteriores()">Anterior</button>
      </td>
      <td colspan="3">
        <button class="btn btn-primary" onclick="cargarPedidosSiguientes()">Siguiente</button>
      </td>
    </tr>
  </tfoot> -->
</table>



<div class="modal fade" id="InfoPedido" tabindex="-1" aria-labelledby="modalEditarProductoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalEditarProductoLabel">Detalle Del Pedido</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
        
        <form>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" value="" disabled>
  </div>
  <div class="mb-3">
    <label for="identidad" class="form-label">Identidad</label>
    <input type="text" class="form-control" id="identidad" value="" disabled>
  </div>
  <div class="mb-3">
    <label for="telefono" class="form-label">Teléfono</label>
    <input type="text" class="form-control" id="telefono" value="" disabled>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico</label>
    <input type="text" class="form-control" id="email" value="" disabled>
  </div>
  <div class="mb-3">
    <label for="direccion" class="form-label">Dirección de envío</label>
    <textarea class="form-control" id="direccion" rows="3" disabled></textarea>
  </div>
  <div class="mb-3">
    <label for="referencia" class="form-label">Referencia</label>
    <input type="text" class="form-control" id="referencia" value="" disabled>
  </div>
  

</form>


<h5 class="modal-title" id="modalEditarProductoLabel">Detalle del pedido</h5>
<hr>
<div id="detalleCarrito">
  <!-- Aquí irá el formulario de detalle del pedido -->
</div>

<div class="mb-3">
  <label for="estado" class="form-label">Estado del pedido</label>
  <select class="form-select" id="estado">

  </select>

          
          <input type="hidden" id="producto_id" name="producto_id">
          <input type="hidden" id="pedido_id" name="pedido_id">
          <input type="hidden" id="estado_id" name="estado_id">

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="guardarEstado()">Guardar Estado</button>
      </div>
    </div>




<script src="/Administracion/js/administrar_pedidos.js"></script>

  </body>
</html>