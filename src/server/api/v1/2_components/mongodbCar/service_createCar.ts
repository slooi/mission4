import mongoose from "mongoose";
import { Car, CarModel } from "./model_schema_car";

export async function createCar(carModel:Car){
	await CarModel.create({...carModel})
} 

const carData =[
	{
	  imageName: 'pickup0.webp',
	  type: 'pickup',
	  __v: 0
	},
	{
	  imageName: 'pickup1.webp',
	  type: 'pickup',
	  __v: 0
	},
	{
	  imageName: 'pickup2.webp',
	  type: 'pickup',
	  __v: 0
	},
	{
	  imageName: 'supercar0.webp',
	  type: 'supercar',
	  __v: 0
	},
	{
	  imageName: 'supercar1.webp',
	  type: 'supercar',
	  __v: 0
	},
	{
	  imageName: 'supercar2.webp',
	  type: 'supercar',
	  __v: 0
	},
	{
	  imageName: 'truck0.webp',
	  type: 'truck',
	  __v: 0
	},
	{
	  imageName: 'truck1.webp',
	  type: 'truck',
	  __v: 0
	},
	{
	  imageName: 'truck2.webp',
	  type: 'truck',
	  __v: 0
	},
	{
	  imageName: 'van0.webp',
	  type: 'van',
	  __v: 0
	},
	{
	  imageName: 'van1.webp',
	  type: 'van',
	  __v: 0
	},
	{
	  imageName: 'van2.webp',
	  type: 'van',
	  __v: 0
	},
	{
	  imageName: 'suv0.webp',
	  type: 'suv',
	  __v: 0
	},
	{
	  imageName: 'suv1.webp',
	  type: 'suv',
	  __v: 0
	},
	{
	  imageName: 'suv2.webp',
	  type: 'suv',
	  __v: 0
	}
  ]


export async function seedCars(){
	await CarModel.insertMany(carData)
}

/* 
	await CarModel.create({
		imageName:"van0.webp",
		type:"van"
	})	
*/