import Carts from '../containers/containerCart.js';

const carts = new Carts();
let admin;

//Agregar a carrito
const addCart = async (req, res) => {
	await carts.save(req.body);
	res.json({ message: 'Carrito agregado' });
}

//Eliminar carrito
const deleteCart = async (req, res) => {
	await carts.deleteById(req.params.id);
	res.json({ message: 'Carrito eliminado' });
}

//OBtener productos de un carrito
const getProducts = async (req, res) => {
	const cartSelected = await carts.getProducts(req.params.id);
	res.send(cartSelected);
}

//Agregar productos a un carrito
const addProduct = (req, res) => {
	carts.saveProduct(req.body.idCart, req.params.id);
	res.json({ message: 'Producto agregado' });
}

//Eliminar productos de un carrito
const deleteProduct = (req, res) => {
	carts.deleteProduct(req.params.id, req.params.id_prod);
	res.json({ message: 'Producto eliminado' });
}

export { addCart, deleteCart, getProducts, addProduct, deleteProduct }