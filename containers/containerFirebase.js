
import admin from 'firebase-admin';
import fs from 'fs'

const serviceAccount = JSON.parse(await fs.promises.readFile('../config/segundaentrega-eb045-firebase-adminsdk-vokpo-977abcf2cd.json', 'utf-8'));
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
import { getFirestore } from 'firebase-admin/firestore';


class Container {
	constructor() {
		this.db = getFirestore();
	}
	//guardar un objeto
	save(obj) {
		try {
			return this.db.collection('products').add(obj);
		} catch (err) {
			console.log(err);
		}
	}
	//OBtener por ID
	getById(id) {
		try {
			const data = this.db.doc(`/products/${id}`).get();
			return data;
		} catch (err) {
			console.log(err);
		}
	}
	//Obtener todos los productos
	getAll() {
		try {
			return this.model.find();
		} catch (err) {
			console.log(err);
		}
	}
	//Borrar por ID
	deleteById(id) {
		try {
			return this.model.findByIdAndDelete(id);
		} catch (err) {
			console.log(err);
		}
	}
}

export {Container}