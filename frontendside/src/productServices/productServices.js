import axios from "axios"
const API_URI = `${import.meta.env.VITE_API_URI}/products`;


// GET ALL PRODUCTS
export const getProducts = async () => {
    const response  = await axios.get(API_URI)
    return response.data ;
}


// CREATE PRODUCT
export const createProduct = async (product) => {
    const response = await axios.post(API_URI, product)
     return response.data
}

// UPDATE PRODUCT
export const updateProduct = async (id ,product) => {
    const response = await axios.put(`${API_URI}/${id}`, product)
     return response.data
}
// DELETE PRODUCT
 export const deleteProduct = async(id)=>{
    const response = await axios.delete(
        `${API_URI}/${id}`
    )
    return response.data
 }