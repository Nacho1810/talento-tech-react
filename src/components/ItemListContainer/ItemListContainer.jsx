import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProductByCategory, getProducts } from "../../services/productsService";
import { CategoryList } from "../CategoryList/CategoryList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([])

  const { category } = useParams()

  useEffect(() => {
    getProductByCategory(category)
      .then((data) => {setProducts(data)})
      .catch(error => setErrors(error.message))
      .finally(() => setLoading(false))
  }, [category])

  // Agrega las categorias una vez al montar la lista de Productos
  useEffect(() => {
    getProducts()
      .then((data) => {
        // Listamos todas las categorias
        const productCategories = data.map((product) => product.category)
        // Quitamos las categorias repetidas
        setCategories(productCategories.filter((name, index) => name && productCategories.indexOf(name) === index))
      })
      .catch(error => setErrors(error.message))
  }, [])

  if (loading) return <p className="status-message">Cargando</p>
  if (errors) return <p className="status-message">{errors}</p>

  return <section className="products-page">
    <h1>Productos</h1>
    <CategoryList categories={categories} />
    {/*prop_llamada_products = array_llamado_products */}
    <ItemList products={products} />

  </section>;
}
