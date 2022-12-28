
import { model } from 'mongoose';

class Container {
	constructor(collection, schema) {
		this.model = model(collection, schema);
	}
	//Guardar un objeto
	save(obj) {
		try {
			return this.model.create(obj);
		} catch (err) {
			console.log(err);
		}
	}
	//Obtener por ID
	getById(id) {
		try {
			return this.model.findById(id);
		} catch (err) {
			console.log(err);
		}
	}

	//Obtener productos
	getAll() {
		try {
			return this.model.find();
		} catch (err) {
			console.log(err);
		}
	}
	//Eliminar un producto
	deleteById(id) {
		try {
			return this.model.findByIdAndDelete(id);
		} catch (err) {
			console.log(err);
		}
	}
}

export { Container}