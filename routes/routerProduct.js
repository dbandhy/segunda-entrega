import { Router } from "express";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../controllers/controllerProducts.js";
const routerProducts = Router();

//Obtener todos los productos
routerProducts.get('/:id?', getProducts);

//Agregar producto
routerProducts.post('/', addProduct);

//Actualizar producto
routerProducts.put('/:id', updateProduct);

//eliminar producto
routerProducts.delete('/:id', deleteProduct);

export { routerProducts}