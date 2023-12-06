import express from "express"
import { router_apiMaster } from "./api/router_apiMaster"
import path from "path"
import { fileURLToPath } from 'url';
import mongoose from "mongoose"
import { createCar } from "./api/v1/2_components/mongodbCar/service_createCar";
import { getCarByType } from "./api/v1/2_components/mongodbCar/service_findCar";

// Connect to server
mongoose.connect("mongodb://127.0.0.1:27017/car_store")
	.then(_=>console.log('mongodb connected!'))
	.catch(err=>{throw new Error(err)})

// async function get(){
// 	console.log(await getCarByType("supercar"))
// }
// get()
// createCar({imageName:"van0.webp",type:"van"})
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const express_app = express()

// Middleware
express_app.use(express.json())	// Allow server to parse incoming json data
express_app.use("/public",express.static(path.join(__dirname,"..","client","public")))

// Routes normal route
express_app.get("/",(req,res)=>{
	console.log("hi!")
	res.sendFile(path.join(__dirname,"..","client","index.html"))
})

// TESTING
express_app.post("/test",(req,res)=>{
	console.log("/test")
	console.log(req)
})

// Midleware Routes
express_app.use(router_apiMaster)

export {express_app}