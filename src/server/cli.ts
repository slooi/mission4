#!/usr/bin/env node
import { program } from "commander";
import { createCar, seedCars } from "./api/v1/2_components/mongodbCar/service_createCar";
import mongoose from "mongoose";
import { deleteCar } from "./api/v1/2_components/mongodbCar/service_deleteCar";

// Connect to mongoose
await mongoose.connect("mongodb://127.0.0.1:27017/car_store")
	.then(_ => console.log('mongodb connected!'))
	.catch(err => { throw new Error(err) })



// ADD
program
	.command("add <carUrl>")
	.option('-t, --tags <numbers...>', 'specify tags')
	.action(async (carUrl, { tags }) => {
		console.log('carUrl:', carUrl);
		console.log('tags:', tags);

		if (tags.length > 0) {
			console.log("MANUAL AUTO TAG")
			console.log({ imageName: carUrl, type: tags[0] })
			await createCar({ imageName: carUrl, type: tags[0] })
		} else {
			console.log("IMPLEMENT AUTO TAG")

		}
		mongoose.disconnect()
	});



	

// DELETE
program
	.command("delete <carUrl>")
	.action(async (carUrl) => {
		console.log('carUrl:', carUrl);
		await deleteCar(carUrl).then(res => console.log("deleted"))
		mongoose.disconnect()
	});



// SEED
program
.command("seed")
.action(async () => {
	await seedCars()
	mongoose.disconnect()
});





program.parse();