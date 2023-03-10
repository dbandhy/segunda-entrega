import { Schema } from 'mongoose';
import Container from '../containers/containerMongo.js';
import { products } from '../controllers/controllerProducts.js';

class Carts extends Container {
	constructor() {
		super('carts', new Schema(
			{
				products: [
					{
						name: { type: String, require: true },
						code: { type: Number, require: true },
						price: { type: Number, require: true },
						
					},
					{ timestamps: true }
				]
			}, { timestamps: true }));
	}
	getProducts(id) {
		return this.model.findById(id).find({ products: {} });
	}
	async saveProduct(idProduct, idCart) {
		console.log(idProduct, idCart);
		const product = await products.model.findById(idProduct);
		const cart = await this.model.findById(idCart);
		await cart.products.push(product);
		return await cart.save();
	}
	async deleteProduct(idCart, idProduct) {
		const cart = await this.model.findById(idCart);
		const index = await cart.products.findIndex(el => el._id == idProduct);
		await cart.products.splice(index, 1);
		return await cart.save();
	}
}

export { Carts }; 