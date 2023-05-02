const tbody = document.getElementById("tablaProductosBody");
const tfoot = document.getElementById("tablaProductosFoot");
let paginas = 0;
let paginaAct = 1;



const obtenerNombreCliente = async (id) => {
    const response = await fetch(`http://localhost/api/Cliente/?id=${id}`);
    const datos = await response.json();
    return datos[0].nombre;
  };


  const total = async () => {
    const response = await fetch(`http://localhost/api/Pedido/?total`);
    const datos = await response.json();
    return datos[0].total;
  };



  total().then(resultado => {paginas =Math.ceil(resultado/10 );});
  

  const obtenerMetodo = async (id) => {
    const response = await fetch(`http://localhost/api/MetodoPago/?id=${id}`);
    const datos = await response.json();
    return datos[0].nombre;
  };

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
    return datos[0];
  };
  
  const obtenerEstadoAll = async () => {
    const response = await fetch(`http://localhost/api/Estado/?id=0`);
    const datos = await response.json();
    return datos;
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


    return total

  };

async function CargarPagina(limite, offset){


    try {
        const response = await fetch(`http://localhost/api/Pedido/?limit=${limite}&offset=${offset}`);
        const datos = await response.json();
    
        for (const pedido of datos) {
          const estado = await obtenerEstado(await obtenerEstadoId(pedido.id_pedido));
          const nombreCliente = await obtenerNombreCliente(pedido.cliente_id);
          const total = await obtenerTotal(pedido.id_pedido);
          const metodoPago = await obtenerMetodo(pedido.metodo_pago_id);
    
          const newRow = tbody.insertRow();
          
    
          const idCell = newRow.insertCell();
          idCell.textContent = pedido.id_pedido;
    
          const fechaCell = newRow.insertCell();
          fechaCell.textContent = pedido.fecha_pedido;
    
          const clienteCell = newRow.insertCell();
          clienteCell.textContent = nombreCliente;
    
          const totalCell = newRow.insertCell();
          totalCell.textContent = total;
    
          const metodoCell = newRow.insertCell();
          metodoCell.textContent = metodoPago;
    
          const estadoCell = newRow.insertCell();
          estadoCell.textContent = estado.nombre;
    
          const editButtonCell = newRow.insertCell();
          const editButton = document.createElement("button");
          editButton.textContent = "Informacion";
          editButton.setAttribute("data-bs-toggle", "modal");
          editButton.setAttribute("data-bs-target", "#InfoPedido");
          editButton.classList.add("btn", "btn-sm", "btn-info");
          editButton.addEventListener("click", function() {
            DatosDePedido(pedido, estado);
          });
          editButtonCell.appendChild(editButton);
    
          const deleteButtonCell = newRow.insertCell();
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Eliminar";
          deleteButton.classList.add("btn", "btn-sm", "btn-danger");
          deleteButton.addEventListener("click", () => {
            eliminarPedido(pedido.id_pedido);
          });
          deleteButtonCell.appendChild(deleteButton);
        }
    
        tbody.insertRow()
        
        
      
      } catch (error) {
        console.error(error);
      }
 
    

    
}

function checkPage(pages){{if(pages==1) return "disabled" }}



async function cargarPedidos() {
    
    try {
      const response = await fetch(`http://localhost/api/Pedido/?limit=10&offset=0`);
      const datos = await response.json();
  
      for (const pedido of datos) {
        const estado = await obtenerEstado(await obtenerEstadoId(pedido.id_pedido));
        const nombreCliente = await obtenerNombreCliente(pedido.cliente_id);
        const total = await obtenerTotal(pedido.id_pedido);
        const metodoPago = await obtenerMetodo(pedido.metodo_pago_id);
  
        const newRow = tbody.insertRow();
        
  
        const idCell = newRow.insertCell();
        idCell.textContent = pedido.id_pedido;
  
        const fechaCell = newRow.insertCell();
        fechaCell.textContent = pedido.fecha_pedido;
  
        const clienteCell = newRow.insertCell();
        clienteCell.textContent = nombreCliente;
  
        const totalCell = newRow.insertCell();
        totalCell.textContent = total;
  
        const metodoCell = newRow.insertCell();
        metodoCell.textContent = metodoPago;
  
        const estadoCell = newRow.insertCell();
        estadoCell.textContent = estado.nombre;
  
        const editButtonCell = newRow.insertCell();
        const editButton = document.createElement("button");
        editButton.textContent = "Informacion";
        editButton.setAttribute("data-bs-toggle", "modal");
        editButton.setAttribute("data-bs-target", "#InfoPedido");
        editButton.classList.add("btn", "btn-sm", "btn-info");
        editButton.addEventListener("click", function() {
          DatosDePedido(pedido, estado);
        });
        editButtonCell.appendChild(editButton);
  
        const deleteButtonCell = newRow.insertCell();
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn", "btn-sm", "btn-danger");
        deleteButton.addEventListener("click", () => {
          eliminarPedido(pedido.id_pedido);
        });
        deleteButtonCell.appendChild(deleteButton);
      }
  
      tbody.insertRow()
      
      tfoot.innerHTML += `
      <tfoot >
        <tr>
          <td colspan="12" >
            <div class="d-flex justify-content-center" style="padding-top: 20px;">
            <button id="bAnterior" class="btn btn-primary" onclick="cargarPedidosAnteriores()" disabled>Anterior</button>
            <button id="bSiguiente" class="btn btn-primary ms-3" onclick="cargarPedidosSiguientes()" ${checkPage(paginas)} >Siguiente</button>
            </div>
          </td>
        </tr>
      </tfoot>
    `;
    
    } catch (error) {
      console.error(error);
    }
  }
  
  cargarPedidos();

  

function cargarPedidosSiguientes(){
    const botonS = document.getElementById('bSiguiente');
    const botonA = document.getElementById('bAnterior');

    paginaAct+=1;

    if(paginaAct==paginas){
        botonS.disabled = true;
        botonA.disabled = false;
    }
    else if(paginaAct>1 && paginaAct<paginas){
        botonS.disabled = false;
        botonA.disabled = false;
    }
    else{
        botonS.disabled = false;
        
    }

    tbody.innerHTML = "";
    //tfoot.innerHTML = "";

    CargarPagina(10, (paginaAct-1)*10)


    





}

function cargarPedidosAnteriores(){
    const botonS = document.getElementById('bSiguiente');
    const botonA = document.getElementById('bAnterior')

    paginaAct-=1;

    if(paginaAct==1){
        botonA.disabled = true;
        botonS.disabled = false;
    } 
    else if(paginaAct>1 && paginaAct<paginas){
        botonS.disabled = false;
        botonA.disabled = false;
    }else{
        botonA.disabled = false;
    }

    tbody.innerHTML = "";
    //tfoot.innerHTML = "";

    CargarPagina(10, (paginaAct-1)*10)

}




 async function DatosDePedido(DatosDePedido,EstadoPedido){

    const nombre = document.getElementById('nombre');
    const identidad = document.getElementById('identidad');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const direccion = document.getElementById('direccion');
    const referencia = document.getElementById('referencia');
    const carrito = document.getElementById('detalleCarrito');
    const pedidoid = document.getElementById('pedido_id');
    const estadoid = document.getElementById('estado_id');
    


    fetch(`http://localhost/api/Cliente/?id=${DatosDePedido.cliente_id}`)
    .then(response => response.json())
        .then(async data => {
            //console.log(data)

            nombre.value = data[0].nombre;
            identidad.value = data[0].identificacion;
            telefono.value = data[0].tel;
            email.value = data[0].correo;
            direccion.value = data[0].direccion_envio;
            referencia.value = data[0].informacion_dicional;

            const carroHMTL = await getCarrito(DatosDePedido.id_pedido);

            carrito.innerHTML = carroHMTL;


        })
        .catch(error => {
            console.error(error);
          });

          const SelectEstado = document.getElementById("estado");
        
          const Estado = Promise.all( await obtenerEstadoAll());


          Estado.then( datos =>{

            SelectEstado.innerHTML = ""

            datos.forEach( datos => {
                SelectEstado.innerHTML += `<option value="${datos.estado_id}">${datos.nombre}</option>`
              }          
              );

              SelectEstado.value = EstadoPedido.estado_id;
              pedidoid.value = DatosDePedido.id_pedido;
              estadoid.value = EstadoPedido.estado_id;

              

          });

          

          
          
          //console.log(EstadoPedido)

 }


 function eliminarPedido(producto_id) {
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







  async function showCarro(pedidoId){

    const pedido_detalle = await obtenerDetallePedido(pedidoId);
  
    const productos_promises = pedido_detalle.map(async(pedido) =>{
      const producto = await obtenerProducto(pedido.producto_id);
  
      return {
          id_pedido : pedido.id_pedido,
          producto_id: pedido.producto_id,
          cantidad_producto: pedido.cantidad_producto,
          precio: producto.precio,
          nombre: producto.nombre
      }
    });
  
    const productos = await Promise.all(productos_promises);
  
    return productos;
  }


  async function getCarrito(pedidoId) {
    let Carrito = "";
    const newCarrito = await showCarro(pedidoId);
    let total = 0;
    const carritoHtml = await Promise.all(newCarrito.map(async (producto) => {
      const p = producto;
      const c = producto.cantidad_producto;
      const subtotal = p.precio * c;
      total += subtotal;
      //console.log(p.producto_id,p.id_pedido)
      return `
        <tr>
          <td>${p.nombre}</td>
          <td>${p.precio} lps.</td>
          <td>${c}</td>
          <td>${subtotal} lps.</td>
          <td><button onclick="eliminarDetalleProducto(${p.producto_id},${p.id_pedido})">Eliminar</button></td>
        </tr>`;
    }));
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
          ${carritoHtml.join("")}
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
  

   function eliminarDetalleProducto(producto_id,id_pedido){

    const carrito = document.getElementById('detalleCarrito');

 
    

    console.log(producto_id,id_pedido)

    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        fetch(`http://localhost/api/PedidoDetalle/?idPedido=${id_pedido}&idProducto=${producto_id}`, {
          method: "DELETE",
        })
          .then(response => response.text())
          .then(async data => {
            alert("Producto eliminado exitosamente");

            const carroHMTL = await getCarrito(id_pedido);

            carrito.innerHTML = carroHMTL;
          })
          .catch(error => {
            console.error("Error al eliminar el producto:", error);
            alert("Ocurrió un error al eliminar el producto");
          });
      }




  }


  function guardarEstado(){

    const pedidoid = document.getElementById('pedido_id');
    

    //console.log(pedidoid.value, document.getElementById('estado').value)

    data=  {
        "pedido_id": pedidoid.value,
        "estado_id": document.getElementById('estado').value
    }

    fetch("http://localhost/api/PedidoEstado/", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(data => {
        console.log(data)
        alert('El estado del pedido ha sido actualizado.');
        location.reload();
    })
      .catch(error => console.error(error));



  }