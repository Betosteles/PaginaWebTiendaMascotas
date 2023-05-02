const tbody = document.getElementById("tablaProductos");

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
    if(!datos[0]){
        return 0
    }
    return datos[0].precio;
  };

  const obtenerTotal = async (id) => {
    const response = await fetch(`http://localhost/api/PedidoDetalle/?id=${id}`);
    const datos = await response.json();

    

    let total = 0;

    for (var i = 0; i < datos.length; i++) {

        total+= await obtenerPrecio(datos[i].producto_id)*datos[i].cantidad_producto

        
    }

    //console.log(total)

    return total
   // let total=0
    // let subtotal=0
        // datos.forEach(async orden => {
        //     //subtotal = await obtenerPrecio(orden.producto_id);
        //     //total += (subtotal*orden.cantidad_producto)
        //     console.log(orden)
            
        // })

    //return total;

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
        CellTotal.textContent = await obtenerTotal(pedido.id_pedido)
        //CellTotal.textContent =  "0";

        const CellMetodo = newRow.insertCell();
        CellMetodo.textContent = await obtenerMetodo(pedido.metodo_pago_id);

        const CellEstado = newRow.insertCell();
        CellEstado.textContent = await obtenerEstado( await obtenerEstadoId(pedido.id_pedido));



        const editButtonCell = newRow.insertCell();
      const editButton = document.createElement("button");
      editButton.textContent = "Informacion";
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target", "#InfoPedido");
      editButton.classList.add("btn", "btn-sm", "btn-info");
      editButton.addEventListener("click", () => {
      DatosDePedido(pedido);
      });
      editButtonCell.appendChild(editButton);

      // Agregar botón de eliminar
      const deleteButtonCell = newRow.insertCell();
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.classList.add("btn", "btn-sm", "btn-danger");
      deleteButton.addEventListener("click", () => {
      eliminarProducto(pedido.id_pedido);
      });
      deleteButtonCell.appendChild(deleteButton);
      


    })

 })


 function DatosDePedido(DatosDePedido){

    const nombre = document.getElementById('nombre');
    const identidad = document.getElementById('identidad');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const direccion = document.getElementById('direccion');
    const referencia = document.getElementById('referencia');

    fetch(`http://localhost/api/Cliente/?id=${DatosDePedido.cliente_id}`)
    .then(response => response.json())
        .then(data => {
            console.log(data[0])

            nombre.value = data[0].nombre;
            identidad.value = data[0].identificacion;
            telefono.value = data[0].tel;
            email.value = data[0].correo;
            direccion.value = data[0].direccion_envio;
            referencia.value = data[0].informacion_dicional;


        })
        .catch(error => {
            console.error(error);
          });




 }


 function eliminarProducto(producto_id) {
    if (confirm("¿Estás seguro de que deseas eliminar este Pedido?")) {
      fetch(`http://localhost/api/Pedido/?id=${producto_id}`, {
        method: "DELETE",
      })
        .then(response => response.text())
        .then(data => {
          alert("Producto eliminado exitosamente");
          location.reload();
        })
        .catch(error => {
          console.error("Error al eliminar el producto:", error);
          alert("Ocurrió un error al eliminar el producto");
        });
    }
  }




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


  async function showCarro(pedidoId){

    const pedido_detalle = await obtenerDetallePedido(pedidoId);
      

    return pedido_detalle.map(async(pedido) =>{

    const p=pedido[0]
    const producto = await obtenerProducto(p.producto_id);
    

    return {

        id_pedido : p.id_pedido,
        producto_id: p.producto_id,
        cantidad_producto: p.cantidad_producto,
        precio: producto.precio,
        nombre: producto.producto

    }

    });

  }

  async function getCarrito(pedidoId) {

  
    let Carrito = "";
  
          

    const newCarrito = await showCarro(pedidoId);
      

  
      let total = 0;
  
      Carrito = `
        <table class="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Sub Total</th>
              <th></th>              
            </tr>
          </thead>
          <tbody id="cart-table">
            ${newCarrito
              .map((producto) => {
                const p = producto[0];
                const c = producto[0].precio;
                const subtotal = p.precio * c;
                total += subtotal;
                return `
                <tr>
                  <td>${p.nombre}</td>
                  <td>${p.precio} lps.</td>
                  <td>${c}</td>
                  <td>${subtotal} lps.</td>
                  <td><button onclick="eliminarProducto(${p.producto_id})">Eliminar</button></td>
                </tr>`;
              })
              .join("")}
            <tr>
              <td colspan="3"><strong>Total:</strong></td>
              <td>${total} lps.</td>
              <td></td>
            </tr>
          </tbody>
          
        </table>
      `;
    
    return Carrito;
  }