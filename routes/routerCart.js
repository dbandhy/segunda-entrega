import { Router } from "express";
import { addCart, deleteCart, getProducts, addProduct, deleteProduct } from "../controllers/controllerCart.js";
const routerCarts = Router();

//Agregar carrito de compras
routerCarts.post('/', addCart);

//eliminar carrito
routerCarts.delete('/:id', deleteCart);

//obtener productos del carrito
routerCarts.get('/:id/products', getProducts);

//agregar producto al carrito
routerCarts.post('/:id/products', addProduct);

//Eliminar producto del carrito
routerCarts.delete('/:id/products/:id_prod', deleteProduct);

export {routerCarts};
