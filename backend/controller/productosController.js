let productos = [
    {id: 1, nombre: "Camisa a cuadros", precio: 30.0, categoria: 'Ropa'},
    {id: 2, nombre: "Gafas", precio: 25.0, categoria: 'Accesorios'},

]

export const getProductos = (req, res) => {
    res.status(200).json(productos)
}