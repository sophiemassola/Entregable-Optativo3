console.log('Entregable DOM');


//Usuario decide si continúa con la lista predeterminada.
let listado = prompt('Indique "si" si desea borrar los elementos predeterminados de la lista. De lo contrario, presione ENTER.').toUpperCase();
if (listado == 'SI'){
    supermercado.innerHTML = null;
};

//Definición de constantes y variables
const productos = [];
let a = ''


//Creación del array que contiene los datos ingresados por el usuario.
while (a != 'EXIT'){
    a = prompt('Ingrese los productos de su lista de supermercado. Una vez finalizada, escriba EXIT.').toUpperCase();
    
    if (a != 'EXIT'){
        productos.push(a);
    }
}



//Por cada elemento del array voy a crear un nuevo elemento y voy a hacer un append.
productos.forEach( (x) => {
    const nuevoProducto = document.createElement('li');
    nuevoProducto.innerText = x;
    supermercado.append(nuevoProducto);
})
