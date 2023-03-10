// const Products = require('../containers/containerProducts.js');
import Products from '../containers/containerFirebase.js';

const products = new Products();

//OBtener todos los productos
const getProducts = async (req, res) => {
	if (req.params.id == undefined) return res.json(await products.getAll());
	const product = await products.getById(req.params.id);
	console.log(product);
	if (!product) return res.status(404).send({ message: 'El ID no pertenece a un producto listado' });
	res.json(product);
}

//Agregar producto
const addProduct = async (req, res) => {
	const { name, description, code, price } = req.body;
	await products.save({ name, description, code, price });
	res.json({ message: 'Producto agregado' });
}

//Actualizar producto
const updateProduct = async (req, res) => {
	await products.updateProduct(req.params.id, req.body);
	res.json({ message: 'Producto actualizado' });
}

//Eliminar producto
const deleteProduct = async (req, res) => {
	await products.deleteById(req.params.id);
	res.json({ message: 'Producto eliminado' });
};

export { products, getProducts, addProduct, updateProduct, deleteProduct }