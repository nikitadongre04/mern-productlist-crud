import Product from "../models/productmodel.js"



export const createProductController = async (req,res)=>{
    try {
        const {name, price, category, inStock} = req.body
        if(!name || !price || !category || !inStock === undefined)
        {
            return res.json({
                message : "All fields are required"
            })
        }
      const product = await Product.create({
      name,
      price,
      category,
      inStock
    })
    res.json(product)

    } catch (error) {
        res.json({
            message: error.message
        })
    }

}


// to get all products
export const getAllProductController = async (req, res) => {
try {
    const products = await Product.find();
    res.json(products)
} catch (error) {
    res.json({
        message : error.message
    })
}
}   

export const getProductController = async(req,res)=>{
    try{
     const product = await Product.findById(req.params.id)
     if(!product){
        return res.json({
            message : "Product not found in list"
        })
     }
     res.json(product)
    }
    catch(error){
        res.json({
            message : error.message
        })
    }
}


export const updateProductController = async (req,res)=>{
try {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
    )
    res.json(product)   
} catch (error) {
    res.json({
    message : error.message
    })
}
}



export const deleteProductController = async(req, res) =>{
try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product){
        return res.json({
            message: "Given product not found list"
        })
    }
    res.json({
        message : "product deleted successfully"
    })
} catch (error) {
    res.json({
        message: error.message
    })
}
} 


export default {createProductController, getAllProductController, getProductController,updateProductController,deleteProductController}