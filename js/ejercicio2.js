// JavaScript source code
// JavaScript source code

// Array de productos con 7 productos
var productos = [
    { nombre: "Camiseta", precio: "20.00" },
    { nombre: "Pantalones", precio: "40.00" },
    { nombre: "Zapatos", precio: "60.00" },
    { nombre: "Sombrero", precio: "15.00" },
    { nombre: "Chaqueta", precio: "80.00" },
    { nombre: "Bufanda", precio: "25.00" },
    { nombre: "Guantes", precio: "10.00" },
    { nombre: "Dulces", precio: "$0.50" },
    { nombre: "Lapiceros", precio: "$0.25" },
    { nombre: "Crayolas", precio: "$1" },
];

var tbody = document.getElementById("tablaProductos").getElementsByTagName("tbody")[0];

for (var i = 0; i < productos.length; i++) {
    var fila = tbody.insertRow();
    var celdaNombre = fila.insertCell(0);
    var celdaPrecio = fila.insertCell(1);

    celdaNombre.textContent = productos[i].nombre;
    celdaPrecio.textContent = productos[i].precio;
}
