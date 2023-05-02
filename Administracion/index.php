<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Panel de administración</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js"></script>

    

  </head>


  <body class="m-1">

  <style> 
#principal {
  min-height: 600px;
}
</style>

  <?php include('header.php'); ?>


  <div id="principal" class="container mt-5">
      <h1>Agregar Producto</h1>
      <form>
        <div class="mb-3">
    <label for="animal" class="form-label">Animal</label>
    <select class="form-select" id="animal" name="animal">
        
        
    </select>
</div>
<div class="mb-3">
    <label for="categoria" class="form-label">Categoría</label>
    <select class="form-select" id="categoria" name="categoria">
        
    </select>
</div>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" name="nombre">
          </div>
          <div class="mb-3">
            <label for="marca" class="form-label">Marca</label>
            <input type="text" class="form-control" id="marca" name="marca">
          </div>
          <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción</label>
            <textarea class="form-control" id="descripcion" name="descripcion"></textarea>
          </div>
          <div class="mb-3">
            <label for="precio" class="form-label">Precio</label>
            <input type="text" class="form-control" id="precio" name="precio">
          </div>
          <div class="mb-3">
            <label for="strock" class="form-label">Stock</label>
            <input type="number" class="form-control" id="strock" name="strock">
          </div>
          <div class="mb-3">
            <label for="codigo_barras" class="form-label">Código de barras</label>
            <input type="text" class="form-control" id="codigo_barras" name="codigo_barras">
          </div>
          <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input type="file" class="form-control" id="imagen" name="imagen">
          </div>
          <div class="mb-3">
            <label for="garantia" class="form-label">Garantía</label>
            <input type="text" class="form-control" id="garantia" name="garantia">
          </div>
          <input type="hidden" id="producto_id" name="producto_id">
        </form>
    </div>
    </div>
      <div class="text-center">
        <button type="button" class="btn btn-primary" onclick="guardarProducto()">Guardar cambios</button>
      </div>
    </div>
   
  <script src="/Administracion/js/index.js"></script>
  </body>
</html>

