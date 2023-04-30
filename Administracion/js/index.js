
fetch('http://localhost/api/CategoriaAnimal/?id=0')
          .then(response => response.json())
          .then(data => {
           
            const animalOptions = data.map(animal => `<option value="${animal.categoria_animal_id}">${animal.animal}</option>`).join('');
            document.getElementById('animal').innerHTML = animalOptions;

       
          })
          .catch(error => console.error(error));

          fetch('http://localhost/api/CategoriaProducto/?id=0')
          .then(response => response.json())
          .then(data => {
            const animalOptions = data.map(categoria => `<option value="${categoria.categoria_producto_id}">${categoria.nombre}</option>`).join('');
            document.getElementById('categoria').innerHTML = animalOptions;
   
          })
          .catch(error => console.error(error));

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
        
              fetch("http://localhost/api/Producto/", {
                method: 'POST',
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