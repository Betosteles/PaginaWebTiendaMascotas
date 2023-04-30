const tbody = document.getElementById("tablaProductos")

const obtenerNombreCliente = async (id) => {
    const response = await fetch(`http://localhost/api/Cliente/?id=${id}`);
    const datos = await response.json();
    return datos[0].nombre;
  };

  const obtenerMetodo = async (id) => {
    const response = await fetch(`http://localhost/api/MetodoPago/?id=${id}`);
    const datos = await response.json();
    return datos[0].nombre;
  };


  const obtenerEstadoId = async (id) => {
    const response = await fetch(`http://localhost/api/PedidoEstado/?id=${id}`);
    const datos = await response.json();

    if( datos[0] == undefined){
        return 2

    }else{

        return datos[0].estado_id;
    }

    
  };

  const obtenerEstado = async (id) => {
    const response = await fetch(`http://localhost/api/Estado/?id=${id}`);
    const datos = await response.json();
    return datos[0].nombre;
  };

  const obtenerPrecio = async (id) => {
    const response = await fetch(`http://localhost/api/Producto/?id=${id}`);
    const datos = await response.json();
    return datos[0].precio;
  };

  const obtenerTotal = async (id) => {
    const response = await fetch(`http://localhost/api/PedidoDetalle/?id=${id}`);
    const datos = await response.json();
    
    let total=0
    let subtotal=0
        datos.forEach(async orden => {
            subtotal = await obtenerPrecio(orden.producto_id);
            total += (subtotal*orden.cantidad_producto)
            
        })

    return total;

  };

 fetch("http://localhost/api/Pedido/?id=-1")
 .then(response => response.json())
 .then(datos => {


    datos.forEach(async  pedido => {


        const newRow = tbody.insertRow();


        const idCell = newRow.insertCell();
        idCell.textContent = pedido.id_pedido;

        const CellFecha = newRow.insertCell();
        CellFecha.textContent = pedido.fecha_pedido;

        const CellCliente = newRow.insertCell();
        CellCliente.textContent =  await obtenerNombreCliente(pedido.cliente_id);

        const CellTotal = newRow.insertCell();
        CellTotal.textContent =  "0";

        const CellMetodo = newRow.insertCell();
        CellMetodo.textContent = await obtenerMetodo(pedido.metodo_pago_id);

        const CellEstado = newRow.insertCell();
        CellEstado.textContent = await obtenerEstado( await obtenerEstadoId(pedido.id_pedido));

      






    })

 })