function ProductList({
  products,
  handleEdit,
  handleDelete
}) {

  console.log("ProductList rendered");
  console.log("products:", products);
  console.log("products type:", typeof products);
  console.log("Is products an array?", Array.isArray(products));

  // Error handling
  if (!Array.isArray(products)) {
    console.error("ERROR: products is not an array!");
    console.error("Received products:", products);

    return (
      <div>
        <h2>Product List</h2>

        <p style={{ color: "red" }}>
          Something went wrong! Products data is invalid.
        </p>
      </div>
    );
  }

  // If array is empty
  if (products.length === 0) {
    console.log("No products found");

    return (
      <div>
        <h2>Product List</h2>

        <p>No products found</p>
      </div>
    );
  }

  // Products are valid
  console.log("Products found:", products.length);

  return (
    <div>
      <h2>Product List</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {

            console.log("Rendering product:", product);

            return (
              <tr key={product._id}>

                <td>
                  {index + 1}
                </td>

                <td>
                  {product.name}
                </td>

                <td>
                  ₹{product.price}
                </td>

                <td>
                  {product.category}
                </td>

                <td>
                  {product.inStock.toString()}
                </td>

                <td>

                  <button
                    onClick={() => {
                      console.log("Edit clicked:", product);
                      handleEdit(product);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      console.log("Delete clicked:", product._id);
                      handleDelete(product._id);
                    }}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}

export default ProductList;
