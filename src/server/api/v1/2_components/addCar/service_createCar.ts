import { Car, CarModel } from "./model_schema_car";

export async function createCar(carModel:Car){
	await CarModel.create({...carModel})
} 

/* 
	await CarModel.create({
		imageName:"van0.webp",
		type:"van"
	})	
*/