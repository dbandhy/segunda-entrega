import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import routerProducts from './routes/routerProduct.js';
import routerCarts from './routes/routerCart.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/products', routerProducts);
app.use('/api/cart', routerCarts);
app.use('*', (req, res) => {
	const path = req.params;
	const method = req.method;
	res.send({ error: -2, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
});

const server = app.listen(PORT, async () => {
	// await connect('mongodb://localhost:27017/products');
	console.log(`Server running on PORT ${PORT}`);
});

server.on('error', err => console.log(err));