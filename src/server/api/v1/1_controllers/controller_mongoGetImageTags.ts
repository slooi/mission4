import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"
import "dotenv/config"
import { AzureTagArray } from "../2_components/model_azureTagArray";
import { service_getAllImageUrlsFromCarTypes } from "../2_components/service_getAllImageUrlsFromCarTypes";
import { service_filterForCarTypesOnly } from "../2_components/service_filterForCarTypesOnly";
import { getCarsByType } from "../2_components/mongodbCar/service_findCar";

const controller_mongoGetImageTags = async (req:Request,res:Response)=>{
	if (req.file) {
		const userSpecifiedFileName = req.file.originalname;
		const imageUrl = `${process.env.SERVER_IP_N_SCHEME}/public/userUploads/${userSpecifiedFileName}`;
		const tags = await getTagsFromImageUrl(imageUrl)	
		
		try{
			const azureTagArray = AzureTagArray.parse(tags)
			const tagNames = azureTagArray.map(tagItem=>tagItem.name)
			console.log("tagNames",tagNames)
			const imageUrls = await getCarsByType(tagNames)

			console.log("imageUrls")
			console.log(imageUrls)
			res.status(200).json(imageUrls)
		}catch(err){
			res.status(400).json({ error: "Tags did not match AzureTagArray model!" });
		}
	} else {
		res.status(400).json({ error: "No file uploaded" });
	}
}


// #################### DEV VERSION #################
const controller_getImageTagsDev = async (req:Request,res:Response)=>{
	const imageUrl = `${process.env.SERVER_IP_N_SCHEME}/public/img.jpg`;
	const tags = await getTagsFromImageUrl(imageUrl)
	res.json(tags)
}

export {controller_mongoGetImageTags,controller_getImageTagsDev}