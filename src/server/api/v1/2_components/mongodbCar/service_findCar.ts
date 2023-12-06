import mongoose from "mongoose";
import { Car, CarModel } from "./model_schema_car";

const PATH_PREFIX = "public/imgs/"


export const getCarsByType = async(types: Car["imageName"][])=>{
	const cars = await CarModel.find({type:{$in:types}},{imageName:true})
	return cars.map(car=>PATH_PREFIX+car.imageName)
}