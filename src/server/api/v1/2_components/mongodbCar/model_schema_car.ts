import mongoose from "mongoose"
import z from "zod"

// ZOD SCHEMA
export const CarSchemaZod = z.object({
	imageName: z.string().min(1),
	type: z.string().min(1)
})

// INTERFACE
export type Car = z.infer<typeof CarSchemaZod>

// MONGOOSE SCHEMA
const CarSchemaMongoose = new mongoose.Schema<Car>({
	imageName: String,
	type: String,
})

// MONGOOSE CARMODEL
export const CarModel = mongoose.model("cars",CarSchemaMongoose)

