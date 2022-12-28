import { Schema } from 'mongoose';
import  Container from './containerMongo.js';

class Products extends Container {
	constructor() {
		super('products', new Schema(
			{
				name: { type: String, require: true },
				code: { type: Number, require: true },
				price: { type: Number, require: true },
				
			},
			{ timestamps: true }
		));
	}
	updateProduct(id, data) {
		try {
			return this.model.findByIdAndUpdate(id, data);
		} catch (error) {
			console.log(error);
		}
	}
}

export { Products}