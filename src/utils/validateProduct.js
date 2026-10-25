export const validateProduct = (product) => {
  const  errors = {}
  if (!product.name.trim()) {
    errors.name = "Ingrese un nombre del producto"
  }
  
  if (!product.price || product.price <= 0) {
    errors.price = "Ingrese un precio de producto mayor a cero"
  }

  if (!product.description.trim()) {
    errors.description = "Ingrese una descripción del producto"
  }

  if (!product.file) {
    errors.file = "Debe seleccionar una imagen"
  }

  return errors
}