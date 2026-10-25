import { useState } from "react"
import { replace, useNavigate } from "react-router-dom"
import { ProductFormUI } from "./ProductFormUI"
import { validateProduct } from "../../../utils/validateProduct"
import { uploadImage } from "../../../services/uploadImage"
import { createProduct } from "../../../services/productsService"

export const ProductFormContainer = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: ""
  })
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null
    setFile(file)
  }

  const handleSubmit = async (e) => {
    //era para prevenir el comportamiento por defecto del formulario
    e.preventDefault()
    setErrors({})
    setLoading(true)

    const newErrors = validateProduct({ ...product, file })
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setLoading(false)

      return
    }

    try {
      const imageURL = await uploadImage(file)
      const newProduct = {
        ...product,
        price: Number(product.price),
        image: imageURL
      }
      const newProductId = await createProduct(newProduct)
      setProduct({
        name: "",
        price: "",
        description: "",
        category: ""
      })
      setFile(null)

      navigate(`/admin/products/success/${newProductId}`, { replace: true })
    } catch (error) {
      setErrors({ general: error.message })
    } finally {
      setLoading(false)
    }
  }

  return <ProductFormUI
    product={product}
    errors={errors}
    loading={loading}
    handleChange={handleChange}
    handleFileChange={handleFileChange}
    handleSubmit={handleSubmit}
  />
}