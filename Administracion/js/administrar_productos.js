

const tbody = document.getElementById("tablaProductos")

const obtenerNombreCategoria = async (id) => {
    const response = await fetch(`http://localhost/api/CategoriaProducto/?id=${id}`);
    const datos = await response.json();
    return datos[0].nombre;
  };

  const obtenerAnimalCategoria = async (id) => {
    const response = await fetch(`http://localhost/api/CategoriaAnimal/?id=${id}`);
    const datos = await response.json();
    return datos[0].animal;
  };

fetch("http://localhost/api/Producto/?id=0")
  .then(response => response.json())
  .then(datos => {
    // Iterar sobre los datos obtenidos y agregar una fila por cada registro
    datos.forEach(async  producto => {
      // Crear una nueva fila
      const newRow = tbody.insertRow();

      // Agregar las celdas correspondientes con los datos del producto
      const idCell = newRow.insertCell();
      idCell.textContent = producto.producto_id;

      const animalCell = newRow.insertCell();
      animalCell.textContent = await obtenerAnimalCategoria(producto.categoria_animal_id);

      const categoriaCell = newRow.insertCell();
      categoriaCell.textContent = await obtenerNombreCategoria(producto.categoria_producto_id);


      const nombreCell = newRow.insertCell();
      nombreCell.textContent = producto.nombre;

      const marcaCell = newRow.insertCell();
      marcaCell.textContent = producto.marca;

      const descripcionCell = newRow.insertCell();
      descripcionCell.textContent = producto.descripcion;

      const precioCell = newRow.insertCell();
      precioCell.textContent = producto.precio;

      const stockCell = newRow.insertCell();
      stockCell.textContent = producto.stock;

      const codigoBarraCell = newRow.insertCell();
      codigoBarraCell.textContent = producto.codigo_barra;

      const imagenCell = newRow.insertCell();
      imagenCell.innerHTML = `<img src="/tienda/img/${producto.imagenes}" alt="Imagen del producto" width="50">`;


      const garantiaCell = newRow.insertCell();
      garantiaCell.textContent = producto.garantia;

      const editButtonCell = newRow.insertCell();
      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target", "#modalEditarProducto");
      editButton.classList.add("btn", "btn-sm", "btn-primary");
      editButton.addEventListener("click", () => {
      cargarProducto(producto);
      });
      editButtonCell.appendChild(editButton);

      // Agregar botón de eliminar
      const deleteButtonCell = newRow.insertCell();
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.classList.add("btn", "btn-sm", "btn-danger");
      deleteButton.addEventListener("click", () => {
      eliminarProducto(producto.producto_id);
      });
      deleteButtonCell.appendChild(deleteButton);
      });
  });


  

  function cargarProducto(producto) {


    // fetch('http://localhost/api/CategoriaAnimal/?id=0')
    // .then(response => response.json())
    // .then(data => {
    //     const animalOptions = data.map(animal => `<option value="${data.categoria_animal_id}">${data.animal}</option>`).join('');
    //     document.getElementById('animal').innerHTML = animalOptions;
    //     })
    //       .catch(error => console.error(error));

          fetch('http://localhost/api/CategoriaAnimal/?id=0')
          .then(response => response.json())
          .then(data => {
           
            const animalOptions = data.map(animal => `<option value="${animal.categoria_animal_id}">${animal.animal}</option>`).join('');
            document.getElementById('animal').innerHTML = animalOptions;
            document.getElementById('animal').value = producto.categoria_animal_id
       
          })
          .catch(error => console.error(error));

          fetch('http://localhost/api/CategoriaProducto/?id=0')
          .then(response => response.json())
          .then(data => {
            const animalOptions = data.map(categoria => `<option value="${categoria.categoria_producto_id}">${categoria.nombre}</option>`).join('');
            document.getElementById('categoria').innerHTML = animalOptions;
            document.getElementById('categoria').value = producto.categoria_producto_id
          })
          .catch(error => console.error(error));
        




    //const animalInput = document.getElementById('animal');
    //const categoriaInput = document.getElementById('categoria');
    const nombreInput = document.getElementById('nombre');
    const marcaInput = document.getElementById('marca');
    const descripcionInput = document.getElementById('descripcion');
    const precioInput = document.getElementById('precio');
    const stockInput = document.getElementById('strock');
    const codigoBarrasInput = document.getElementById('codigo_barras');
    const garantiaInput = document.getElementById('garantia');
    const productoIdInput = document.getElementById('producto_id');

    //animalInput.value = producto.categoria_animal_id
   // categoriaInput.value = producto.categoria_producto_id
    nombreInput.value = producto.nombre
    marcaInput.value = producto.marca
    descripcionInput.value = producto.descripcion
    precioInput.value = producto.precio
    stockInput.value = producto.stock
    codigoBarrasInput.value = producto.codigo_barra
    garantiaInput.value = producto.garantia
    productoIdInput.value = producto.producto_id


    
  }


  
  function eliminarProducto(producto_id) {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      fetch(`http://localhost/api/Producto/?id=${producto_id}`, {
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

  function guardarProducto(){


    const id =document.getElementById('producto_id').value
    const nombre = document.getElementById('nombre').value;
    const marca = document.getElementById('marca').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('strock').value;
    const codigo_barras = document.getElementById('codigo_barras').value;
    const garantia = document.getElementById('garantia').value;
    const producto_id = document.getElementById('producto_id').value;
    const animal = document.getElementById('animal').value;
    const categoria = document.getElementById('categoria').value;

    const imagenInput = document.getElementById('imagen');
    const fileName = imagenInput.value;
    const extension = fileName.split('.').pop();
    const imagenNombre = `${animal}-${categoria}-${nombre}-${marca}.${extension}`

    const formData = new FormData();
    formData.append('imagen', imagenInput.files[0]);
    formData.append('animal', animal);
    formData.append('categoria', categoria);
    formData.append('nombre', nombre);
    formData.append('marca', marca);

    console.log(imagenNombre)

    fetch('http://localhost/tienda/img/', {
    method: 'POST',
    body: formData
})
.then(response => response.text())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});


      data=  {
        "producto_id": id,
        "categoria_animal_id": animal,
        "categoria_producto_id": categoria,
        "nombre": nombre,
        "marca": marca,
        "descripcion": descripcion,
        "precio":precio,
        "stock": stock,
        "codigo_barra": codigo_barras,
        "imagenes": imagenNombre,
        "garantia": garantia
    }

      fetch("http://localhost/api/Producto", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));


      setTimeout(function() {
        location.reload();
      }, 1000);

  }

  
  