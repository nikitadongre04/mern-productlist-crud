
function ProductForm({
  formData,
  handleChange,
  handleSubmit,
  editId,
  cancelEdit
}) {
  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
      />
<br/>
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
<br/>

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
<br/>

   stock available - <input
  type="checkbox"
  name="inStock"
  checked={formData.inStock}
  onChange={handleChange}
/>
<br/>

      <button type="submit">
        {editId ? "Update Product" : "Add Product"}
      </button>

      {editId && (
        <button
          type="button"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      )}

    </form>
  );
}

export default ProductForm;