import mongoose from "mongoose";
import { Car, CarModel } from "./model_schema_car";


export const getCarByType = async(type: Car["imageName"])=>{
	return await CarModel.find({type:type},{imageName:true})
}