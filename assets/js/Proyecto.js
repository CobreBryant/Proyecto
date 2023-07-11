class Producto{
  constructor(nombre, precio, stock){
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
  }
}

let listaProductos = [];


function Agregar() {
  if(!localStorage.getItem("prodcutos")){
    listaProductos = [
      { nombre: "Bajo", precio: 20000, stock: 200 },
      { nombre: "Chain", precio: 2000000, stock: 100 },
      { nombre: "Miles jordan", precio: 65000, stock: 100 },
    ];
    localStorage.setItem("prodcutos", JSON.stringify(listaProductos));
  }else{
    listaProductos = JSON.parse(localStorage.getItem("prodcutos"))
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    if (isNaN(precio) && isNaN(stock)){
        alert("Solo numeros *ruidos de latigo*.");
    }
    else{
        if(isNaN(precio)){
          alert("Solo numeros *ruidos de latigo*.");
        }
        else{
            if(isNaN(stock)){
              alert("Solo numeros *ruidos de latigo*.");
            }
        }
    }
    
    if (nombre !== "" && precio !== "" && stock !== "" && !isNaN(precio) && !isNaN(stock)){
        let prod = new Producto(nombre, precio, stock);
        const Tarjeta = `
        <div class="card" style="width: 18rem;">
        <img src="./assets/img/nego.jpg" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${prod.nombre}</h5>
          <p class="card-price">Precio: $${prod.precio}</p>
          <p class="card-stock">Stock: ${prod.stock}</p>
          <a href="Carrito.html" class="btn btn-primary">Coooooompre!!</a>
         </div>
        </div>
        `;
        
        const contProdu = document.getElementById("prod");
        contProdu.innerHTML += Tarjeta;
  
        listaProductos.push(prod);
        localStorage.setItem("prodcutos", JSON.stringify(listaProductos))
  
        let lista = document.createElement("p");
  
        document.getElementById("prods").appendChild(lista);
  
        document.getElementById("nombre").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("stock").value = "";
    }
    
    if(nombre == "" || precio == "" || stock == ""){
        alert("Complete bien el formulario *ruido de latigo*.")
    }   
  }
}

  document.addEventListener("DOMContentLoaded", () => {
    const prod = JSON.parse(localStorage.getItem("prodcutos")) || [];
    const contProd = document.getElementById("prod");
    prod.forEach((producto, index) => {
    const Tarjeta = `
      <div class="card" id="producto-${index + 1}" style="width: 18rem;">
      <img src="./assets/img/nego.jpg" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${producto.nombre}</h5>
        p class="card-price">Precio: $${producto.precio}</p>
        <p class="card-stock">Stock: ${producto.stock}</p>
        <a href="carrito.html" class="btn btn-primary" data-producto="${index + 1}" id="botonCom">Coooooompre!! </a>
        </div>
    </div>
  `;
  contProd.innerHTML += Tarjeta;
  listaProductos.push(producto)
  });
});

let botonConfirmar = document.getElementById("botonCom");

botonConfirmar.onclick = (e) =>{
  e.preventDefault()
  Agregar()
};


///Carrito///
