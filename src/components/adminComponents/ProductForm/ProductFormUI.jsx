import "./ProductFormUI.css"

export const ProductFormUI = ({
  product,
  errors,
  loading,
  handleChange,
  handleFileChange,
  handleSubmit
}) => {
  return <section className="product-form-section">
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Agregar nuevo producto</h3>
      <div className="product-form-fields">
        <label>Nombre</label>
        <input type="text" name="name" value={product.name} onChange={handleChange}/>
        {errors.name && <p className="product-form-error">{errors.name}</p>}

        <label>Precio</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} min="0"/>
        {errors.price && <p className="product-form-error">{errors.price}</p>}

        <label>Descripción</label>
        <input type="text" name="description" value={product.cage} onChange={handleChange}/>
        {errors.description && <p className="product-form-error">{errors.description}</p>}

        <label>Categoria</label>
        <input type="text" name="category" value={product.category} onChange={handleChange}/>

        <label>Imagen</label>
        <input type="file" accept="image/" onChange={handleFileChange}/>
        {errors.file && <p className="product-form-error">{errors.file}</p>}
        
        {/* El boton estará desabilitado y con el texto Guardando cuando loading sea true */}
        <button type="submit" disabled={loading}>
          {loading ? "Guardando" : "Guardar"}
        </button>
      </div>

      {errors.general && <p className="product-form-error product-form-general-error">{errors.general}</p>}
    </form>
  </section>
}