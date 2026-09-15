import express from "express"
import { createProductController, deleteProductController, getAllProductController, getProductController, updateProductController } from "../controllers/productController.js"

const route = express.Router()


route.post("/", createProductController)
route.get("/", getAllProductController)
route.get("/:id", getProductController)
route.put("/:id", updateProductController)
route.delete("/:id", deleteProductController)


export default route
