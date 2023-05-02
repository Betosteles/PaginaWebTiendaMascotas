  
  const obtenerDetallePedido = async (id) => {
    const response = await fetch(`http://localhost/api/PedidoDetalle/?id=${id}`);
    const datos = await response.json();
    return datos
  };

  const obtenerProducto = async (id) => {
    const response = await fetch(`http://localhost/api/Producto/?id=${id}`);
    const datos = await response.json();
    return datos[0]
  };