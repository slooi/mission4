import { Car, CarModel } from "./model_schema_car"

// Delete Car
export const deleteCar = async (imageName: Car["imageName"]) => {
	// return await carModel.find({type:{$in:types}})
	return await CarModel.deleteOne({imageName:imageName}) 
}