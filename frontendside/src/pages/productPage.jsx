import { useEffect, useState} from "react";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../productServices/productServices";
import ProductForm from "../components/productForm";
import ProductList from "../components/ProductList";

function ProductPage()
{
const [products, setProducts] = useState([])
const [formData, setFormData] = useState({
     name: "",
    price: "",
    category: "",
    inStock: false
})

const [editId, setEditId] = useState(null)


const fetchProducts = async () => {
  try {
    const data = await getProducts();
    console.log("data",data.products);
    console.log("Is array:", Array.isArray(data));
    setProducts(data);
  } catch (error) {
    console.log("Error fetching products", error);
  }
};



useEffect(() => {
  console.log("page loaded")
  fetchProducts();
}, []);


//INPUT CHANGE  
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value
  });
};

  // ADD / UPDATE
const handleSubmit = async (e) =>{
e.preventDefault()

try {

      if (editId) {
        await updateProduct(
          editId,
          formData
        );

        alert("Product updated successfully");

      } 
      else {

        
        await createProduct(formData);

        alert("Product added successfully");
      }
        
      resetForm();
      fetchProducts();
}

catch (error) {

      console.log(
        "Error:",
        error
      );

    }
}

// EDIT
  const handleEdit = (product) => {

    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      inStock: product.inStock
    });

    setEditId(product._id);

  };

    // DELETE
  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this product?"
      );

    if (!confirmDelete) {
      return;
    }

    try {

      await deleteProduct(id);

      alert(
        "Product deleted successfully"
      );

      fetchProducts();

    } catch (error) {

      console.log(
        "Delete error:",
        error
      );

    }

  };
// RESET FORM
  const resetForm = () => {

    setFormData({
      name: "",
      price: "",
      category: "",
      inStock: false
    });

    setEditId(null);

  };

return(
  
 <div className="container">

      <h1>Product CRUD</h1> 
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editId={editId}
        cancelEdit={resetForm}
      />


      <hr />
<br/>

      <ProductList
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />


    </div>

  );

}

export default ProductPage